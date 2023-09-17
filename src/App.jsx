import Header from "./components/Header/Header";
import { useState } from "react";
import { AiFillPhone, AiFillGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import EducationItem from "./components/Education/EducationItem";
import ExperienceItem from "./components/Experience/ExperienceItem";

const App = () => {
  const defaultUserInfo = {
    name: "Adam Kwiasowski",
    email: "kwiasekkwiasek@gmail.com",
    phone: "518 644 263",
    location: "Lodz, Poland",
  };
  const defaultSchoolInfo = {
    name: "Politechnika Łódzka",
    title: "Inzynier informatyki",
    sdate: "2023",
    edate: "2026",
  };

  const defaultExperienceInfo = {
    name: "Microsoft",
    title: "Mid Frontend Developer",
    resp: "Keeping code optimized",
    sdate: "06/2020",
    edate: "till today",
  };

  const [headerInfo, setHeaderInfo] = useState(defaultUserInfo);
  const [educationInfo, setEducationInfo] = useState(defaultSchoolInfo);
  const [experienceInfo, setExperienceInfo] = useState(defaultExperienceInfo);

  return (
    <>
      <div className="flex flex-row p-4">
        <section className="flex-1 flex flex-col items-center print:hidden gap-5">
          <Header onSave={setHeaderInfo} />
          <EducationItem onSave={setEducationInfo} />
          <ExperienceItem onSave={setExperienceInfo} />
        </section>
        <section className="sheet flex-1">
          <section className="flex flex-col items-center gap-4 py-7">
            <h1 className="text-4xl font-bold">{headerInfo.name}</h1>
            <span className="flex w-full justify-around text-base">
              {headerInfo.email && (
                <p className="flex items-center gap-1">
                  <IoMdMail />
                  {headerInfo.email}
                </p>
              )}
              {headerInfo.phone && (
                <p className="flex items-center gap-1">
                  <AiFillPhone />
                  {headerInfo.phone}
                </p>
              )}
              {headerInfo.location && (
                <p className="flex items-center gap-1">
                  <FaLocationDot />
                  {headerInfo.location}
                </p>
              )}
            </span>
          </section>
          {educationInfo.name && (
            <section className="flex flex-col px-7 gap-4 py-7 ">
              <p className="text-2xl font-bold">Education</p>
              <div>
                <p className="text-base font-bold">{educationInfo.name}</p>
                <p className="text-sm italic">{educationInfo.title}</p>
                <p className="text-sm">
                  {educationInfo.sdate &&
                    `${educationInfo.sdate} - ${educationInfo.edate}`}
                </p>
              </div>
            </section>
          )}
          {experienceInfo.name && (
            <section className="flex flex-col px-7 gap-4 py-7 ">
              <p className="text-2xl font-bold">Experience</p>
              <div>
                <p className="text-base font-bold">{experienceInfo.name}</p>
                <p className="text-sm italic">{experienceInfo.title}</p>
                <p className="text-sm">
                  {experienceInfo.sdate &&
                    `${experienceInfo.sdate} - ${experienceInfo.edate}`}
                </p>
              </div>
            </section>
          )}
        </section>
      </div>
      <footer className="flex justify-center text-black">
        <a href="" target="_blank" className="flex items-center gap-1">
          <AiFillGithub /> Adam Kwiasowski
        </a>
      </footer>
    </>
  );
};

export default App;
