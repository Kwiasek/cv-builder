import { useSelector } from "react-redux";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillPhone } from "react-icons/ai";

const ShowcaseCV = () => {
  const cv = useSelector((state) => state.value);
  const personalInfo = cv.personalInfo;
  const schoolInfo = cv.schoolInfo;
  const experienceInfo = cv.experienceInfo;

  return (
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
          <p className="text-base font-bold w-4/5 text-center">Experience</p>
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
  );
};

export default ShowcaseCV;
