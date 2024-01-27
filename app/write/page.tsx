"use client";

import TipTap from "@/Components/TipTap";
import {
  addNewItemToLocalStorage,
  loadFromLocalStorage,
} from "@/lib/utils/localStorageUtils";
import { useEffect, useState } from "react";

const NoticeWritePage = () => {
  const [title, setTitle] = useState("");
  const [allItems, setAllItems] = useState<any>([]);

  useEffect(() => {
    const items = loadFromLocalStorage();
    setAllItems(items);
  }, []);

  const handleSave = (newContent: string) => {
    let linkedContent = newContent;
    allItems.forEach((item: any) => {
      const link = `<a href="/${item.id}">${item.title}</a>`;
      linkedContent = linkedContent.replace(new RegExp(item.title, "g"), link);
    });

    const newItem = {
      id: Date.now(),
      title: title,
      content: linkedContent,
    };

    addNewItemToLocalStorage(newItem);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <TipTap title={title} setTitle={setTitle} onSave={handleSave} />
    </div>
  );
};

export default NoticeWritePage;
