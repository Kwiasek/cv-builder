import { resetInfo } from "../utils/reset";

const Reset = ({ blankInfo, infoSetter }) => {
  return (
    <button
      className="text-rose-700 border-2 border-rose-700 rounded-md p-1 hover:bg-rose-700 hover:text-white"
      onClick={() => {
        resetInfo(blankInfo, infoSetter);
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
