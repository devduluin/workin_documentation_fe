import React from "react";

export function Card({ className = "", ...props }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }) {
  return (
    <div className={`flex flex-col gap-1 p-4 pb-2 ${className}`} {...props} />
  );
}

export function CardTitle({ className = "", ...props }) {
  return (
    <h3
      className={`text-base font-semibold text-gray-900 ${className}`}
      {...props}
    />
  );
}

export function CardDescription({ className = "", ...props }) {
  return (
    <p className={`text-sm text-gray-500 ${className}`} {...props} />
  );
}

export function CardContent({ className = "", ...props }) {
  return <div className={`p-4 pt-0 ${className}`} {...props} />;
}

export function CardFooter({ className = "", ...props }) {
  return <div className={`flex items-center p-4 pt-0 ${className}`} {...props} />;
}

