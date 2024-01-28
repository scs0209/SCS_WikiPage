import RightButton from "../RightButton";

interface Props {
  title: string;
  content: string;
  onEdit: () => void;
}

const NoticeViewer = ({ title, content, onEdit }: Props) => {
  return (
    <>
      <RightButton onClick={onEdit}>수정</RightButton>
      <div className="border-b-2 border-gray-200 mb-4">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
      </div>
      <div
        className="prose max-w-none mb-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
};

export default NoticeViewer;
