import { useState } from "react";
import Link from "next/link";

import { Item } from "@/lib/interface";

import PaginationButton from "../PaginationButton";

interface Props {
  items: Item[];
  totalItems: number;
  itemsPerPage: number;
}

const Pagination = ({ items, totalItems, itemsPerPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {selectedItems.map((wikiPage) => (
        <Link href={`/${wikiPage.id}`} key={wikiPage.id}>
          <span className="block p-4 bg-white rounded shadow-md hover:bg-gray-50 transition-colors duration-200">
            {wikiPage.title}
          </span>
        </Link>
      ))}
      <div className="flex items-center justify-center space-x-4">
        <PaginationButton
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {"<"}
        </PaginationButton>
        <span className="text-[#1F75FF]">{currentPage}</span>
        <PaginationButton
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {">"}
        </PaginationButton>
      </div>
    </>
  );
};

export default Pagination;
