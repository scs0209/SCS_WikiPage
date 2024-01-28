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

export const linkifyContent = (content: string, allItems: Item[]): string => {
  return allItems.reduce((linkedContent, item) => {
    const link = `<a href="/${item.id}">${item.title}</a>`;
    return linkedContent.replace(new RegExp(item.title, "g"), link);
  }, content);
};

export const createNewItem = (title: string, content: string): Item => {
  return {
    id: Date.now(),
    title: title,
    content: content,
  };
};

export const createAndStoreNewItem = (
  title: string,
  allItems: Item[],
  newContent: string
) => {
  const linkedContent = linkifyContent(newContent, allItems);
  const newItem = createNewItem(title, linkedContent);

  addNewItemToLocalStorage(newItem);

  return newItem;
};
