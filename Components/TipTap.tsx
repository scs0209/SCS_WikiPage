"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface Props {
  content: string;
  onChange: (richText: string) => void;
}

const TipTap = ({ content, onChange }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: content,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input bg-back",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};

export default TipTap;
