"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import EditorPage from "@/components/layouts/editor";
import { ApiHrms } from "@/lib/API-hrms";
import { useEffect, useState } from "react";
import { useCategoryStore } from "@/stores/useCategories";
import { DocumentFormValues, DocumentSchema } from "@/lib/zod/documents";

export default function AddDocument() {
  const {
    register,
    handleSubmit,
    setValue,
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await ApiHrms.getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  const contentValue = watch("content");

  const onSubmit = async (data: DocumentFormValues) => {
    try {
      await ApiHrms.AddDocument(data);
      alert("Document added successfully!");
      window.history.back();
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to add document. Please try again.");
    }
  };

  return (
    <div className="w-full mx-auto p-6 space-y-6 bg-slate-50 shadow rounded-lg">
      <h1 className="text-xl font-semibold">Add Document</h1>

      <hr />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            htmlFor={`category`}
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Select a Category Docs
          </label>
          {/* <select
            id="category"
            className="block w-full px-3 py-2.5 bg-white rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            {...register("category_id", {
              required: "Please select a category",
            })}
          >
            <option value={""}>Choose a category</option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select> */}
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
                    {...register("category_id", {
                      required: "Please select a category",
                    })}
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
          Add Document
        </button>
      </form>
    </div>
  );
}
