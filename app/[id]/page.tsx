import { items } from "@/Components/NoticeSection";

const NoticeDetailPage = ({ params }: { params: { id: number } }) => {
  const item = items.find((item) => item.id === Number(params.id));

  return (
    <div className="flex flex-col">
      <span>Title: {item?.title}</span>
      <span>{item?.content}</span>
    </div>
  );
};

export default NoticeDetailPage;
