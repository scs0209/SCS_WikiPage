"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Toolbar from "./Toolbar";

interface Props {
  content?: string;
  onChange?: (richText: string) => void;
}

const TipTap = ({ content, onChange }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit.configure(), Underline],
    content: content,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input bg-back",
      },
    },
    // onUpdate({ editor }) {
    //   onChange(editor.getHTML());
    // },
  });

  return (
    <>
      <Toolbar editor={editor!} />
      <EditorContent editor={editor} />
    </>
  );
};

export default TipTap;
