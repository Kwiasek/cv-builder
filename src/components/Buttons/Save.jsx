const Save = (props) => {
  return (
    <button className="px-2 py-1 bg-green-500 text-black rounded-md hover:bg-slate-100">
      {props.children}
    </button>
  );
};

export default Save;
