export const changeInfo = (e, infoSetter) => {
  infoSetter((prevInfo) => ({ ...prevInfo, [e.target.name]: e.target.value }));
};
