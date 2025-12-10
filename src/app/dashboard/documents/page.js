"use client";
import { useEffect, useState } from "react";

export default function DocumentsPage() {
  const [documents, setDocuments] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDocuments = async () => {
    const res = await fetch("/api/documents");
    const data = await res.json();
    setDocuments(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const res = await fetch("/api/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });

    if (res.ok) {
      setTitle("");
      fetchDocuments();
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    await fetch(`http://localhost:5000/api/documents/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setDocuments(documents.filter((doc) => doc.id !== id));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Manage Documents</h1>

      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="New Document Title"
          className="border p-2 flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white px-4 rounded">Add</button>
      </form>

      <ul>
        {documents.map((doc) => (
          <li
            key={doc.id}
            className="flex justify-between items-center border-b py-2"
          >
            {doc.title}
            <button
              onClick={() => handleDelete(doc.id)}
              className="text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
