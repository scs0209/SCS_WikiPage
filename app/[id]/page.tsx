import NoticeDetailContent from "@/Components/NoticeDetailPage/NoticeDetailContent";

const NoticeDetailPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;

  return (
    <section className="max-w-screen-lg mx-auto">
      <NoticeDetailContent id={id} />
    </section>
  );
};

export default NoticeDetailPage;
