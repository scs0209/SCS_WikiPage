"use client";

import { useEffect, useState } from "react";

import { Item } from "@/lib/interface";
import { loadFromLocalStorage } from "@/lib/utils/localStorageUtils";
import { createAndStoreNewItem } from "@/lib/utils/noticeUtils";

import TipTap from "@/Components/TextEditor/TipTap";
import useInput from "@/hooks/useInput";

const NoticeWritePage = () => {
  const title = useInput("");
  const [allItems, setAllItems] = useState<Item[]>([]);

  useEffect(() => {
    const items = loadFromLocalStorage();
    setAllItems(items);
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <TipTap
        title={title.value}
        onChange={title.onChange}
        onSave={(newContent: string) => {
          createAndStoreNewItem(title.value, allItems, newContent);
        }}
      />
    </div>
  );
};

export default NoticeWritePage;
