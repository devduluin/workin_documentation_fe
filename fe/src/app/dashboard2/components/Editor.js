"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function Editor() {
  const [content, setContent] = useState("");

  const handleSave = () => {
    console.log("Content saved:", content);
    // nanti tinggal kirim ke API
  };

  return (
    <div className="mb-6">
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder="Tulis atau edit konten di sini..."
        className="bg-white"
      />
      <div className="mt-2 text-right">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
        >
          Simpan
        </button>
      </div>
    </div>
  );
}
