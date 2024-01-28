interface Props {
  title: string;
  content: string;
  onEdit: () => void;
}

const NoticeViewer = ({ title, content, onEdit }: Props) => {
  return (
    <>
      <div className="text-right">
        <button
          className="mt-4 w-[100px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onEdit}
        >
          수정하기
        </button>
      </div>
      <div className="border-b-2 border-gray-200 pb-4 mb-4">
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
