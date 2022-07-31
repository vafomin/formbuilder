import { FaEdit, FaTrash } from "react-icons/fa";

type FormElementProps = {
  id: number;
  name: string;
  onEdit: () => void;
  onDelete: () => void;
};

const FormElement: React.FC<FormElementProps> = ({
  id,
  name,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-center gap-8 p-4 border-l-4 border-indigo-300">
      <h1 className="text-white">{name}</h1>
      <div className="flex gap-4">
        <FaEdit
          className="text-white cursor-pointer hover:scale-150"
          onClick={onEdit}
        />
        <FaTrash
          className="text-red-600 cursor-pointer hover:scale-150"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default FormElement;
