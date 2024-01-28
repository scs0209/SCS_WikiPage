import NoticeDetailContent from "@/Components/NoticeDetailPage/NoticeDetailContent";

const NoticeDetailPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;

  return <NoticeDetailContent id={id} />;
};

export default NoticeDetailPage;
