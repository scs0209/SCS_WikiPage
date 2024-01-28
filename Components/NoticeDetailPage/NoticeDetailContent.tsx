"use client";

import { useEffect, useState } from "react";

import { Item } from "@/lib/interface";
import { loadFromLocalStorage } from "@/lib/utils/localStorageUtils";
import { handleSave } from "@/lib/utils/noticeUtils";

import { useToggle } from "@/hooks/useToggle";
import useInput from "@/hooks/useInput";

import TipTap from "../TextEditor/TipTap";
import NoticeViewer from "./NoticeViewer";

interface Props {
  id: number;
}

const NoticeDetailContent = ({ id }: Props) => {
  const [items, setItems] = useState<Item[]>(loadFromLocalStorage());
  const [isEditing, toggleEditing] = useToggle(false);
  const title = useInput("");
  const content = useInput("");

  useEffect(() => {
    const item = items.find((item: Item) => item.id === Number(id));
    if (item) {
      title.setValue(item.title);
      content.setValue(item.content);
    }
  }, [items, id]);

  const updateAndSaveItem = (newTitle: string, newContent: string) => {
    const updatedItems = handleSave(items, id, newTitle, newContent);
    setItems(updatedItems);
    toggleEditing();
  };

  return (
    <div className="flex flex-col">
      {isEditing ? (
        <TipTap
          title={title.value}
          onChange={title.onChange}
          initialContent={content.value}
          onSave={(newContent) => {
            updateAndSaveItem(title.value, newContent);
          }}
        />
      ) : (
        <NoticeViewer
          title={title.value}
          content={content.value}
          onEdit={toggleEditing}
        />
      )}
    </div>
  );
};

export default NoticeDetailContent;
