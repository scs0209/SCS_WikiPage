"use client";

import { useState } from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

import { addNewItemToLocalStorage } from "@/lib/utils/localStorageUtils";

import Toolbar from "./Toolbar";

interface Props {
  content?: string;
}

const TipTap = ({ content }: Props) => {
  const [title, setTitle] = useState("");
  const editor = useEditor({
    extensions: [StarterKit.configure(), Underline],
    content: content,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input bg-back",
      },
    },
  });

  const saveContent = () => {
    const newItem = {
      id: Date.now(),
      title: title,
      content: editor!.getHTML(),
    };

    addNewItemToLocalStorage(newItem);
  };

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="rounded-md border border-input bg-back w-full min-h-[40px]"
        placeholder="Enter the title here"
      />
      <Toolbar editor={editor!} />
      <EditorContent editor={editor} />
      <button onClick={saveContent}>Save</button>
    </>
  );
};

export default TipTap;
