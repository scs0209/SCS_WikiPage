import { Editor } from "@tiptap/react";
import { Icon } from "./Icon";

interface Props {
  editor: Editor;
}

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return;
  }
  return (
    <div className="flex items-center justify-center gap-2 p-6 py-3 border-b-2 sm:gap-8">
      <div className="flex items-center justify-center gap-2">
        <Icon.H1 editor={editor} />
        <Icon.H2 editor={editor} />
        <Icon.H3 editor={editor} />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Icon.Bold editor={editor} />
        <Icon.Italic editor={editor} />
        <Icon.Strikethrough editor={editor} />
        <Icon.Code editor={editor} />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Icon.Quote editor={editor} />
        <Icon.AddPhoto editor={editor} />
      </div>
    </div>
  );
};

export default Toolbar;
