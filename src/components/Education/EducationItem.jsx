import { useState } from "react";
import Input from "../Input/Input";
import Reset from "../Buttons/Reset";

const EducationItem = ({ onSave }) => {
  const defaultSchoolInfo = {
    name: "Politechnika Łódzka",
    title: "Inzynier informatyki",
    sdate: "2023",
    edate: "2026",
  };
  const resetSchoolInfo = {
    name: "",
    title: "",
    sdate: "",
    edate: "",
  };

  const [info, setInfo] = useState(defaultSchoolInfo);

  const handleSave = () => {
    onSave(info);
  };

  return (
    <>
      <p className="self-start font-bold">Education</p>
      <div className="flex flex-col gap-3 w-4/5 mt-3">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          infoGetter={info}
          infoSetter={setInfo}
        />
        <Input
          type="text"
          name="title"
          placeholder="Title of study"
          infoGetter={info}
          infoSetter={setInfo}
        />
        <Input
          type="text"
          name="sdate"
          placeholder="Start date of study"
          infoGetter={info}
          infoSetter={setInfo}
        />
        <Input
          type="text"
          name="edate"
          placeholder="End date of study"
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
          <Reset blankInfo={resetSchoolInfo} infoSetter={setInfo} />
        </div>
      </div>
    </>
  );
};

export default EducationItem;
