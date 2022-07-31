import {
  FaCheckSquare,
  FaChevronCircleDown,
  FaFont,
  FaRegSquare,
} from "react-icons/fa";

const Icon = ({ el }) => {
  return (
    <div>
      {el === "input" && <FaFont />}
      {el === "list" && <FaChevronCircleDown />}
      {el === "checkbox" && <FaCheckSquare />}
      {el === "button" && <FaRegSquare />}
    </div>
  );
};

export default Icon;
