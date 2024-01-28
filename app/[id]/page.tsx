import NoticeDetailContent from "@/Components/NoticeDetailPage/NoticeDetailContent";

const NoticeDetailPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;

  return (
    <main>
      <NoticeDetailContent id={id} />;
    </main>
  );
};

export default NoticeDetailPage;
