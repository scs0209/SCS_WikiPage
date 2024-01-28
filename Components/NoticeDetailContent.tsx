"use client";

import { useEffect, useState } from "react";

import { Item } from "@/lib/interface";
import { loadFromLocalStorage } from "@/lib/utils/localStorageUtils";
import { handleSave } from "@/lib/utils/noticeUtils";

import { useToggle } from "@/hooks/useToggle";

import TipTap from "./TipTap";
import NoticeViewer from "./NoticeViewer";

interface Props {
  id: number;
}

const NoticeDetailContent = ({ id }: Props) => {
  const [items, setItems] = useState<Item[]>(loadFromLocalStorage());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, toggleEditing] = useToggle(false);

  useEffect(() => {
    const item = items.find((item: Item) => item.id === Number(id));
    if (item) {
      setTitle(item.title);
      setContent(item.content);
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
          title={title}
          setTitle={setTitle}
          initialContent={content}
          onSave={(newContent) => {
            updateAndSaveItem(title, newContent);
          }}
        />
      ) : (
        <NoticeViewer title={title} content={content} onEdit={toggleEditing} />
      )}
    </div>
  );
};

export default NoticeDetailContent;
