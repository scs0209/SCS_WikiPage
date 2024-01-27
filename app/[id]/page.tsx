import NoticeDetailContent from "@/Components/NoticeDetailContent";

const NoticeDetailPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;

  return (
    <div className="max-w-screen-lg mx-auto">
      <NoticeDetailContent id={id} />
    </div>
  );
};

export default NoticeDetailPage;
