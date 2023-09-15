import Input from "../Input/Input";
import Reset from "../Buttons/Reset";
import Save from "../Buttons/Save";
import { useState } from "react";

const ExperienceItem = () => {
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

  const detailsArr = [
    { name: "name", placeholder: "Company name" },
    { name: "title", placeholder: "Position title" },
    { name: "resp", placeholder: "Main responsibilities of your job" },
    { name: "sdate", placeholder: "When you started working" },
    { name: "edate", placeholder: "When you ended working" },
  ];

  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState(defaultExperienceInfo);

  return (
    <div>
      {edit ? (
        <>
          {detailsArr.map((input) => (
            <Input
              key={input.name}
              type="text"
              name={input.name}
              placeholder={input.placeholder}
              infoGetter={info}
              infoSetter={setInfo}
            />
          ))}
          <Reset blankInfo={resetExperienceInfo} infoSetter={setInfo} />
          <Save editSetter={setEdit}>Save</Save>
        </>
      ) : (
        <>
          <p>{info.name}</p>
          <p>{info.title}</p>
          <p>{info.resp}</p>
          <p>
            {info.sdate} - {info.edate}
          </p>
          <Save editSetter={setEdit}>Edit</Save>
        </>
      )}
    </div>
  );
};

export default ExperienceItem;
