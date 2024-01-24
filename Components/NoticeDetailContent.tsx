"use client";

import { Item } from "@/lib/interface";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/lib/utils/localStorageUtils";
import { useEffect, useState } from "react";

interface Props {
  id: number;
}

const NoticeDetailContent = ({ id }: Props) => {
  const [items, setItems] = useState(loadFromLocalStorage());
  const item = items.find((item: Item) => item.id === Number(id));

  useEffect(() => {
    saveToLocalStorage(items);
  }, [items]);

  return (
    <div className="flex flex-col">
      <span>{item.title}</span>
      <span>{item.content}</span>
    </div>
  );
};

export default NoticeDetailContent;
