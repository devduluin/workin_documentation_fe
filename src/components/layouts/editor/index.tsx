"use client";
import { EditorContent } from "@tiptap/react";
import { MenuBar } from "./menuBar";
import { useTipTapEditor } from "./editor";
import "./editor.css";
import { useEffect } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function EditorPage({ value, onChange }: Props) {
  const editor = useTipTapEditor(value, onChange);

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  if (!editor) return null;
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <MenuBar editor={editor} />
      <div className="bg-white">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
