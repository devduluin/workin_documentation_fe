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
import { MoreHorizontalIcon } from "lucide-react";
import Pagination from "@/components/layouts/Pagination";
import { useArticleStore } from "@/stores/useArticles";
import AddArticle from "./addArticle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditArticle from "./editArticle";
import DeleteArticle from "./deleteArticle";

const DataArticleView = () => {
  const [error, setError] = useState<string | null>(null);
  const { articles, setArticles } = useArticleStore();
  const [meta, setMeta] = useState<any>(null);
  const [page, setPage] = useState(1);

  const fetchArticles = async (pageNumber = 1) => {
    try {
      const res = await ApiHrms.getArticles(pageNumber);

      setArticles(res.data);
      setMeta(res.meta);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  //   if (loading) return <SkeletonTable />;
  if (error) return <p>{error}</p>;
  return (
    <div className="p-4 bg-slate-50 rounded-lg shadow">
      <div className="mb-5">
        <AddArticle />
      </div>
      <div className="min-h-[70vh] max-h-[70vh]  overflow-scroll rounded-2xl">
        <Table className="w-full border">
          <TableHeader className="bg-gray-200 sticky top-0">
            <TableRow>
              <TableHead className="text-center">No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>ID</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {articles?.map((article: any, i: number) => (
              <TableRow key={i}>
                <TableCell className="font-medium text-center">
                  {meta
                    ? (meta.current_page - 1) * meta.per_page + i + 1
                    : i + 1}
                  .
                </TableCell>
                <TableCell className="font-medium">{article.name}</TableCell>
                <TableCell className="font-medium">{article.id}</TableCell>
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                      <Button variant="ghost" size="icon" className="size-8">
                        <MoreHorizontalIcon />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <EditArticle id={article.id} data={article} />
                      <DropdownMenuSeparator />
                      <DeleteArticle id={article.id} />
                    </DropdownMenuContent>
                  </DropdownMenu>
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

export default DataArticleView;
