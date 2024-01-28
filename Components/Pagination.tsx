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
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-3 py-1 text-sm rounded-md 
        ${
          currentPage === 1
            ? "cursor-not-allowed opacity-50 bg-gray-200"
            : "bg-gray-300 text-white hover:bg-blue-700"
        }`}
      >
        {"<"}
      </button>
      <span className="text-[#1F75FF]">{currentPage}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-3 py-1 text-sm rounded-md 
          ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50 bg-gray-200"
              : "bg-gray-300 text-white hover:bg-blue-700"
          }`}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
