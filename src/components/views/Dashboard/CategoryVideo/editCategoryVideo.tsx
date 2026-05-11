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
import { useForm } from "react-hook-form";

type EditvVideoCategoryProps = {
  name: string;
};
const EditCategoryVideo = ({
  id,
  data,
}: {
  id: string;
  data: EditvVideoCategoryProps;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VideoCategoryFormValues>({
    resolver: zodResolver(videoCategorySchema),
    defaultValues: {
      name: data.name,
    },
  });

  const onSubmit = async (data: VideoCategoryFormValues) => {
    try {
      await ApiHrms.updateVideoCategory(id, data);
      alert("Video Category updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error updating vVideoCategory:", error);
      alert("Failed to update vVideoCategory. Please try again.");
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
            Edit Video Category
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
              Save Changes
            </button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategoryVideo;
