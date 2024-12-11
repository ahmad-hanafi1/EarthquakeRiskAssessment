import types from "../types";

const initialState = {
  name: "",
  address: "",
  date: "",
  numOfStories: "",
  ageOfBuilding: "",
  softStory: "",
  shortColumn: "",
  visualConstructionQuality: "",
  heavyOverhang: "",
  topographicEffect: "",
  poundingEffect: "",
  earthquakeRiskScore: "",
  riskStatus: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PAGE_ONE:
      console.log("FROM REDUCER", action.payload);
      return {
        ...state,
        name: action.payload.name,
        address: action.payload.address,
        date: action.payload.date,
      };
    case types.ADD_PAGE_TWO:
      console.log("FROM REDUCER", action.payload);
      return {
        ...state,
        ageOfBuilding: action.payload.ageOfBuilding,
        numOfStories: action.payload.numOfStories,
      };
    case types.ADD_PAGE_THREE:
      console.log("FROM REDUCER", action.payload);
      return {
        ...state,
        softStory: action.payload.softStory,
        shortColumn: action.payload.shortColumn,
        visualConstructionQuality: action.payload.visualConstructionQuality,
      };
    case types.ADD_PAGE_FOUR:
      console.log("FROM REDUCER", action.payload);
      return {
        ...state,
        poundingEffect: action.payload.poundingEffect,
        heavyOverhang: action.payload.heavyOverhang,
        topographicEffect: action.payload.topographicEffect,
      };
    case types.CALCULATE_RISK:
      console.log(action.payload);
      return {
        ...state,
        earthquakeRiskScore: action.payload.ers,
        riskStatus: action.payload.risk_status,
      };
    default:
      return state;
  }
};
