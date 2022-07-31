import { FaEdit, FaTrash } from "react-icons/fa";
import Icon from "./Icon";

type FormElementProps = {
  id: number;
  name: string;
  type: string;
  onEdit: () => void;
  onDelete: () => void;
};

const FormElement: React.FC<FormElementProps> = ({
  id,
  name,
  type,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-center gap-8 p-4 border-l-4 border-indigo-300">
      <div className="flex items-center gap-4 text-white">
        <Icon el={type} />
        <h1>{name}</h1>
      </div>
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
