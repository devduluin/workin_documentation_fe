"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ApiHrms } from "@/lib/API-hrms";
import { CategoryFormValues, categorySchema } from "@/lib/zod/category";
import { useArticleStore } from "@/stores/useArticles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type EditCategoryProps = {
  name: string;
  article_id: string;
};

const EditCategory = ({
  id,
  data,
}: {
  id: string;
  data: EditCategoryProps;
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: data.name,
      article_id: data.article_id,
    },
  });

  const { articles, setArticles } = useArticleStore();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await ApiHrms.getAllArticles();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setArticles([]);
      }
    };
    fetchArticle();
  }, []);

  const onSubmit = async (data: CategoryFormValues) => {
    try {
      await ApiHrms.editCategory(id, data);
      alert("Category updated successfully!");
      //   window.history.back();
      window.location.reload();
    } catch (error) {
      console.error("Error updating category:", error);
      alert("Failed to update category. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-slate-50 py-3! hover:bg-slate-100 w-full cursor-pointer text-black">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-700 py-3 border-b border-b-gray-300">
            Edit Category
          </DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium px-2">
                Name Category
              </label>
              <input
                {...register("name")}
                className={`${errors.name ? "border-red-500" : ""} w-full border bg-white rounded-lg px-3 py-2 mt-3`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-3">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor={`countries`}
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Select a article Docs
              </label>
              <select
                id="countries"
                defaultValue={""}
                className="block w-full px-3 py-2.5 bg-white rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                {...register("article_id", { required: true })}
              >
                <option value={""}>Choose a article</option>
                {articles.map((article, index) => (
                  <option key={index} value={article.id}>
                    {article.name}
                  </option>
                ))}
              </select>
              {errors.article_id && (
                <p className="text-red-500 text-sm mt-3">
                  {errors.article_id.message}
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategory;
