import PaginationButton from "./PaginationButton";

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex items-center justify-center space-x-4">
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {"<"}
      </PaginationButton>
      <span className="text-[#1F75FF]">{currentPage}</span>
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {">"}
      </PaginationButton>
    </div>
  );
};

export default Pagination;
