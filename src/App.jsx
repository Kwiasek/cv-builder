import { AiFillGithub } from "react-icons/ai";
import InputInfo from "./components/Inputs/InputInfo";
import ShowcaseCV from "./components/Showcase/ShowcaseCV";

const App = () => {
  return (
    <>
      <div className="w-full flex justify-center py-2 print:hidden">
        <button
          className="w-1/4 bg-white text-xl py-1 h-10 rounded-md hover:bg-gray-300 border-gray-500 hover:border-2 border-solid"
          onClick={() => window.print()}
        >
          Print or save to PDF
        </button>
      </div>
      <div className="flex flex-col gap-3 p-4 md:flex-row">
        <InputInfo />
        <ShowcaseCV />
      </div>
      <footer className="flex justify-center text-black print:hidden">
        <a href="" target="_blank" className="flex items-center gap-1">
          <AiFillGithub /> Adam Kwiasowski
        </a>
      </footer>
    </>
  );
};

export default App;
