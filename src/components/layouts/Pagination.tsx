type Meta = {
  current_page: number;
  total_pages: number;
};

type Props = {
  meta: Meta;
  onPageChange: (page: number) => void;
};

export default function Pagination({ meta, onPageChange }: Props) {
  if (!meta) return null;

  const { current_page, total_pages } = meta;

  return (
    <div className="flex items-center gap-2 mt-4">
      {/* Prev */}
      <button
        disabled={current_page === 1}
        onClick={() => onPageChange(current_page - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {/* Numbers */}
      {Array.from({ length: total_pages }).map((_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded ${
              current_page === page ? "bg-blue-500 text-white" : ""
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={current_page === total_pages}
        onClick={() => onPageChange(current_page + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
