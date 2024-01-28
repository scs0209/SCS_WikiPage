"use client";

import { useEffect, useState } from "react";

import { Item } from "@/lib/interface";
import { loadFromLocalStorage } from "@/lib/utils/localStorageUtils";
import { createAndStoreNewItem } from "@/lib/utils/noticeUtils";

import TipTapEditor from "@/Components/TextEditor/TipTapEditor";
import useInput from "@/hooks/useInput";

const NoticeWriteSection = () => {
  const title = useInput("");
  const [allItems, setAllItems] = useState<Item[]>([]);

  useEffect(() => {
    const items = loadFromLocalStorage();
    setAllItems(items);
  }, []);

  return (
    <section className="max-w-screen-lg mx-auto p-8">
      <TipTapEditor
        title={title.value}
        onChangeTitle={title.onChange}
        onSave={(newContent: string) => {
          createAndStoreNewItem(title.value, allItems, newContent);
        }}
      />
    </section>
  );
};

export default NoticeWriteSection;
