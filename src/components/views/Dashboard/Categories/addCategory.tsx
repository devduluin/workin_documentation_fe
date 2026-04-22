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
import { CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      article_id: "",
    },
  });

  const { articles, setArticles } = useArticleStore();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

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
      await ApiHrms.addCategory(data);
      alert("Category added successfully!");
      //   window.history.back();
      window.location.reload();
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Failed to add category. Please try again.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-700 text-white py-5! cursor-pointer hover:bg-blue-800">
          Add Category <CirclePlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-700 py-3 border-b border-b-gray-300">
            Add Category
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
              <div className="relative z-50">
                <div
                  className="w-full px-3 py-2.5 bg-white border rounded-lg cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selected || "Choose a category"}
                </div>
                {isOpen && (
                  <ul className="absolute z-10 w-full max-h-48 overflow-y-auto bg-white border rounded-lg mt-1 shadow-lg">
                    {articles.map((article) => (
                      <li
                        key={article.id}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        {...register("article_id", {
                          required: "Please select an article",
                        })}
                        onClick={() => {
                          setSelected(article.name);
                          setValue("article_id", article.id);
                          setIsOpen(false);
                        }}
                      >
                        {article.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
              Add Category
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
