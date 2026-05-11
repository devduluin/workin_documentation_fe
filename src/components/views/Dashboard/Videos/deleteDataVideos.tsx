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

const DeleteDataVideos = ({ id }: { id: string }) => {
  const onDelete = async () => {
    try {
      await ApiHrms.deleteVideo(id);
      alert("Video deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting video:", error);
      alert("Failed to delete video. Please try again.");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-500 text-white cursor-pointer hover:bg-darkIndex flex gap-2">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-700 py-3 border-b border-b-gray-300">
            Delete Videos
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>Are you sure you want to delete this video?</p>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => window.history.back()}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={onDelete}>
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDataVideos;
