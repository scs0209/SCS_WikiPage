interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

const RightButton = ({ children, onClick }: Props) => {
  return (
    <div className="text-right">
      <button
        onClick={onClick}
        className="mt-4 px-4 py-2 bg-[#1F75FF] text-white rounded shadow-md hover:bg-blue-700 transition-colors duration-200"
      >
        {children}
      </button>
    </div>
  );
};

export default RightButton;
