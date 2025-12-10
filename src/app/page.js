"use client";

import "quill/dist/quill.snow.css"; // ✅ style default QuillJS
import { useEffect, useState, useRef } from "react";
import Sidebar from "../app/component/Sidebar";

export default function HRMSDashboard() {
  const [overviewContent, setOverviewContent] = useState("");
  const mainRef = useRef(null);

  useEffect(() => {
    fetch("/api/sections/1")
      .then((res) => res.json())
      .then((result) => {
        setOverviewContent(result.data.content);
      })
      .catch((err) => console.error("Error fetching content:", err));
  }, []);

  return (
    <div className="flex bg-white min-h-screen">
      {/* Sidebar kiri */}
      <aside>
        <Sidebar />
      </aside>

      {/* Konten dari database (hasil QuillJS) */}
      <main
        ref={mainRef}
        className="flex-1 p-6 md:p-10 overflow-y-auto scroll-smooth"
        style={{ overflowY: "auto", height: "100vh" }}
      >
        <div
          className="prose max-w-none ql-editor"
          dangerouslySetInnerHTML={{ __html: overviewContent }}
        />
      </main>
    </div>
  );
}
