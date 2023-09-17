import Input from "../Input/Input";
import Reset from "../Buttons/Reset";
import { useState } from "react";

const ExperienceItem = ({ onSave }) => {
  const defaultExperienceInfo = {
    name: "Microsoft",
    title: "Mid Frontend Developer",
    resp: "Keeping code optimized",
    sdate: "06/2020",
    edate: "till today",
  };

  const resetExperienceInfo = {
    name: "",
    title: "",
    resp: "",
    sdate: "",
    edate: "",
  };

  const [info, setInfo] = useState(defaultExperienceInfo);

  const handleSave = () => {
    onSave(info);
  };

  return (
    <>
      <p className="self-start font-bold">Experience</p>
      <div className="flex flex-col gap-3 w-4/5 mt-3">
        <Input
          name="name"
          placeholder="Company name"
          infoGetter={info}
          infoSetter={setInfo}
        />
        <Input
          name="title"
          placeholder="Position title"
          infoGetter={info}
          infoSetter={setInfo}
        />
        <Input
          name="resp"
          placeholder="Main responsibilities of your job"
          infoGetter={info}
          infoSetter={setInfo}
        />
        <Input
          name="sdate"
          placeholder="When you started working"
          infoGetter={info}
          infoSetter={setInfo}
        />
        <Input
          name="edate"
          placeholder="When you ended working"
          infoGetter={info}
          infoSetter={setInfo}
        />
        <div className="flex justify-between">
          <button
            className="px-2 py-1 bg-green-500 text-black rounded-md hover:bg-green-400"
            onClick={handleSave}
          >
            Save
          </button>
          <Reset blankInfo={resetExperienceInfo} infoSetter={setInfo} />
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
