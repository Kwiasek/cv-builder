/* eslint-disable react/prop-types */
import { changeInfo } from "../utils/change";

const Input = ({
  type = "text",
  name = "name",
  placeholder = "name",
  infoGetter,
  infoSetter,
}) => {
  return (
    <input
      className="rounded-md px-2 py-1"
      type={type}
      name={name}
      placeholder={placeholder}
      value={infoGetter[name]}
      onChange={(e) => {
        changeInfo(e, infoSetter);
      }}
    />
  );
};

export default Input;
