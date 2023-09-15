import { handleToggleEdit } from "../utils/edit";

const Save = (props) => {
  return (
    <button
      onClick={() => {
        handleToggleEdit(props.editSetter);
      }}
    >
      {props.children}
    </button>
  );
};

export default Save;
