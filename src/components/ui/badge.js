import React from "react";

const baseClass =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";

const variantClass = {
  default: "bg-blue-100 text-blue-700",
  secondary: "bg-gray-100 text-gray-700",
  outline: "border border-gray-300 text-gray-800 bg-white",
};

export function Badge({ className = "", variant = "default", ...props }) {
  const v = variantClass[variant] || variantClass.default;
  return <span className={`${baseClass} ${v} ${className}`} {...props} />;
}

