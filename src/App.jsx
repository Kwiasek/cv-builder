import { AiFillPhone, AiFillGithub } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperienceInfo,
  addSchoolInfo,
  deleteExperienceInfo,
  deleteSchoolInfo,
  setExperienceInfo,
  setPersonalInfo,
  setSchoolInfo,
} from "./state/cvSlice";
import { useState } from "react";

const App = () => {
  const cv = useSelector((state) => state.value);
  const personalInfo = cv.personalInfo;
  const schoolInfo = cv.schoolInfo;
  const experienceInfo = cv.experienceInfo;

  const [togglePersonal, setTogglePersonal] = useState(true);
  const [toggleSchool, setToggleSchool] = useState(true);
  const [toggleExperience, setToggleExperience] = useState(true);

  const handleSetTogglePersonal = () => {
    setTogglePersonal(!togglePersonal);
  };

  const handleSetToggleSchool = () => {
    setToggleSchool(!toggleSchool);
  };

  const handleSetToggleExperience = () => {
    setToggleExperience(!toggleExperience);
  };

  const dispatch = useDispatch();
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
        <section className="flex-1 flex flex-col items-center print:hidden gap-5">
          <div id="personalInfo" className="flex flex-col w-full gap-2">
            <p
              className="flex items-center cursor-pointer"
              onClick={handleSetTogglePersonal}
            >
              {togglePersonal ? <FaAngleDown /> : <FaAngleUp />}
              Personal info
            </p>
            <div
              className={`flex flex-col w-full gap-2 ${
                togglePersonal ? "block" : "hidden"
              }`}
            >
              <input
                type="text"
                className="py-1 pl-2 rounded-md"
                value={personalInfo.name}
                placeholder="Name"
                onChange={(e) =>
                  dispatch(
                    setPersonalInfo({ type: "name", value: e.target.value })
                  )
                }
              />
              <input
                type="text"
                className="py-1 pl-2 rounded-md"
                value={personalInfo.email}
                placeholder="Email"
                onChange={(e) =>
                  dispatch(
                    setPersonalInfo({ type: "email", value: e.target.value })
                  )
                }
              />
              <input
                type="text"
                className="py-1 pl-2 rounded-md"
                value={personalInfo.phone}
                placeholder="Phone number"
                onChange={(e) =>
                  dispatch(
                    setPersonalInfo({ type: "phone", value: e.target.value })
                  )
                }
              />
              <input
                type="text"
                className="py-1 pl-2 rounded-md"
                value={personalInfo.location}
                placeholder="Location"
                onChange={(e) =>
                  dispatch(
                    setPersonalInfo({ type: "location", value: e.target.value })
                  )
                }
              />
            </div>
          </div>
          <div id="educationInfo" className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
              <p
                className="flex items-center cursor-pointer"
                onClick={handleSetToggleSchool}
              >
                {toggleSchool ? <FaAngleDown /> : <FaAngleUp />}
                Education info
              </p>
              <button
                className="px-3 py-2 h-12 w-28 bg-green-700 text-white text-xl rounded-md border-green-900 hover:border-2 hover:bg-green-600 border-solid"
                onClick={() => dispatch(addSchoolInfo())}
              >
                Add info
              </button>
            </div>
            <div
              className={`flex flex-col w-full gap-2 ${
                toggleSchool ? "block" : "hidden"
              }`}
            >
              {schoolInfo.map((info, id) => {
                return (
                  <div key={id} className="flex flex-col gap-2">
                    <input
                      type="text"
                      className="py-1 pl-2 rounded-md"
                      value={info.name}
                      placeholder="Name of school"
                      onChange={(e) =>
                        dispatch(
                          setSchoolInfo({
                            type: "name",
                            value: e.target.value,
                            id: id,
                          })
                        )
                      }
                    />
                    <input
                      type="text"
                      className="py-1 pl-2 rounded-md"
                      value={info.title}
                      placeholder="Title"
                      onChange={(e) =>
                        dispatch(
                          setSchoolInfo({
                            type: "title",
                            value: e.target.value,
                            id: id,
                          })
                        )
                      }
                    />
                    <input
                      type="text"
                      className="py-1 pl-2 rounded-md"
                      value={info.sdate}
                      placeholder="Start date"
                      onChange={(e) =>
                        dispatch(
                          setSchoolInfo({
                            type: "sdate",
                            value: e.target.value,
                            id: id,
                          })
                        )
                      }
                    />
                    <input
                      type="text"
                      className="py-1 pl-2 rounded-md"
                      value={info.edate}
                      placeholder="End date"
                      onChange={(e) =>
                        dispatch(
                          setSchoolInfo({
                            type: "edate",
                            value: e.target.value,
                            id: id,
                          })
                        )
                      }
                    />
                    <button
                      className="px-3 py-2 bg-red-700 h-12 text-white text-xl rounded-md border-red-900 border-solid hover:border-2 hover:bg-red-500"
                      onClick={() => dispatch(deleteSchoolInfo(id))}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="experienceInfo" className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
              <p
                className="flex items-center cursor-pointer"
                onClick={handleSetToggleExperience}
              >
                {toggleExperience ? <FaAngleDown /> : <FaAngleUp />}
                Experience info
              </p>
              <button
                className="px-3 py-2 h-12 w-28 bg-green-700 text-white text-xl rounded-md border-green-900 hover:border-2 hover:bg-green-600 border-solid"
                onClick={() => dispatch(addExperienceInfo())}
              >
                Add info
              </button>
            </div>
            <div
              className={`flex flex-col w-full gap-2 ${
                toggleExperience ? "block" : "hidden"
              }`}
            >
              {experienceInfo.map((info, id) => {
                return (
                  <div key={id} className="flex flex-col gap-2">
                    <input
                      type="text"
                      className="py-1 pl-2 rounded-md"
                      value={info.name}
                      placeholder="Workplace name"
                      onChange={(e) =>
                        dispatch(
                          setExperienceInfo({
                            type: "name",
                            value: e.target.value,
                            id: id,
                          })
                        )
                      }
                    />
                    <input
                      type="text"
                      className="py-1 pl-2 rounded-md"
                      value={info.title}
                      placeholder="Job title"
                      onChange={(e) =>
                        dispatch(
                          setExperienceInfo({
                            type: "title",
                            value: e.target.value,
                            id: id,
                          })
                        )
                      }
                    />
                    <input
                      type="text"
                      className="py-1 pl-2 rounded-md"
                      value={info.resp}
                      placeholder="Your responsibilities"
                      onChange={(e) =>
                        dispatch(
                          setExperienceInfo({
                            type: "resp",
                            value: e.target.value,
                            id: id,
                          })
                        )
                      }
                    />
                    <input
                      type="text"
                      className="py-1 pl-2 rounded-md"
                      value={info.sdate}
                      placeholder="Start date"
                      onChange={(e) =>
                        dispatch(
                          setExperienceInfo({
                            type: "sdate",
                            value: e.target.value,
                            id: id,
                          })
                        )
                      }
                    />
                    <input
                      type="text"
                      className="py-1 pl-2 rounded-md"
                      value={info.edate}
                      placeholder="End date"
                      onChange={(e) =>
                        dispatch(
                          setExperienceInfo({
                            type: "edate",
                            value: e.target.value,
                            id: id,
                          })
                        )
                      }
                    />
                    <button
                      className="px-3 py-2 bg-red-700 h-12 text-white text-xl rounded-md border-red-900 border-solid hover:border-2 hover:bg-red-500"
                      onClick={() => dispatch(deleteExperienceInfo(id))}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="sheet flex-1">
          <section className="flex flex-col w-full items-center gap-4 py-7">
            <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
            <span className="flex w-full justify-around text-base">
              {personalInfo.email && (
                <p className="flex items-center gap-1">
                  <IoMdMail />
                  {personalInfo.email}
                </p>
              )}
              {personalInfo.phone && (
                <p className="flex items-center gap-1">
                  <AiFillPhone />
                  {personalInfo.phone}
                </p>
              )}
              {personalInfo.location && (
                <p className="flex items-center gap-1">
                  <FaLocationDot />
                  {personalInfo.location}
                </p>
              )}
            </span>
            <hr className="w-full mx-auto h-1 bg-black border-0 print:block" />
          </section>
          {schoolInfo.length > 0 && (
            <section className="flex flex-col px-7 gap-2 py-7 items-center">
              <p className="text-base font-bold w-4/5 text-center">Education</p>
              <hr className="w-3/4 mx-auto h-1 bg-black border-0" />
              {schoolInfo &&
                schoolInfo.map((info, id) => {
                  return (
                    <div className="self-start" key={id}>
                      <p className="text-xl font-bold">{info.name}</p>
                      <p className="text-sm italic">{info.title}</p>
                      <p className="text-sm">
                        {info.sdate && `${info.sdate} - ${info.edate}`}
                      </p>
                    </div>
                  );
                })}
            </section>
          )}
          {experienceInfo.length > 0 && (
            <section className="flex flex-col px-7 gap-2 py-7 items-center">
              <p className="text-base font-bold w-4/5 text-center">
                Experience
              </p>
              <hr className="w-3/4 mx-auto h-1 bg-black border-0" />

              {experienceInfo &&
                experienceInfo.map((info, id) => {
                  return (
                    <div className="self-start" key={id}>
                      <p className="text-xl font-bold">{info.name}</p>
                      <p className="text-sm italic">{info.title}</p>
                      <p className="text-sm">{info.resp}</p>
                      <p className="text-sm">
                        {info.sdate && `${info.sdate} - ${info.edate}`}
                      </p>
                    </div>
                  );
                })}
            </section>
          )}
        </section>
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
