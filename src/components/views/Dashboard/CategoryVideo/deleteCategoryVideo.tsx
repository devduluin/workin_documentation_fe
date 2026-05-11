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

const DeleteVideoCategory = ({ id }: { id: string }) => {
  const onDelete = async () => {
    try {
      await ApiHrms.deleteVideoCategory(id);
      alert("Video Category deleted successfully!");
      window.location.reload();
    } catch (error: any) {
      console.error("Error deleting Video Category:", error);
      alert(error.response.data.message);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-100 text-red-500 cursor-pointer hover:bg-red-200 w-full py-3!">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-700 py-3 border-b border-b-gray-300">
            Delete Video Category
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>Are you sure you want to delete this Video Category?</p>
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

export default DeleteVideoCategory;
