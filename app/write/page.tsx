"use client";

import TipTap from "@/Components/TipTap";
import { addNewItemToLocalStorage } from "@/lib/utils/localStorageUtils";
import { useState } from "react";

const NoticeWritePage = () => {
  const [title, setTitle] = useState("");

  const handleSave = (newContent: string) => {
    const newItem = {
      id: Date.now(),
      title: title,
      content: newContent,
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
