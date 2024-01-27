"use client";

import TipTap from "@/Components/TipTap";
import { loadFromLocalStorage } from "@/lib/utils/localStorageUtils";
import { createAndStoreNewItem } from "@/lib/utils/noticeUtils";
import { useEffect, useState } from "react";

const NoticeWritePage = () => {
  const [title, setTitle] = useState("");
  const [allItems, setAllItems] = useState<any>([]);

  useEffect(() => {
    const items = loadFromLocalStorage();
    setAllItems(items);
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <TipTap
        title={title}
        setTitle={setTitle}
        onSave={(newContent: string) => {
          createAndStoreNewItem(title, allItems, newContent);
        }}
      />
    </div>
  );
};

export default NoticeWritePage;
