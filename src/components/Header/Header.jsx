import { useState } from "react";
import Input from "../Input/Input";
import Reset from "../Buttons/Reset";
import Save from "../Buttons/Save";

const Header = () => {
  const defaultUserInfo = {
    name: "Adam",
    email: "youremail@example.com",
    phone: "111 111 111",
    location: "Lodz, Poland",
  };
  const resetUserInfo = {
    name: "",
    email: "",
    phone: "",
    location: "",
  };

  const [edit, setEdit] = useState(false);
  const [info, setInfo] = useState(defaultUserInfo);

  const detailsArr = [
    { name: "name", placeholder: "Name", type: "text" },
    { name: "email", placeholder: "Email", type: "email" },
    { name: "phone", placeholder: "Phone", type: "phone" },
    { name: "location", placeholder: "Location", type: "text" },
  ];

  return (
    <>
      <div>
        {edit ? (
          <>
            {detailsArr.map((input) => (
              <Input
                key={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                infoGetter={info}
                infoSetter={setInfo}
              />
            ))}
            <Reset blankInfo={resetUserInfo} infoSetter={setInfo} />
            <Save editSetter={setEdit}>Save</Save>
          </>
        ) : (
          <>
            <p>{info.name}</p>
            <p>{info.email}</p>
            <p>{info.phone}</p>
            <p>{info.location}</p>
            <Save editSetter={setEdit}>Edit</Save>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
