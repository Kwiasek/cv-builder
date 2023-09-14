import { useState } from "react";

const Header = () => {
  const defaultUserInfo = {
    name: "Adam",
    email: "youremail@example.com",
    phone: "111 111 111",
  };
  const resetUserInfo = {
    name: "",
    email: "",
    phone: "",
  };

  const [edit, setEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  const handleResetUserInfo = () => {
    setUserInfo(resetUserInfo);
  };

  const handleToggleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  const handleChangeUserInfo = (e) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section>
        {edit ? (
          <>
            <input
              type="name"
              name="name"
              placeholder="Name"
              onChange={handleChangeUserInfo}
              value={userInfo.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChangeUserInfo}
              value={userInfo.email}
            />
            <input
              type="phone"
              name="phone"
              placeholder="Phone"
              onChange={handleChangeUserInfo}
              value={userInfo.phone}
            />
            <button onClick={handleResetUserInfo}>Reset</button>
            <button onClick={handleToggleEdit}>Save</button>
          </>
        ) : (
          <>
            <p>{userInfo.name}</p>
            <p>{userInfo.email}</p>
            <p>{userInfo.phone}</p>
            <button onClick={handleToggleEdit}>Edit</button>
          </>
        )}
      </section>
    </>
  );
};

export default Header;
