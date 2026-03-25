const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const handleImageUpload = async (file) => {
  if (!file) return null;
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Ukuran file terlalu besar");
  }
  const formData = new FormData();
  formData.append("image", file);
  const response = await fetch(`${API_URL}/docs-upload`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  const url = data?.data?.url;
  if (!url) {
    throw new Error("Gagal upload gambar");
  }
  return url;
};

export const canInsertImage = (editor) => {
  if (!editor) return false;
  return editor.can().setImage({ src: " " });
};

export const insertImage = (editor, url) => {
  if (!editor || !url) return false;
  return editor.chain().focus().setImage({ src: url }).run();
};

export const isImageActive = (editor) => {
  if (!editor) return false;
  return editor.isActive("image");
};

