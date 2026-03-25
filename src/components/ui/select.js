import React from "react";

const baseClass =
  "flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50";

export function Select({ className = "", children, ...props }) {
  return (
    <select className={`${baseClass} ${className}`} {...props}>
      {children}
    </select>
  );
}

