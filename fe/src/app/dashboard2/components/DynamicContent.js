"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import "react-quill-new/dist/quill.snow.css";
import "./../../globals.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function DynamicContent({ selected }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [sectionId, setSectionId] = useState(null);
  const [rowsInput, setRowsInput] = useState(3);
  const [colsInput, setColsInput] = useState(3);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const quillRef = useRef(null);

  // 🔹 Fetch content berdasarkan documentId
  useEffect(() => {
    const fetchContent = async () => {
      if (!selected?.submenu) return;
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `http://localhost:5000/api/sections/document/${selected.submenu.id}`
        );

        if (res.ok) {
          const data = await res.json();

          if (data.data && data.data.length > 0) {
            const firstSection = data.data[0];
            setSectionId(firstSection.id);
            setContent(firstSection.content || "");
            setTitle(firstSection.title || selected.submenu.title || "");
          } else {
            setSectionId(null);
            setContent("");
            setTitle(selected.submenu.title || "");
          }
        } else {
          throw new Error("Gagal memuat konten dari server.");
        }
      } catch (err) {
        console.error("Error fetching content:", err);
        setError("Terjadi kesalahan koneksi ke server.");
        setSectionId(null);
        setContent("");
        setTitle(selected.submenu.title || "");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      setContent("");
      setTitle("");
      setSectionId(null);
    };
  }, [selected]);

  // 🔹 Sisipkan video YouTube
  const videoHandler = async () => {
    const { value: url } = await Swal.fire({
      title: "Masukkan URL video YouTube",
      input: "url",
      inputPlaceholder: "https://www.youtube.com/watch?v=...",
      showCancelButton: true,
      confirmButtonText: "Sisipkan",
      cancelButtonText: "Batal",
    });

    if (url) {
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/i);
      if (match && match[1]) {
        const embedUrl = `https://www.youtube.com/embed/${match[1]}`;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection(true);
        editor.insertEmbed(range.index, "video", embedUrl, "user");
        editor.setSelection(range.index + 1);
      } else {
        Swal.fire({
          icon: "error",
          title: "URL tidak valid",
          text: "Pastikan URL adalah video YouTube yang benar.",
        });
      }
    }
  };

  // 🔹 Sisipkan tabel
  const insertEditableTable = (rows, cols) => {
    if (!quillRef.current) return;
    const editor = quillRef.current.getEditor();
    if (!editor) return;

    let tableHtml =
      '<table class="editable-table" border="1" cellpadding="4" cellspacing="0" style="border-collapse: collapse;">';
    for (let i = 0; i < rows; i++) {
      tableHtml += "<tr>";
      for (let j = 0; j < cols; j++) {
        tableHtml += "<td><br></td>";
      }
      tableHtml += "</tr>";
    }
    tableHtml += "</table><p><br></p>";

    editor.clipboard.dangerouslyPasteHTML(
      editor.getSelection()?.index || 0,
      tableHtml
    );
  };

  // 🔹 Simpan konten (buat/update)
  const handleSave = async () => {
    if (!selected?.submenu) return;
    setSaving(true);

    try {
      const payload = {
        title,
        content,
        documentId: selected.submenu.id, // ✅ pakai documentId dari submenu
      };

      let response;
      if (sectionId) {
        // Update section
        response = await fetch(
          `http://localhost:5000/api/sections/${sectionId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(payload),
          }
        );
      } else {
        // Create section baru
        response = await fetch("http://localhost:5000/api/sections", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        });
      }

      if (response.ok) {
        const newData = await response.json();
        if (!sectionId) setSectionId(newData.data.id);
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

  // 🔹 UI belum pilih dokumen
  if (!selected?.submenu) {
    return (
      <div className="p-8 text-gray-500">
        Silakan pilih dokumen dari sidebar untuk mulai mengedit konten.
      </div>
    );
  }

  // 🔹 UI Loading
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-gray-500">
        Memuat konten...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-start w-full px-6 overflow-hidden">
      <h1 className="text-2xl font-bold text-gray-900">
        {selected.submenu?.title || "Tanpa Judul"}
      </h1>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Input Judul */}
      <div className="w-full">
        <label className="text-sm font-medium text-gray-700 block mb-1">
          Judul Konten
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2 text-sm"
          placeholder="Masukkan judul konten"
        />
      </div>

      {/* Tombol Table & Clear */}
      <div className="flex flex-wrap items-center gap-2">
        <label className="text-sm">Rows</label>
        <input
          type="number"
          min={1}
          max={12}
          value={rowsInput}
          onChange={(e) => setRowsInput(Number(e.target.value))}
          className="w-20 border rounded p-1 text-sm"
        />

        <label className="text-sm">Cols</label>
        <input
          type="number"
          min={1}
          max={12}
          value={colsInput}
          onChange={(e) => setColsInput(Number(e.target.value))}
          className="w-20 border rounded p-1 text-sm"
        />

        <button
          onClick={() => insertEditableTable(rowsInput, colsInput)}
          className="editor-toolbar-btn editor-toolbar-btn-success"
        >
          Insert Table
        </button>

        <button
          onClick={() => {
            Swal.fire({
              title: "Yakin ingin menghapus semua isi editor?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Ya, hapus!",
              cancelButtonText: "Batal",
            }).then((result) => {
              if (result.isConfirmed) {
                setContent("");
                quillRef.current?.getEditor().setContents([]);
              }
            });
          }}
          className="editor-toolbar-btn editor-toolbar-btn-secondary"
        >
          Clear
        </button>
      </div>

      {/* Editor */}
      <div className="border rounded-lg w-full h-[70vh] shadow-sm">
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={content}
          onChange={setContent}
          className="h-full"
          modules={{
            toolbar: {
              container: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image", "video"],
                [{ color: [] }, { background: [] }],
                [{ align: [] }],
                ["clean"],
              ],
              handlers: { video: videoHandler },
            },
          }}
        />
      </div>

      {/* Tombol Simpan */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className="editor-toolbar-btn editor-toolbar-btn-primary"
        >
          {saving ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </div>
  );
}
