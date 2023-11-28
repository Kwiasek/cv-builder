import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
    },
    schoolInfo: [
      {
        name: "",
        title: "",
        sdate: "",
        edate: "",
      },
    ],
    experienceInfo: [
      {
        name: "",
        title: "",
        resp: "",
        sdate: "",
        edate: "",
      },
    ],
  },
};

export const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    setPersonalInfo(state, action) {
      switch (action.payload.type) {
        case "name":
          state.value.personalInfo.name = action.payload.value;
          break;
        case "email":
          state.value.personalInfo.email = action.payload.value;
          break;
        case "phone":
          state.value.personalInfo.phone = action.payload.value;
          break;
        case "location":
          state.value.personalInfo.location = action.payload.value;
          break;
        default:
          return state;
      }
    },
    addSchoolInfo(state) {
      state.value.schoolInfo.push({
        name: "",
        title: "",
        sdate: "",
        edate: "",
      });
    },
    deleteSchoolInfo(state, action) {
      const newSchoolInfo = state.value.schoolInfo.filter(
        (schoolInfo, id) => id != action.payload
      );
      state.value.schoolInfo = newSchoolInfo;
    },
    setSchoolInfo(state, action) {
      switch (action.payload.type) {
        case "name":
          state.value.schoolInfo[action.payload.id].name = action.payload.value;
          break;
        case "title":
          state.value.schoolInfo[action.payload.id].title =
            action.payload.value;
          break;
        case "sdate":
          state.value.schoolInfo[action.payload.id].sdate =
            action.payload.value;
          break;
        case "edate":
          state.value.schoolInfo[action.payload.id].edate =
            action.payload.value;
          break;
        default:
          return state;
      }
    },
    addExperienceInfo(state) {
      state.value.experienceInfo.push({
        name: "",
        title: "",
        resp: "",
        sdate: "",
        edate: "",
      });
    },
    deleteExperienceInfo(state, action) {
      const newExperienceInfo = state.value.experienceInfo.filter(
        (experienceInfo, id) => id != action.payload
      );
      state.value.experienceInfo = newExperienceInfo;
    },
    setExperienceInfo(state, action) {
      switch (action.payload.type) {
        case "name":
          state.value.experienceInfo[action.payload.id].name =
            action.payload.value;
          break;
        case "title":
          state.value.experienceInfo[action.payload.id].title =
            action.payload.value;
          break;
        case "resp":
          state.value.experienceInfo[action.payload.id].resp =
            action.payload.value;
          break;
        case "sdate":
          state.value.experienceInfo[action.payload.id].sdate =
            action.payload.value;
          break;
        case "edate":
          state.value.experienceInfo[action.payload.id].edate =
            action.payload.value;
          break;
        default:
          return state;
      }
    },
  },
});

export default cvSlice.reducer;
export const {
  setPersonalInfo,
  addSchoolInfo,
  deleteSchoolInfo,
  setSchoolInfo,
  addExperienceInfo,
  deleteExperienceInfo,
  setExperienceInfo,
} = cvSlice.actions;
