"use client";

import { useEffect, useState } from "react";

import { Item } from "@/lib/interface";
import {
  loadFromLocalStorage,
  saveItemsToLocalStorage,
} from "@/lib/utils/localStorageUtils";
import TipTap from "./TipTap";

interface Props {
  id: number;
}

const NoticeDetailContent = ({ id }: Props) => {
  const [items, setItems] = useState<Item[]>(loadFromLocalStorage());
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const item = items.find((item: Item) => item.id === Number(id));
    if (item) {
      setTitle(item.title);
      setContent(item.content);
    }
  }, [items, id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (newTitle: string, newContent: string) => {
    const updatedItems = items.map((item) =>
      item.id === Number(id)
        ? { ...item, title: newTitle, content: newContent }
        : item
    );
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col">
      {isEditing ? (
        <>
          <TipTap
            title={title}
            setTitle={setTitle}
            initialContent={content}
            onSave={(newContent) => {
              handleSave(title, newContent);
            }}
          />
        </>
      ) : (
        <>
          <span>{title}</span>
          <span>{content}</span>
          <button onClick={handleEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default NoticeDetailContent;
