import { useState } from "react";
import Input from "../Input/Input";
import Reset from "../Buttons/Reset";

const Header = ({ onSave }) => {
  const resetUserInfo = {
    name: "",
    email: "",
    phone: "",
    location: "",
  };
  const defaultUserInfo = {
    name: "Adam Kwiasowski",
    email: "kwiasekkwiasek@gmail.com",
    phone: "518 644 263",
    location: "Lodz, Poland",
  };
  const [info, setInfo] = useState(defaultUserInfo);

  const handleSave = () => {
    onSave(info);
  };

  return (
    <>
      <p className="self-start font-bold">Personal Information</p>
      <div className="flex flex-col gap-3 w-4/5 mt-3">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          infoGetter={info}
          infoSetter={setInfo}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          infoGetter={info}
          infoSetter={setInfo}
        />
        <Input
          type="phone"
          name="phone"
          placeholder="Phone"
          infoGetter={info}
          infoSetter={setInfo}
        />
        <Input
          type="text"
          name="location"
          placeholder="Location"
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
          <Reset blankInfo={resetUserInfo} infoSetter={setInfo} />
        </div>
      </div>
    </>
  );
};

export default Header;
