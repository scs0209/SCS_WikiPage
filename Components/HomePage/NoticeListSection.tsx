"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Item } from "@/lib/interface";
import { initializeItems } from "@/lib/utils/itemUtils";

import Pagination from "./Pagination";
import RightButton from "../RightButton";

const NoticeListSection = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(initializeItems().reverse());
  }, []);

  return (
    <section className="flex flex-col space-y-4 p-4 rounded-lg max-w-screen-lg mx-auto">
      <div className="text-right">
        <Link href={"/write"} className="write-link">
          <RightButton>추가</RightButton>
        </Link>
      </div>
      <Pagination items={items} totalItems={items.length} itemsPerPage={5} />
    </section>
  );
};

export default NoticeListSection;
