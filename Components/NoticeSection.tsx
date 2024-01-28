"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Item } from "@/lib/interface";
import { initializeItems } from "@/lib/utils/itemUtils";

import Pagination from "./Pagination";

const itemsPerPage = 5;

const NoticeSection = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setItems(initializeItems().reverse());
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="flex flex-col space-y-4 p-4 rounded-lg max-w-screen-lg mx-auto">
      <div className="text-right">
        <Link href={"/write"}>
          <button className="mt-4 px-4 py-2 bg-[#1F75FF] text-white rounded shadow-md hover:bg-blue-700 transition-colors duration-200">
            추가
          </button>
        </Link>
      </div>
      {selectedItems.map((wikiPage) => (
        <Link href={`/${wikiPage.id}`} key={wikiPage.id}>
          <span className="block p-4 bg-white rounded shadow-md hover:bg-gray-50 transition-colors duration-200">
            {wikiPage.title}
          </span>
        </Link>
      ))}
      <Pagination
        totalItems={items.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default NoticeSection;
