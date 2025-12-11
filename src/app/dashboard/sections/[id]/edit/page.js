"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter, useParams } from "next/navigation";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function EditSectionPage() {
  const router = useRouter();
  const params = useParams();
  const sectionId = params?.id;

  const quillRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => setMounted(true), []);

  // ✅ Fetch section data dari backend
  useEffect(() => {
    if (!sectionId) return;
    (async () => {
      try {
        const res = await fetch(`http://localhost.guide_be:5503/api/sections/${sectionId}`);
        if (!res.ok) throw new Error("Gagal fetch data");
        const result = await res.json();
        const section = result.data;
        setTitle(section.title || "");
        setContent(section.content || "");
      } catch (e) {
        console.error(e);
        alert("Gagal mengambil data section");
      }
    })();
  }, [sectionId]);

  // ✅ Insert tabel editable ke Quill
  const insertEditableTable = (rows = 3, cols = 3) => {
    const editor = quillRef.current?.getEditor();
    if (!editor) return console.error("Editor belum siap");

    rows = Math.max(1, Math.min(12, Number(rows)));
    cols = Math.max(1, Math.min(12, Number(cols)));

    let html = `<table class="editable-table" data-editable-table><tbody>`;
    for (let r = 0; r < rows; r++) {
      html += "<tr>";
      for (let c = 0; c < cols; c++) {
        html += `<td contenteditable="true" data-td>&nbsp;</td>`;
      }
      html += "</tr>";
    }
    html += `</tbody></table><p><br></p>`;

    const range = editor.getSelection(true);
    const index = range ? range.index : editor.getLength();
    editor.clipboard.dangerouslyPasteHTML(index, html);
  };

  // Sinkronisasi konten Quill ke state
  useEffect(() => {
    const editor = quillRef.current?.getEditor();
    if (!editor) return;
    const root = editor.root;

    const onInput = () => setContent(root.innerHTML);
    root.addEventListener("input", onInput);
    const qHandler = () => setContent(root.innerHTML);
    editor.on && editor.on("text-change", qHandler);

    return () => {
      root.removeEventListener("input", onInput);
      editor.off && editor.off("text-change", qHandler);
    };
  }, [mounted]);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["clean"],
      ],
    },
  };

  // ✅ Validasi + Update section ke backend
  const handleUpdate = async () => {
    if (!title.trim()) {
      alert("Judul tidak boleh kosong!");
      return;
    }

    const cleanContent = content.replace(/<(.|\n)*?>/g, "").trim(); // hapus tag HTML
    if (!cleanContent) {
      alert("Konten tidak boleh kosong!");
      return;
    }

    try {
      const res = await fetch(`http://localhost.guide_be:5503/api/sections/${sectionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      if (res.ok) {
        alert("✅ Section berhasil diperbarui!");
        router.push("/dashboard");
      } else {
        const err = await res.json();
        alert("Gagal: " + (err.message || "unknown"));
      }
    } catch (e) {
      console.error(e);
      alert("Terjadi error");
    }
  };

  const [rowsInput, setRowsInput] = useState(3);
  const [colsInput, setColsInput] = useState(3);

  return (
    <div className="p-6 relative">
      <h1 className="text-xl font-bold mb-4">Edit Section</h1>

      <input
        type="text"
        placeholder="Judul Section"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />

      {mounted ? (
        <>
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm">Rows</label>
            <input
              type="number"
              min={1}
              max={12}
              value={rowsInput}
              onChange={(e) => setRowsInput(Number(e.target.value))}
              className="w-20 border p-1 rounded"
            />
            <label className="text-sm">Cols</label>
            <input
              type="number"
              min={1}
              max={12}
              value={colsInput}
              onChange={(e) => setColsInput(Number(e.target.value))}
              className="w-20 border p-1 rounded"
            />
            <button
              onClick={() => insertEditableTable(rowsInput, colsInput)}
              className="ml-2 px-3 py-1 bg-green-600 text-white rounded"
            >
              Insert Editable Table
            </button>
            <button
              onClick={() => {
                setContent("");
                const editor = quillRef.current?.getEditor();
                if (editor) editor.setContents([]);
              }}
              className="ml-2 px-3 py-1 bg-gray-200 rounded"
            >
              Clear
            </button>
          </div>

          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            className="mb-4 bg-white rounded"
          />
        </>
      ) : (
        <p>Loading editor...</p>
      )}

      <div className="flex gap-2">
        <button
          onClick={handleUpdate}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Update Section
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Batal
        </button>
      </div>

      <style>{`
        .editable-table {
          width: 100%;
          border-collapse: collapse;
          margin: 0.6rem 0;
        }
        .editable-table td, .editable-table th {
          border: 1px solid #d1d5db;
          padding: 0.6rem;
          min-width: 60px;
          vertical-align: top;
        }
        .editable-table td:focus {
          outline: 2px solid rgba(59,130,246,0.25);
        }
      `}</style>
    </div>
  );
}
