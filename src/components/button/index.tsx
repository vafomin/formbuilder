type ButtonProps = {
  label: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, icon, className, onClick }) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium sm:text-sm bg-indigo-600  text-white hover:bg-indigo-700 ${className}`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
