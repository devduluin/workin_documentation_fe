"use client";
import { ApiHrms } from "@/lib/API-hrms";
import { useSectionsStore } from "@/stores/useSections";
import { useEffect } from "react";

const TableDashboard = () => {
  const { sections, setSections } = useSectionsStore();

  useEffect(() => {
    Promise.all([ApiHrms.getSection()]).then(([c]) => {
      setSections(c);
    });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                Content
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {sections.map((u) => (
              <tr
                key={u.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <td className="px-6 py-4">{u.id}</td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {u.title}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {/* <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {u.content}
                  </p> */}
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <button className="text-sm text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-white">
                      Edit
                    </button>
                    <button className="text-sm text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-white">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDashboard;
