"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const timeoutRef = useRef(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    // debounce biar gak spam request
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`${API_URL}/search?q=${query}`);
        const data = await res.json();
        if (data.success) {
          setResults(data.data);
          setShowDropdown(true);
        }
      } catch (err) {
        console.error("Search error:", err);
      }
    }, 300);

    return () => clearTimeout(timeoutRef.current);
  }, [query]);

  const handleSelect = (item) => {
    setShowDropdown(false);
    setQuery("");
    if (item.sectionId) {
      router.push(
        `/docs/${item.categoryId}/${item.documentId}#${item.sectionId}`
      );
    } else {
      router.push(`/docs/${item.categoryId}/${item.documentId}`);
    }
  };

  return (
    <header className="w-full bg-white border-b shadow-sm px-6 py-3 flex items-center justify-between relative">
      <h1 className="font-bold text-xl text-gray-800">HRMS Guide</h1>

      <div className="relative w-1/3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari konten di sini..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {showDropdown && results.length > 0 && (
          <ul className="absolute z-50 bg-white border rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto w-full">
            {results.map((item, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(item)}
                className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm"
              >
                <span className="font-medium text-gray-800">{item.title}</span>
                <span className="ml-2 text-gray-500 text-xs">
                  ({item.type === "document" ? "Dokumen" : "Bagian"})
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
