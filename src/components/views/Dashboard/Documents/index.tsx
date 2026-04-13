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
import { useDocumentStore } from "@/stores/useDocuments";
import DeleteDataDocument from "./deleteDataDocument";
import Pagination from "@/components/layouts/Pagination";

const DataSectionView = () => {
  const [error, setError] = useState<string | null>(null);
  const { documents, setDocuments } = useDocumentStore();
  const [meta, setMeta] = useState<any>(null);
  const [page, setPage] = useState(1);

  const fetchDocuments = async (pageNumber = 1) => {
    try {
      const res = await ApiHrms.getDocuments(pageNumber);

      setDocuments(res.data);
      setMeta(res.meta);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDocuments(page);
  }, [page]);

  //   if (loading) return <SkeletonTable />;
  if (error) return <p>{error}</p>;
  return (
    <div className="p-4 bg-slate-50 rounded-lg shadow">
      <div className="mb-5">
        <Button className="bg-blue-700 text-white py-5! cursor-pointer hover:bg-blue-800">
          <a
            href="/dashboard/documents/add"
            className="flex gap-2 justify-center items-center"
          >
            Add Document <CirclePlus />
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
            {documents?.map((document: any, i: number) => (
              <TableRow key={i}>
                <TableCell className="font-medium text-center">
                  {meta
                    ? (meta.current_page - 1) * meta.per_page + i + 1
                    : i + 1}
                  .
                </TableCell>
                <TableCell className="font-medium">
                  {document.title_tab}
                </TableCell>
                <TableCell className="font-medium">
                  {document.Category ? document.Category.name : "Uncategorized"}
                </TableCell>
                <TableCell className="font-medium flex h-full py-5 gap-2 items-center justify-center">
                  <Button variant="outline" size="sm">
                    <a href={`/dashboard/documents/${document.id}/edit`}>
                      Edit
                    </a>
                  </Button>
                  {/* <Button variant="destructive" size="sm">
                    Delete
                  </Button> */}
                  <DeleteDataDocument id={document.id.toString()} />
                </TableCell>

                {/* <TableCell
                  className="font-medium flex gap-2 items-center justify-center
                "
                >
                  <UpdateDataDashboard
                    categoryDashboard={categoryDashboard}
                    Dashboard={Dashboard}
                    setPostDashboard={setPostDashboard}
                  />
                  <DeleteDataDashboard
                    Dashboard={Dashboard}
                    setPostDashboard={setPostDashboard}
                  />
                </TableCell> */}
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

export default DataSectionView;
