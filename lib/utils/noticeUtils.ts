import { Item } from "../interface";
import { saveItemsToLocalStorage } from "./localStorageUtils";

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
