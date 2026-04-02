"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { ApiHrms } from "@/lib/API-hrms";
import { TypeSection, useSectionsStore } from "@/stores/useSections";
import { Button } from "@/components/ui/button";

const DataSectionView = () => {
  const [sortOrder, setSortOrder] = useState<string>("A");
  const [error, setError] = useState<string | null>(null);

  const { sections, setSections } = useSectionsStore();

  useEffect(() => {
    Promise.all([ApiHrms.getSection()]).then(([c]) => {
      setSections(c);
    });
  }, []);

  const sortedData = sections?.sort((a: any, b: any) => {
    if (sortOrder === "A") {
      return a.documentId - b.documentId;
    } else {
      return b.documentId - a.documentId;
    }
  });

  const handleSortChange = (value: string) => {
    setSortOrder(value);
  };

  //   if (loading) return <SkeletonTable />;
  if (error) return <p>{error}</p>;
  return (
    <div className="p-2">
      {/* <div className="mb-5">
        <AddDataDashboard
          setPostDashboard={setPostDashboard}
          categoryDashboard={categoryDashboard}
        />
      </div> */}
      <Button className="mb-4" onClick={() => {}}>
        Add Section
      </Button>
      <div className="min-h-[70vh]">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Document ID</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          {/* sorted data */}
          <TableBody>
            {sections?.map((section: TypeSection, i: number) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell className="font-medium">{section.title}</TableCell>
                {/* <TableCell className="font-medium max-w-40">
                  <p className="truncate">{section.content}</p>
                </TableCell> */}
                <TableCell className="font-medium">
                  {section.documentId}
                </TableCell>
                <TableCell className="font-medium flex gap-2 items-center justify-center">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
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
      {/* <div className="pt-3 flex">
        <PaginationLayout
          perPage="8"
          totalPage={totalPages}
          nextPage={endIndex < postDashboard.length}
          prevPage={startIndex > 0}
        />
      </div> */}
    </div>
  );
};

export default DataSectionView;
