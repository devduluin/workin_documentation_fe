"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArticleFormValues, articleSchema } from "@/lib/zod/article";
import EditorPage from "@/components/layouts/editor";
import { ApiHrms } from "@/lib/API-hrms";
import { useEffect } from "react";
import { useCategoryStore } from "@/stores/useCategories";
import { useParams } from "next/navigation";

export default function EditDocument() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ArticleFormValues>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title_tab: "",
      title_content: "",
      category_id: "",
      content: "",
    },
  });

  const { categories, setCategories } = useCategoryStore();

  useEffect(() => {
    Promise.all([ApiHrms.getCategory()]).then(([c]) => {
      setCategories(c);
    });
  }, []);

  const contentValue = watch("content") || "";

  useEffect(() => {
    Promise.all([ApiHrms.getDocumentById(id?.toString() || "")]).then(([c]) => {
      setValue("title_tab", c.title_tab);
      setValue("title_content", c.title_content);
      setValue("category_id", c.category_id);
      setValue("content", String(c.content));
    });
  }, []);

  const onSubmitEdit = async (data: ArticleFormValues) => {
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
          <select
            id="countries"
            defaultValue=""
            className="block w-full px-3 py-2.5 bg-white rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            {...register("category_id", { required: true })}
          >
            <option value={""}>Choose a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
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
