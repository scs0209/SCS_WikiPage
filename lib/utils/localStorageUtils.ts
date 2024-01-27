import { Item } from "../interface";

export function addNewItemToLocalStorage(newItem: Item) {
  const existingItems = JSON.parse(localStorage.getItem("items") || "[]");

  const flattenedItems = existingItems.flat();

  flattenedItems.push(newItem);

  localStorage.setItem("items", JSON.stringify(flattenedItems));
}

export function saveItemsToLocalStorage(items: Item[]) {
  localStorage.setItem("items", JSON.stringify(items));
}

export function loadFromLocalStorage() {
  const savedItems = localStorage.getItem("items");
  if (savedItems) {
    return JSON.parse(savedItems);
  }
  return null;
}
