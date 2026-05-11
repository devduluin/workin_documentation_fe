"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApiHrms } from "@/lib/API-hrms";
import { useEffect, useState } from "react";
import { useCategoryStore } from "@/stores/useCategories";
import { VideoFormValues, videoSchema } from "@/lib/zod/videos";
import { useCategoryVideoStore } from "@/stores/useCategoryVideo";

export default function AddVideos() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<VideoFormValues>({
    resolver: zodResolver(videoSchema),
    defaultValues: {
      video_category_id: "",
      title: "",
      youtube_id: "",
    },
  });

  const { categories, setCategories } = useCategoryStore();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const { categoryVideo, setCategoryVideo } = useCategoryVideoStore();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await ApiHrms.getVideoCategories();
        setCategoryVideo(data);
      } catch (error) {
        console.error("Failed to fetch video categories:", error);
        setCategoryVideo([]);
      }
    };
    fetchCategories();
  }, []);

  // const videoValue = watch("youtube_id  ");

  const onSubmit = async (data: VideoFormValues) => {
    try {
      await ApiHrms.createVideo(data);
      alert("Video added successfully!");
      window.history.back();
    } catch (error) {
      console.error("Error adding video:", error);
      alert("Failed to add video. Please try again.");
    }
  };
  return (
    <div className="w-full mx-auto p-6 space-y-6 bg-slate-50 shadow rounded-lg">
      <h1 className="text-xl font-semibold">Add Video</h1>

      <hr />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium px-2">Title</label>
          <input
            {...register("title")}
            className={`${errors.title ? "border-red-500" : ""} w-full border bg-white rounded-lg px-3 py-2 mt-3`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-3">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor={`category`}
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Select a Category Video
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
                {categoryVideo.map((category) => (
                  <li
                    key={category.id}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    {...register("video_category_id", {
                      required: "Please select a category",
                    })}
                    onClick={() => {
                      setSelected(category.name);
                      setValue("video_category_id", category.id);
                      setIsOpen(false);
                    }}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {errors.video_category_id && (
            <p className="text-red-500 text-sm mt-3">
              {errors.video_category_id.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium px-2">YouTube ID</label>
          <input
            {...register("youtube_id")}
            className={`${errors.youtube_id ? "border-red-500" : ""} w-full border bg-white rounded-lg px-3 py-2 mt-3`}
          />
          {errors.youtube_id && (
            <p className="text-red-500 text-sm mt-3">
              {errors.youtube_id.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg"
        >
          Add Videos
        </button>
      </form>
    </div>
  );
}
