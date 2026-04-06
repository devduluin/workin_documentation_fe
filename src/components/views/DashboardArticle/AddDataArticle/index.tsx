"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Dispatch, SetStateAction, useState } from "react";
import { CirclePlus } from "lucide-react";
import TiptapEditor from "@/components/layouts/EditSection";

type propsAddDashboard = {
  setPostDashboard: Dispatch<SetStateAction<any>>;
  categoryDashboard: Dispatch<SetStateAction<any>>;
};

const AddDataArticle = ({
  setPostDashboard,
  categoryDashboard,
}: propsAddDashboard) => {
  const [content, setContent] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-700 text-white cursor-pointer hover:bg-darkIndex flex gap-2">
          Add Article <CirclePlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-700 py-3 border-b border-b-gray-300">
            Tambah Data Article
          </DialogTitle>
        </DialogHeader>
        {/* <FormDatadashboard
          setPostDashboard={setPostDashboard}
          categoryDashboard={categoryDashboard}
        /> */}
        <TiptapEditor content={content} onChange={setContent} />
      </DialogContent>
    </Dialog>
  );
};

export default AddDataArticle;
