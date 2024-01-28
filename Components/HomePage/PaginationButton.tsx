import { ReactNode } from "react";

interface Props {
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}

const PaginationButton = ({ children, disabled, onClick }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-3 py-1 font-bold rounded-md 
        ${
          disabled
            ? "cursor-not-allowed opacity-50 bg-gray-200"
            : "bg-gray-300 text-white hover:bg-blue-700"
        }`}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
