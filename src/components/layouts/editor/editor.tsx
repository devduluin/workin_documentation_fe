"use client";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";

export function useTipTapEditor(
  value: string,
  onUpdate: (value: string) => void,
) {
  return useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),

      Image.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-xl shadow-sm my-4",
        },
      }),

      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: "w-full border-collapse my-4",
        },
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],

    content: value || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      if (onUpdate) {
        onUpdate(editor.getHTML());
      }
    },

    editorProps: {
      attributes: {
        class: "tiptap-content focus:outline-none",
      },
    },
  });
}
