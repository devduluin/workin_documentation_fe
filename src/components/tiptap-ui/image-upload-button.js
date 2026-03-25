import React, { useMemo, useRef } from "react";
import { ImagePlus } from "lucide-react";
import {
  canInsertImage,
  handleImageUpload,
  insertImage,
  isImageActive,
} from "@/lib/tiptap-utils";

export function ImageUploadButton({
  editor,
  text,
  hideWhenUnavailable = false,
  onInserted,
  className = "",
}) {
  const inputRef = useRef(null);
  const canInsert = useMemo(() => canInsertImage(editor), [editor]);
  const active = useMemo(() => isImageActive(editor), [editor]);

  if (hideWhenUnavailable && !canInsert) return null;

  const handleClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const handleChange = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    try {
      const url = await handleImageUpload(file);
      if (!url) return;
      const inserted = insertImage(editor, url);
      if (inserted && onInserted) onInserted(url);
    } catch (error) {
      if (error?.message) {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`${className} ${active ? "active" : ""}`}
        disabled={!canInsert}
        aria-pressed={active}
      >
        <ImagePlus size={16} />
        {text ? <span className="tiptap-btn-label">{text}</span> : null}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </>
  );
}

