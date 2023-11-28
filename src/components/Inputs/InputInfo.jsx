import {
  addExperienceInfo,
  addSchoolInfo,
  deleteExperienceInfo,
  deleteSchoolInfo,
  setExperienceInfo,
  setPersonalInfo,
  setSchoolInfo,
} from "../../state/cvSlice";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const InputInfo = () => {
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
              dispatch(setPersonalInfo({ type: "name", value: e.target.value }))
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
  );
};

export default InputInfo;
