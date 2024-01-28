"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Item } from "@/lib/interface";
import { initializeItems } from "@/lib/utils/itemUtils";

import Pagination from "./Pagination";

const NoticeListSection = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(initializeItems().reverse());
  }, []);

  return (
    <section className="flex flex-col space-y-4 p-4 rounded-lg max-w-screen-lg mx-auto">
      <div className="text-right">
        <Link href={"/write"} className="write-link">
          <button className="mt-4 px-4 py-2 bg-[#1F75FF] text-white rounded shadow-md hover:bg-blue-700 transition-colors duration-200">
            추가
          </button>
        </Link>
      </div>
      <Pagination items={items} totalItems={items.length} itemsPerPage={5} />
    </section>
  );
};

export default NoticeListSection;
