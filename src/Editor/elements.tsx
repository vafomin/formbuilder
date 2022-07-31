import FormElement from "../components/form-element";

const Elements = ({ form, onEdit, onDelete }) => {
  return (
    <div>
      <p className="text-white mb-4">Fields</p>
      {form &&
        form.map(
          (item) =>
            item.element !== "button" && (
              <FormElement
                key={`${item.id}_element_${item.element}`}
                id={item.id}
                name={item.name}
                type={item.element}
                onEdit={() => onEdit(item.id)}
                onDelete={() => onDelete(item.id)}
              />
            )
        )}
      <p className="text-white my-4">Buttons</p>
      {form &&
        form.map(
          (item) =>
            item.element === "button" && (
              <FormElement
                key={`${item.id}_element_${item.element}`}
                id={item.id}
                name={item.label}
                type={item.element}
                onEdit={() => onEdit(item.id)}
                onDelete={() => onDelete(item.id)}
              />
            )
        )}
    </div>
  );
};

export default Elements;
