"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import EditorPage from "@/components/layouts/editor";
import { ApiHrms } from "@/lib/API-hrms";
import { useEffect, useState } from "react";
import { useCategoryStore } from "@/stores/useCategories";
import { useParams } from "next/navigation";
import { DocumentFormValues, DocumentSchema } from "@/lib/zod/documents";

export default function EditDocument() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<DocumentFormValues>({
    resolver: zodResolver(DocumentSchema),
    defaultValues: {
      title_tab: "",
      title_content: "",
      category_id: "",
      content: "",
    },
  });

  const { categories, setCategories } = useCategoryStore();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const categoryId = watch("category_id");

  useEffect(() => {
    Promise.all([ApiHrms.getCategory()]).then(([c]) => {
      setCategories(c);
    });
  }, []);

  const contentValue = watch("content") || "";

  useEffect(() => {
    ApiHrms.getCategory().then(setCategories);
  }, []);

  useEffect(() => {
    if (id) {
      ApiHrms.getDocumentById(id.toString()).then((doc) => {
        setValue("title_tab", doc.title_tab);
        setValue("title_content", doc.title_content);
        setValue("category_id", doc.category_id);
        setValue("content", String(doc.content));
      });
    }
  }, [id]);

  useEffect(() => {
    if (categoryId && categories.length > 0) {
      const categoryName = categories.find((c) => c.id === categoryId)?.name;
      setSelected(categoryName || "");
    }
  }, [categoryId, categories]);

  const onSubmitEdit = async (data: DocumentFormValues) => {
    try {
      await ApiHrms.EditDocument(id?.toString() || "", data);
      alert("Document updated successfully!");
      window.history.back();
    } catch (error) {
      console.error("Error updating document:", error);
      alert("Failed to update document. Please try again.");
    }
  };

  return (
    <div className="w-full mx-auto p-6 space-y-6 bg-slate-50 shadow rounded-lg">
      <h1 className="text-xl font-semibold">Edit Document</h1>

      <hr />

      <form onSubmit={handleSubmit(onSubmitEdit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium px-2">Title Tab</label>
          <input
            {...register("title_tab")}
            className={`${errors.title_tab ? "border-red-500" : ""} w-full border bg-white rounded-lg px-3 py-2 mt-3`}
          />
          {errors.title_tab && (
            <p className="text-red-500 text-sm mt-3">
              {errors.title_tab.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium px-2">
            Title Content
          </label>
          <input
            {...register("title_content")}
            className={`${errors.title_content ? "border-red-500" : ""} w-full border bg-white rounded-lg px-3 py-2 mt-3`}
          />
          {errors.title_content && (
            <p className="text-red-500 text-sm mt-3">
              {errors.title_content.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`countries`}
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Select a Category Docs
          </label>
          <div className="relative z-50">
            <div
              className="w-full px-3 py-2.5 bg-white border rounded-lg cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selected || "Choose a category"}
            </div>
            {isOpen && (
              <ul className="absolute z-10 w-full max-h-48 overflow-y-auto bg-white border rounded-lg mt-1 shadow-lg">
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelected(category.name);
                      setValue("category_id", category.id);
                      setIsOpen(false);
                    }}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {errors.category_id && (
            <p className="text-red-500 text-sm mt-3">
              {errors.category_id.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 px-2">Content</label>
          <EditorPage
            value={contentValue}
            onChange={(val) => setValue("content", val)}
          />

          {errors.content && (
            <p className="text-red-500 text-sm mt-3">
              {errors.content.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
