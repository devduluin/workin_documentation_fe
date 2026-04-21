'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [hoveredPage, setHoveredPage] = useState<number | null>(null);

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots : (number | string)[] = [];
    let l: number;

    for (let i = 1; i <= total_pages; i++) {
      if (i === 1 || i === total_pages || (i >= current_page - delta && i <= current_page + delta)) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l > 2) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers();
  const canGoPrev = current_page > 1;
  const canGoNext = current_page < total_pages;

  const handlePageClick = (page: number) => {
    if (typeof page === 'number') {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-1 py-8">
      <button
        onClick={() => onPageChange(current_page - 1)}
        disabled={!canGoPrev}
        aria-label="Previous page"
        className="relative cursor-pointer group p-2.5 rounded-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:disabled:bg-transparent"
      >
        <div className="absolute inset-0 rounded-lg bg-linear-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10 group-disabled:opacity-0" />
        <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
          canGoPrev ? 'bg-blue-50 group-hover:bg-blue-500' : 'bg-transparent'
        }`} />
        <ChevronLeft
          size={20}
          className={`relative z-10 transition-colors duration-300 ${
            canGoPrev ? 'text-blue-600 group-hover:text-white' : 'text-gray-400'
          }`}
        />
      </button>

      <div className="flex items-center gap-1">
        {pageNumbers.map((pageNum, idx) => {
          if (pageNum === '...') {
            return (
              <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 select-none">
                ⋯
              </span>
            );
          }

          const isActive = pageNum === current_page;

          return (
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum as number)}
              onMouseEnter={() => setHoveredPage(pageNum as number)}
              onMouseLeave={() => setHoveredPage(null)}
              className={`relative cursor-pointer group px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                isActive
                  ? 'z-20'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30" />
              )}
              {!isActive && (
                <>
                  <div className="absolute inset-0 rounded-lg bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-lg bg-linear-to-br from-blue-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </>
              )}

              <span className={`relative z-10 transition-colors duration-300 ${
                isActive ? 'text-white' : ''
              }`}>
                {pageNum}
              </span>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(current_page + 1)}
        disabled={!canGoNext}
        aria-label="Next page"
        className="relative cursor-pointer group p-2.5 rounded-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:disabled:bg-transparent"
      >
        <div className="absolute inset-0 rounded-lg bg-linear-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10 group-disabled:opacity-0" />
        <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
          canGoNext ? 'bg-blue-50 group-hover:bg-blue-500' : 'bg-transparent'
        }`} />
        <ChevronRight
          size={20}
          className={`relative z-10 transition-colors duration-300 ${
            canGoNext ? 'text-blue-600 group-hover:text-white' : 'text-gray-400'
          }`}
        />
      </button>

      <div className="ml-4 text-sm text-gray-500 font-medium hidden sm:block">
        Halaman <span className="text-gray-900">{current_page}</span> dari <span className="text-gray-900">{total_pages}</span>
      </div>
    </div>
  );
}