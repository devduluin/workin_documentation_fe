"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApiHrms } from "@/lib/API-hrms";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { VideoFormValues, videoSchema } from "@/lib/zod/videos";
import { useCategoryVideoStore } from "@/stores/useCategoryVideo";

export default function EditVideos() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<VideoFormValues>({
    resolver: zodResolver(videoSchema),
    defaultValues: {
      title: "",
      youtube_id: "",
      video_category_id: "",
    },
  });

  const { categoryVideo, setCategoryVideo } = useCategoryVideoStore();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const videoCategoryId = watch("video_category_id");

  useEffect(() => {
    Promise.all([ApiHrms.getVideoCategories()]).then(([c]) => {
      setCategoryVideo(c);
    });
  }, []);

  // const contentValue = watch("content") || "";

  useEffect(() => {
    ApiHrms.getVideoCategories().then(setCategoryVideo);
  }, []);

  useEffect(() => {
    if (id) {
      ApiHrms.getVideoById(id.toString()).then((video) => {
        setValue("title", video.title);
        setValue("youtube_id", video.youtube_id);
        setValue("video_category_id", video.video_category_id);
      });
    }
  }, [id]);

  useEffect(() => {
    if (videoCategoryId && categoryVideo.length > 0) {
      const categoryName = categoryVideo.find(
        (c) => c.id === videoCategoryId,
      )?.name;
      setSelected(categoryName || "");
    }
  }, [videoCategoryId, categoryVideo]);

  const onSubmitEdit = async (data: VideoFormValues) => {
    try {
      await ApiHrms.updateVideo(id?.toString() || "", data);
      alert("Video updated successfully!");
      window.history.back();
    } catch (error) {
      console.error("Error updating video:", error);
      alert("Failed to update video. Please try again.");
    }
  };

  return (
    <div className="w-full mx-auto p-6 space-y-6 bg-slate-50 shadow rounded-lg">
      <h1 className="text-xl font-semibold">Edit Video</h1>

      <hr />

      <form onSubmit={handleSubmit(onSubmitEdit)} className="space-y-4">
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
            htmlFor={`countries`}
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
          <label className="block text-sm font-medium px-2">Youtube ID</label>
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
          Save Changes
        </button>
      </form>
    </div>
  );
}
