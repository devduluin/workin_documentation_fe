"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import { ApiHrms } from "@/lib/API-hrms";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import DeleteDataDocument from "./deleteDataVideos";
import Pagination from "@/components/layouts/Pagination";
import { useVideoStore } from "@/stores/useVideoData";

const DataVideosView = () => {
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<any>(null);
  const [page, setPage] = useState(1);
  const { video, setVideo } = useVideoStore();

  const fetchDocuments = async (pageNumber = 1) => {
    try {
      const res = await ApiHrms.getVideos(pageNumber);

      setVideo(res.data);
      setMeta(res.meta);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDocuments(page);
  }, [page]);

  if (error) return <p>{error}</p>;
  return (
    <div className="p-4 bg-slate-50 rounded-lg shadow">
      <div className="mb-5">
        <Button className="bg-blue-700 text-white py-5! cursor-pointer hover:bg-blue-800">
          <a
            href="/dashboard/videos/add"
            className="flex gap-2 justify-center items-center"
          >
            Add Videos <CirclePlus />
          </a>
        </Button>
      </div>
      <div className="min-h-[70vh] max-h-[70vh]  overflow-scroll rounded-2xl">
        <Table>
          <TableHeader className="bg-gray-200 sticky top-0">
            <TableRow>
              <TableHead className="text-center">No</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {video?.map((data: any, i: number) => (
              <TableRow key={i}>
                <TableCell className="font-medium text-center">
                  {meta
                    ? (meta.current_page - 1) * meta.per_page + i + 1
                    : i + 1}
                  .
                </TableCell>
                <TableCell className="font-medium">{data.title}</TableCell>
                <TableCell className="font-medium">
                  {data.category ? data.category.name : "Uncategorized"}
                </TableCell>
                <TableCell className="font-medium flex h-full py-5 gap-2 items-center justify-center">
                  <Button variant="outline" size="sm">
                    <a href={`/dashboard/videos/${data.id}/edit`}>Edit</a>
                  </Button>
                  <DeleteDataDocument id={data.id.toString()} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="pt-3 flex">
        <Pagination meta={meta} onPageChange={setPage} />
      </div>
    </div>
  );
};

export default DataVideosView;
