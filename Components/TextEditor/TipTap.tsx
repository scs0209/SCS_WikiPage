"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

import Toolbar from "./Toolbar";

interface Props {
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initialContent?: string;
  onSave: (content: string) => void;
}

const TipTap = ({ title, onChange, initialContent, onSave }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit.configure(), Underline],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input bg-back",
      },
    },
  });

  const saveContent = () => {
    const content = editor!.getHTML();
    onSave(content);
  };

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={onChange}
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
