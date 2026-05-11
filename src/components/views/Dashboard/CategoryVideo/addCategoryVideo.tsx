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
import {
  VideoCategoryFormValues,
  videoCategorySchema,
} from "@/lib/zod/video-category";
import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlus } from "lucide-react";
import { useForm } from "react-hook-form";

const AddVideoCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VideoCategoryFormValues>({
    resolver: zodResolver(videoCategorySchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: VideoCategoryFormValues) => {
    try {
      await ApiHrms.createVideoCategory(data);
      alert("Video Category added successfully!");
      window.location.reload();
    } catch (error: any) {
      console.error("Error adding Video Category:", error);
      alert(error.response.data.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-700 text-white py-5! cursor-pointer hover:bg-blue-800">
          Add Video Category <CirclePlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-700 py-3 border-b border-b-gray-300">
            Add Video Category
          </DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium px-2">
                Name Video Category
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
            <button
              type="submit"
              className="cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Add Video Category
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddVideoCategory;
