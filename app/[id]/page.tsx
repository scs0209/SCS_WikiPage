import NoticeDetailContent from "@/Components/NoticeDetailContent";

const NoticeDetailPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;

  return (
    <div className="flex flex-col">
      <NoticeDetailContent id={id} />
    </div>
  );
};

export default NoticeDetailPage;
