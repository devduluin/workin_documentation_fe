import React from "react";

const baseClass =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClass = {
  default: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-300",
  outline:
    "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-300",
  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-200",
  destructive:
    "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
};

const sizeClass = {
  sm: "h-8 px-3 py-1",
  md: "h-9 px-4 py-2",
  lg: "h-10 px-5 py-2.5",
};

export function Button({
  className = "",
  variant = "default",
  size = "md",
  ...props
}) {
  const v = variantClass[variant] || variantClass.default;
  const s = sizeClass[size] || sizeClass.md;
  return (
    <button
      className={`${baseClass} ${v} ${s} ${className}`}
      {...props}
    />
  );
}

