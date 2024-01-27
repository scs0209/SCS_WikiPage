import { Item } from "../interface";
import {
  addNewItemToLocalStorage,
  saveItemsToLocalStorage,
} from "./localStorageUtils";

export const handleSave = (
  items: Item[],
  id: number,
  newTitle: string,
  newContent: string
) => {
  const updatedItems = items.map((item) =>
    item.id === Number(id)
      ? { ...item, title: newTitle, content: newContent }
      : item
  );
  saveItemsToLocalStorage(updatedItems);
  return updatedItems;
};

export const createAndStoreNewItem = (
  title: string,
  allItems: Item[],
  newContent: string
) => {
  let linkedContent = newContent;
  allItems.forEach((item) => {
    const link = `<a href="/${item.id}">${item.title}</a>`;
    linkedContent = linkedContent.replace(new RegExp(item.title, "g"), link);
  });

  const newItem = {
    id: Date.now(),
    title: title,
    content: linkedContent,
  };

  addNewItemToLocalStorage(newItem);
  return newItem;
};
