import { useState } from "react";
import Input from "../Input/Input";
import { v4 } from "uuid";
import Save from "../Buttons/Save";
import Reset from "../Buttons/Reset";

const EducationItem = () => {
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

  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState(defaultSchoolInfo);

  const detailsArr = [
    { name: "name", placeholder: "School name", key: v4() },
    { name: "title", placeholder: "Title of study", key: v4() },
    { name: "sdate", placeholder: "Start date of study", key: v4() },
    { name: "edate", placeholder: "End date of study", key: v4() },
  ];

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
          <Reset blankInfo={resetSchoolInfo} infoSetter={setInfo} />
          <Save editSetter={setEdit}>Save</Save>
        </>
      ) : (
        <>
          <p>{info.name}</p>
          <p>{info.title}</p>
          <p>
            {info.sdate} - {info.edate}
          </p>
          <Save editSetter={setEdit}>Edit</Save>
        </>
      )}
    </div>
  );
};

export default EducationItem;
