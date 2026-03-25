import React from "react";

export function Table({ className = "", ...props }) {
  return (
    <table
      className={`w-full text-sm text-left text-gray-700 ${className}`}
      {...props}
    />
  );
}

export function TableHeader({ className = "", ...props }) {
  return (
    <thead
      className={`bg-gray-50 text-xs uppercase text-gray-500 ${className}`}
      {...props}
    />
  );
}

export function TableBody({ className = "", ...props }) {
  return <tbody className={className} {...props} />;
}

export function TableRow({ className = "", ...props }) {
  return (
    <tr
      className={`border-b last:border-0 hover:bg-gray-50 ${className}`}
      {...props}
    />
  );
}

export function TableHead({ className = "", ...props }) {
  return <th className={`px-3 py-2 font-medium ${className}`} {...props} />;
}

export function TableCell({ className = "", ...props }) {
  return <td className={`px-3 py-2 ${className}`} {...props} />;
}

