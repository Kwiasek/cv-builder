import { resetInfo } from "../utils/reset";

const Reset = ({ blankInfo, infoSetter }) => {
  return (
    <button
      onClick={() => {
        resetInfo(blankInfo, infoSetter);
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
