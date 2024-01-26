import { Editor } from "@tiptap/react";
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Strikethrough as StrikethroughIcon,
  Code as CodeIcon,
  Quote as QuoteIcon,
  Image as ImageIcon,
  Heading1,
  Heading2,
  Heading3,
} from "lucide-react";

interface Props {
  editor: Editor;
}

const H1 = ({ editor }: Props) => (
  <Heading1
    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
    className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
  />
);

const H2 = ({ editor }: Props) => (
  <Heading2
    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
    className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
  />
);

const H3 = ({ editor }: Props) => (
  <Heading3
    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
    className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
  />
);

const Bold = ({ editor }: Props) => (
  <BoldIcon
    onClick={() => editor.chain().focus().toggleBold().run()}
    className={editor.isActive("bold") ? "is-active" : ""}
  />
);

const Italic = ({ editor }: Props) => (
  <ItalicIcon
    onClick={() => editor.chain().focus().toggleItalic().run()}
    className={editor.isActive("italic") ? "is-active" : ""}
  />
);

const Strikethrough = ({ editor }: Props) => (
  <StrikethroughIcon
    onClick={() => editor.chain().focus().toggleStrike().run()}
    className={editor.isActive("strike") ? "is-active" : ""}
  />
);

const Code = ({ editor }: Props) => (
  <CodeIcon
    onClick={() => editor.chain().focus().toggleCode().run()}
    className={editor.isActive("code") ? "is-active" : ""}
  />
);

const Quote = ({ editor }: Props) => (
  <QuoteIcon
    onClick={() => editor.chain().focus().toggleBlockquote().run()}
    className={editor.isActive("blockquote") ? "is-active" : ""}
  />
);

const AddPhoto = ({ editor }: Props) => (
  <ImageIcon onClick={() => console.log("Add photo clicked")} />
);

export const Icon = {
  H1,
  H2,
  H3,
  Bold,
  Italic,
  Strikethrough,
  Code,
  Quote,
  AddPhoto,
};
