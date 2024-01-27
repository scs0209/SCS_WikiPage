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
    <section className="flex flex-col">
      {selectedItems.map((wikiPage) => (
        <Link href={`/${wikiPage.id}`} key={wikiPage.id}>
          {wikiPage.title}
        </Link>
      ))}
      <Pagination
        totalItems={items.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <Link href={"/write"}>write</Link>
    </section>
  );
};

export default NoticeSection;
