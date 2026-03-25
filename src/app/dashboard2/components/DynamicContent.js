"use client";

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import { TableKit } from "@tiptap/extension-table";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Code,
  Quote,
  List,
  ListOrdered,
  CheckSquare,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  FileText,
  Link as LinkIcon,
  Unlink as UnlinkIcon,
  Table as TableIcon,
  Undo2,
  Redo2,
} from "lucide-react";
import { ImageUploadButton } from "@/components/tiptap-ui/image-upload-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import "./../../globals.css";

export default function DynamicContent({ selected }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [nodeType, setNodeType] = useState("");
  const [orderIndex, setOrderIndex] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4, 5, 6] },
      }),
      Underline,
      Link.configure({
        openOnClick: true,
        linkOnPaste: true,
      }),
      Image,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TableKit.configure({
        resizable: true,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    const fetchContent = async () => {
      if (!selected?.id) return;
      setLoading(true);
      setError("");

      try {
        const res = await fetch(`${API_URL}/docs-nodes/${selected.id}`);

        if (res.ok) {
          const data = await res.json();
          const node = data.data;
          const nodeContent = node?.content || "";
          setContent(nodeContent);
          setTitle(node?.title || "");
          setImageUrl(node?.imageUrl || "");
          setNodeType(node?.type || "");
          setOrderIndex(node?.orderIndex ?? null);
          setPageNumber(node?.pageNumber ?? null);
          if (editor) {
            editor.commands.setContent(nodeContent);
          }
        } else {
          throw new Error("Gagal memuat konten dari server.");
        }
      } catch (err) {
        console.error("Error fetching content:", err);
        setError("Terjadi kesalahan koneksi ke server.");
        const fallbackTitle = selected?.title || "";
        setContent("");
        setTitle(selected?.title || "");
        setImageUrl("");
        setNodeType("");
        setOrderIndex(null);
        setPageNumber(null);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      setContent("");
      setTitle("");
      setImageUrl("");
      setNodeType("");
      setOrderIndex(null);
      setPageNumber(null);
    };
  }, [selected, editor]);

  const handleSetLink = async () => {
    if (!editor) return;
    const { value: url } = await Swal.fire({
      title: "Masukkan URL",
      input: "url",
      inputPlaceholder: "https://...",
      showCancelButton: true,
      confirmButtonText: "Simpan",
      cancelButtonText: "Batal",
    });
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const handleUnsetLink = () => {
    if (!editor) return;
    editor.chain().focus().unsetLink().run();
  };

  const handleImageAlign = (align) => {
    if (!editor) return;
    const style =
      align === "center"
        ? "display:block;margin-left:auto;margin-right:auto;"
        : align === "right"
        ? "display:block;margin-left:auto;margin-right:0;"
        : "display:block;margin-left:0;margin-right:auto;";
    editor.chain().focus().updateAttributes("image", { style }).run();
  };

  const activeImageAlign = () => {
    if (!editor) return "";
    const style = editor.getAttributes("image")?.style || "";
    if (
      style.includes("margin-left:auto") &&
      style.includes("margin-right:auto")
    )
      return "center";
    if (style.includes("margin-left:auto")) return "right";
    if (style.includes("margin-right:auto")) return "left";
    return "";
  };

  const handleHeadingChange = (value) => {
    if (!editor) return;
    if (value === "paragraph") {
      editor.chain().focus().setParagraph().run();
      return;
    }
    const level = Number(value.replace("h", ""));
    if (!Number.isNaN(level)) {
      editor.chain().focus().toggleHeading({ level }).run();
    }
  };

  const activeHeading = () => {
    if (!editor) return "paragraph";
    if (editor.isActive("heading", { level: 1 })) return "h1";
    if (editor.isActive("heading", { level: 2 })) return "h2";
    if (editor.isActive("heading", { level: 3 })) return "h3";
    if (editor.isActive("heading", { level: 4 })) return "h4";
    if (editor.isActive("heading", { level: 5 })) return "h5";
    if (editor.isActive("heading", { level: 6 })) return "h6";
    return "paragraph";
  };

  const handleSave = async () => {
    if (!selected?.id) return;
    setSaving(true);

    try {
      const payload = {
        title,
        content,
        imageUrl,
      };

      const response = await fetch(`${API_URL}/docs-nodes/${selected.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        await response.json();
        Swal.fire({
          icon: "success",
          title: "Sukses",
          text: "Konten berhasil disimpan!",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        throw new Error("Gagal menyimpan konten");
      }
    } catch (error) {
      console.error("Error saving content:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat menyimpan konten.",
      });
    } finally {
      setSaving(false);
    }
  };

  if (!selected?.id) {
    return (
      <div className="w-full px-6 pt-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileText size={18} />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                Belum ada konten dipilih
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Pilih node di sidebar untuk mulai menulis, mengedit, dan
                mengelola dokumentasi.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-500">
                <span className="rounded-full bg-gray-100 px-3 py-1">
                  Pilih Head/Sub/Page
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1">
                  Gunakan toolbar untuk formatting
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1">
                  Upload gambar & atur alignment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-gray-500">
        Memuat konten...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-start w-full px-6 pt-2 overflow-hidden">
      <h1 className="text-2xl font-bold text-gray-900">
        {selected?.title || "Tanpa Judul"}
      </h1>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="w-full">
        <label className="text-sm font-medium text-gray-700 block mb-1">
          Judul Konten
        </label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Masukkan judul konten"
        />
      </div>

      {/* <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Tipe
          </label>
          <Input
            value={nodeType}
            readOnly
            className="bg-gray-50"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Order
          </label>
          <Input
            value={orderIndex ?? ""}
            readOnly
            className="bg-gray-50"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Page
          </label>
          <Input
            value={pageNumber ?? ""}
            readOnly
            className="bg-gray-50"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Image URL
          </label>
          <Input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://..."
          />
        </div>
      </div> */}

      <div className="tiptap-shell">
        <div className="tiptap-toolbar">
        <div className="tiptap-group">
          <Select
            value={activeHeading()}
            onChange={(e) => handleHeadingChange(e.target.value)}
            className="tiptap-select"
            disabled={!editor}
          >
            <option value="paragraph">Paragraph</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
            <option value="h5">Heading 5</option>
            <option value="h6">Heading 6</option>
          </Select>
        </div>
        <span className="tiptap-divider" />
        <div className="tiptap-group">
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className={`tiptap-btn ${editor?.isActive("bold") ? "active" : ""}`}
            disabled={!editor}
          >
            <Bold size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className={`tiptap-btn ${editor?.isActive("italic") ? "active" : ""}`}
            disabled={!editor}
          >
            <Italic size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            className={`tiptap-btn ${editor?.isActive("underline") ? "active" : ""}`}
            disabled={!editor}
          >
            <UnderlineIcon size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            className={`tiptap-btn ${editor?.isActive("strike") ? "active" : ""}`}
            disabled={!editor}
          >
            <Strikethrough size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleCode().run()}
            className={`tiptap-btn ${editor?.isActive("code") ? "active" : ""}`}
            disabled={!editor}
          >
            <Code size={16} />
          </button>
        </div>
        <span className="tiptap-divider" />
        <div className="tiptap-group">
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            className={`tiptap-btn ${editor?.isActive("bulletList") ? "active" : ""}`}
            disabled={!editor}
          >
            <List size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            className={`tiptap-btn ${editor?.isActive("orderedList") ? "active" : ""}`}
            disabled={!editor}
          >
            <ListOrdered size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleTaskList().run()}
            className={`tiptap-btn ${editor?.isActive("taskList") ? "active" : ""}`}
            disabled={!editor}
          >
            <CheckSquare size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleBlockquote().run()}
            className={`tiptap-btn ${editor?.isActive("blockquote") ? "active" : ""}`}
            disabled={!editor}
          >
            <Quote size={16} />
          </button>
        </div>
        <span className="tiptap-divider" />
        <div className="tiptap-group">
          <button
            type="button"
            onClick={() => editor?.chain().focus().setTextAlign("left").run()}
            className={`tiptap-btn ${editor?.isActive({ textAlign: "left" }) ? "active" : ""}`}
            disabled={!editor}
          >
            <AlignLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().setTextAlign("center").run()}
            className={`tiptap-btn ${editor?.isActive({ textAlign: "center" }) ? "active" : ""}`}
            disabled={!editor}
          >
            <AlignCenter size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().setTextAlign("right").run()}
            className={`tiptap-btn ${editor?.isActive({ textAlign: "right" }) ? "active" : ""}`}
            disabled={!editor}
          >
            <AlignRight size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().setTextAlign("justify").run()}
            className={`tiptap-btn ${editor?.isActive({ textAlign: "justify" }) ? "active" : ""}`}
            disabled={!editor}
          >
            <AlignJustify size={16} />
          </button>
        </div>
        <span className="tiptap-divider" />
        <div className="tiptap-group">
          <button
            type="button"
            onClick={handleSetLink}
            className={`tiptap-btn ${editor?.isActive("link") ? "active" : ""}`}
            disabled={!editor}
          >
            <LinkIcon size={16} />
          </button>
          <button
            type="button"
            onClick={handleUnsetLink}
            className="tiptap-btn"
            disabled={!editor}
          >
            <UnlinkIcon size={16} />
          </button>
          <ImageUploadButton
            editor={editor}
            text="Add"
            hideWhenUnavailable={false}
            className="tiptap-btn tiptap-btn-wide"
          />
          <button
            type="button"
            onClick={() => handleImageAlign("left")}
            className={`tiptap-btn ${
              activeImageAlign() === "left" ? "active" : ""
            }`}
            disabled={!editor || !editor?.isActive("image")}
          >
            <AlignLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => handleImageAlign("center")}
            className={`tiptap-btn ${
              activeImageAlign() === "center" ? "active" : ""
            }`}
            disabled={!editor || !editor?.isActive("image")}
          >
            <AlignCenter size={16} />
          </button>
          <button
            type="button"
            onClick={() => handleImageAlign("right")}
            className={`tiptap-btn ${
              activeImageAlign() === "right" ? "active" : ""
            }`}
            disabled={!editor || !editor?.isActive("image")}
          >
            <AlignRight size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
            className="tiptap-btn"
            disabled={!editor}
          >
            <TableIcon size={16} />
          </button>
        </div>
        <span className="tiptap-divider" />
        <div className="tiptap-group">
          <button
            type="button"
            onClick={() => editor?.chain().focus().undo().run()}
            className="tiptap-btn"
            disabled={!editor}
          >
            <Undo2 size={16} />
          </button>
          <button
            type="button"
            onClick={() => editor?.chain().focus().redo().run()}
            className="tiptap-btn"
            disabled={!editor}
          >
            <Redo2 size={16} />
          </button>
          <button
            type="button"
            onClick={() => {
              Swal.fire({
                title: "Yakin ingin menghapus semua isi editor?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Ya, hapus!",
                cancelButtonText: "Batal",
              }).then((result) => {
                if (result.isConfirmed && editor) {
                  editor.commands.clearContent();
                  setContent("");
                }
              });
            }}
            className="tiptap-btn"
            disabled={!editor}
          >
            Clear
          </button>
        </div>
        </div>

        <div className="tiptap-wrapper">
        <EditorContent editor={editor} className="tiptap-editor" />
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <Button
          type="button"
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? "Menyimpan..." : "Simpan"}
        </Button>
      </div>
    </div>
  );
}
