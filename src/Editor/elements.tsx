import FormElement from "../components/form-element";

const Elements = ({ formFields, formButtons, onEdit, onDelete }) => {
  return (
    <div>
      {formFields.length > 0 && <p className="text-white mb-4">Fields</p>}
      {formFields &&
        formFields.map(
          (item) =>
            item.element !== "button" && (
              <FormElement
                key={`${item.id}_element_${item.element}`}
                name={item.name}
                type={item.element}
                onEdit={() => onEdit(item.id)}
                onDelete={() => onDelete(item.id)}
              />
            )
        )}
      {formButtons.length > 0 && <p className="text-white my-4">Buttons</p>}
      {formButtons &&
        formButtons.map(
          (item) =>
            item.element === "button" && (
              <FormElement
                key={`${item.id}_element_${item.element}`}
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
