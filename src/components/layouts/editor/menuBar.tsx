"use client";
import type { Editor } from "@tiptap/core";
import { menuBarStateSelector } from "./menuBarState";
import { useEditorState } from "@tiptap/react";
import { useRef, useState } from "react";
import {
  Bold,
  Code,
  Code2,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Undo,
  Minus,
  WrapText,
  Trash2,
  RotateCcw,
  Heading1,
  Heading2,
  Heading3,
  ImageIcon,
  Table,
  TableCellsMerge,
  Columns2,
  Rows2,
  Trash,
  X,
  ParkingSquare,
} from "lucide-react";

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const ToolbarButton = ({
  onClick,
  disabled,
  active,
  title,
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={cn(
      "inline-flex items-center justify-center rounded-md w-8 h-8 transition-all duration-150 shrink-0",
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
      "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-slate-600",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1",
      active &&
        "bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700",
    )}
  >
    {children}
  </button>
);

const Divider = () => <div className="w-px h-5 bg-slate-200 mx-1 shrink-0" />;

const HeadingLabel = ({
  level,
  active,
}: {
  level: number;
  active: boolean;
}) => (
  <span
    className={cn(
      "text-[11px] font-bold tracking-tight",
      active ? "text-blue-700" : "text-slate-500",
    )}
  >
    H{level}
  </span>
);

const ImageModal = ({
  onClose,
  onInsert,
}: {
  onClose: () => void;
  onInsert: (src: string, alt: string) => void;
}) => {
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [tab, setTab] = useState<"url" | "upload">("url");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onInsert(reader.result, file.name);
        onClose();
      }
    };
    reader.readAsDataURL(file);
  };

  const handleInsertUrl = () => {
    if (url.trim()) {
      onInsert(url.trim(), alt.trim() || "image");
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
          <span className="text-sm font-semibold text-slate-800">
            Sisipkan Gambar
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors rounded-md p-0.5 hover:bg-slate-100"
          >
            <X size={16} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100">
          {(["url", "upload"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "flex-1 py-2 text-xs font-medium transition-colors",
                tab === t
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-slate-500 hover:text-slate-700",
              )}
            >
              {t === "url" ? "URL" : "Upload File"}
            </button>
          ))}
        </div>

        <div className="p-4 space-y-3">
          {tab === "url" ? (
            <>
              <div>
                <label className="text-xs font-medium text-slate-600 block mb-1">
                  URL Gambar
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleInsertUrl()}
                  className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 block mb-1">
                  Alt Text{" "}
                  <span className="text-slate-400 font-normal">(opsional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Deskripsi gambar"
                  value={alt}
                  onChange={(e) => setAlt(e.target.value)}
                  className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="button"
                onClick={handleInsertUrl}
                disabled={!url.trim()}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium py-2 rounded-lg transition-colors"
              >
                Sisipkan
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="w-full border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-xl py-8 flex flex-col items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors cursor-pointer"
              >
                <ImageIcon size={28} />
                <span className="text-sm font-medium">
                  Klik untuk pilih file
                </span>
                <span className="text-xs">PNG, JPG, GIF, WebP</span>
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFile}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const TableMenu = ({
  editor,
  onClose,
}: {
  editor: Editor;
  onClose: () => void;
}) => {
  const [hovered, setHovered] = useState({ row: 0, col: 0 });
  const MAX = 8;
  const inTable = editor.isActive("table");

  const insertTable = () => {
    if (hovered.row > 0 && hovered.col > 0) {
      editor
        .chain()
        .focus()
        .insertTable({
          rows: hovered.row,
          cols: hovered.col,
          withHeaderRow: true,
        })
        .run();
      onClose();
    }
  };

  return (
    <div
      className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-40 p-3 min-w-55"
      onMouseLeave={() => setHovered({ row: 0, col: 0 })}
    >
      {/* Grid */}
      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
        Buat Tabel Baru
      </p>
      <div
        className="grid gap-0.5 mb-1"
        style={{ gridTemplateColumns: `repeat(${MAX}, 1.375rem)` }}
      >
        {Array.from({ length: MAX * MAX }).map((_, i) => {
          const row = Math.floor(i / MAX) + 1;
          const col = (i % MAX) + 1;
          const isActive = row <= hovered.row && col <= hovered.col;
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered({ row, col })}
              onClick={insertTable}
              className={cn(
                "w-4.5 h-4.5 rounded-sm border cursor-pointer transition-colors",
                isActive
                  ? "bg-blue-400 border-blue-500"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100",
              )}
            />
          );
        })}
      </div>
      <p className="text-center text-xs text-slate-400 mb-2 h-4">
        {hovered.row > 0
          ? `${hovered.row} × ${hovered.col}`
          : "Arahkan untuk memilih"}
      </p>

      {/* Table actions — visible only when inside a table */}
      {inTable && (
        <>
          <div className="border-t border-slate-100 my-2" />
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Edit Tabel
          </p>
          <div className="grid grid-cols-2 gap-0.5">
            {[
              {
                label: "Tambah kolom",
                icon: <Columns2 size={12} />,
                action: () => editor.chain().focus().addColumnAfter().run(),
              },
              {
                label: "Hapus kolom",
                icon: <Columns2 size={12} />,
                action: () => editor.chain().focus().deleteColumn().run(),
              },
              {
                label: "Tambah baris",
                icon: <Rows2 size={12} />,
                action: () => editor.chain().focus().addRowAfter().run(),
              },
              {
                label: "Hapus baris",
                icon: <Rows2 size={12} />,
                action: () => editor.chain().focus().deleteRow().run(),
              },
              {
                label: "Gabung sel",
                icon: <TableCellsMerge size={12} />,
                action: () => editor.chain().focus().mergeCells().run(),
              },
              {
                label: "Pisah sel",
                icon: <TableCellsMerge size={12} />,
                action: () => editor.chain().focus().splitCell().run(),
              },
              {
                label: "Hapus tabel",
                icon: <Trash size={12} />,
                action: () => {
                  editor.chain().focus().deleteTable().run();
                  onClose();
                },
                danger: true,
              },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={item.action}
                className={cn(
                  "flex items-center gap-1.5 px-2 py-1.5 text-xs rounded-md transition-colors",
                  item.danger
                    ? "text-red-500 hover:bg-red-50"
                    : "text-slate-600 hover:bg-slate-100",
                )}
              >
                <span
                  className={item.danger ? "text-red-400" : "text-slate-400"}
                >
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  const editorState = useEditorState({
    editor,
    selector: menuBarStateSelector,
  });
  const [showImageModal, setShowImageModal] = useState(false);
  const [showTableMenu, setShowTableMenu] = useState(false);

  const insertImage = (src: string, alt: string) => {
    editor.chain().focus().setImage({ src, alt }).run();
  };

  return (
    <>
      <div className="w-full border-b border-slate-200 bg-white sticky top-0 z-30 shadow-sm">
        <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5">
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editorState.canUndo}
            title="Undo (Ctrl+Z)"
          >
            <Undo size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editorState.canRedo}
            title="Redo (Ctrl+Y)"
          >
            <Redo size={15} />
          </ToolbarButton>

          <Divider />

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editorState.canBold}
            active={editorState.isBold}
            title="Bold (Ctrl+B)"
          >
            <Bold size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editorState.canItalic}
            active={editorState.isItalic}
            title="Italic (Ctrl+I)"
          >
            <Italic size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editorState.canStrike}
            active={editorState.isStrike}
            title="Strikethrough"
          >
            <Strikethrough size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editorState.canCode}
            active={editorState.isCode}
            title="Inline Code"
          >
            <Code size={15} />
          </ToolbarButton>

          <Divider />

          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            active={editorState.isHeading1}
            title="Heading 1"
          >
            <Heading1 size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            active={editorState.isHeading2}
            title="Heading 2"
          >
            <Heading2 size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            active={editorState.isHeading3}
            title="Heading 3"
          >
            <Heading3 size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            active={editorState.isHeading4}
            title="Heading 4"
          >
            <HeadingLabel level={4} active={editorState.isHeading4} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            active={editorState.isHeading5}
            title="Heading 5"
          >
            <HeadingLabel level={5} active={editorState.isHeading5} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setParagraph().run()}
            active={editorState.isParagraph}
            title="Paragraph"
          >
            <ParkingSquare size={15} />
          </ToolbarButton>

          <Divider />

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editorState.isBulletList}
            title="Bullet List"
          >
            <List size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editorState.isOrderedList}
            title="Ordered List"
          >
            <ListOrdered size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={editorState.isBlockquote}
            title="Blockquote"
          >
            <Quote size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            active={editorState.isCodeBlock}
            title="Code Block"
          >
            <Code2 size={15} />
          </ToolbarButton>

          <Divider />

          <ToolbarButton
            onClick={() => setShowImageModal(true)}
            title="Sisipkan Gambar"
          >
            <ImageIcon size={15} />
          </ToolbarButton>

          <div className="relative">
            <ToolbarButton
              onClick={() => setShowTableMenu((v) => !v)}
              active={editor.isActive("table")}
              title="Tabel"
            >
              <Table size={15} />
            </ToolbarButton>
            {showTableMenu && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setShowTableMenu(false)}
                />
                <TableMenu
                  editor={editor}
                  onClose={() => setShowTableMenu(false)}
                />
              </>
            )}
          </div>

          <Divider />

          <ToolbarButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            title="Garis Horizontal"
          >
            <Minus size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setHardBreak().run()}
            title="Hard Break (Shift+Enter)"
          >
            <WrapText size={15} />
          </ToolbarButton>

          <Divider />

          <ToolbarButton
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
            title="Hapus semua format"
          >
            <Trash2 size={15} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().clearNodes().run()}
            title="Reset node"
          >
            <RotateCcw size={15} />
          </ToolbarButton>
        </div>
      </div>

      {showImageModal && (
        <ImageModal
          onClose={() => setShowImageModal(false)}
          onInsert={insertImage}
        />
      )}
    </>
  );
};
