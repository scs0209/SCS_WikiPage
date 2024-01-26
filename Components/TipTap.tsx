"use client";

import { useState } from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

import { saveToLocalStorage } from "@/lib/utils/localStorageUtils";

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

    saveToLocalStorage(newItem);
  };

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the title here"
      />
      <button onClick={saveContent}>Save</button>
      <Toolbar editor={editor!} />
      <EditorContent editor={editor} />
    </>
  );
};

export default TipTap;
