import { useState } from "react";

const EducationItem = () => {
  const defaultSchoolInfo = {
    name: "Politechnika Łódzka",
    title: "inzynier informatyki",
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
  const [schoolInfo, setSchoolInfo] = useState(defaultSchoolInfo);

  const handleToggleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  const handleResetSchoolInfo = () => {
    setSchoolInfo(resetSchoolInfo);
  };

  const handleChangeSchoolInfo = (e) => {
    setSchoolInfo((prevSchoolInfo) => ({
      ...prevSchoolInfo,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {edit ? (
        <>
          <input
            type="text"
            name="name"
            placeholder="School name"
            value={schoolInfo.name}
            onChange={handleChangeSchoolInfo}
          />
          <input
            type="text"
            name="title"
            placeholder="Title of study"
            value={schoolInfo.title}
            onChange={handleChangeSchoolInfo}
          />
          <input
            type="text"
            name="sdate"
            placeholder="Start date of study"
            value={schoolInfo.sdate}
            onChange={handleChangeSchoolInfo}
          />
          <input
            type="text"
            name="edate"
            placeholder="End date of study"
            value={schoolInfo.edate}
            onChange={handleChangeSchoolInfo}
          />
          <button onClick={handleResetSchoolInfo}>Reset</button>
          <button onClick={handleToggleEdit}>Save</button>
        </>
      ) : (
        <>
          <p>{schoolInfo.name}</p>
          <p>{schoolInfo.title}</p>
          <p>
            {schoolInfo.sdate} - {schoolInfo.edate}
          </p>
          <button onClick={handleToggleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default EducationItem;
