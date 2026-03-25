"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ConfirmModal({ title, message, onClose, onConfirm }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-500">{message}</p>
        <div className="flex justify-end gap-3 pt-1">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={onClose}
          >
            Batal
          </Button>
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={onConfirm}
          >
            Hapus
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
