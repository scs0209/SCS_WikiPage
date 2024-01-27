"use client";

import { Item } from "@/lib/interface";
import {
  loadFromLocalStorage,
  saveItemsToLocalStorage,
} from "@/lib/utils/localStorageUtils";
import { useEffect, useState } from "react";

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

  const handleSave = () => {
    const updatedItems = items.map((item) =>
      item.id === Number(id) ? { ...item, title, content } : item
    );
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleSave}>저장하기</button>
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
