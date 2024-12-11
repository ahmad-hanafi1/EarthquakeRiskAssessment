import axios from "axios";
import types from "../types";

export const setPageOneData = (data) => (dispatch) => {
  dispatch({
    type: types.ADD_PAGE_ONE,
    payload: data,
  });
};
export const setPageTwoData = (data) => (dispatch) => {
  dispatch({
    type: types.ADD_PAGE_TWO,
    payload: data,
  });
};

export const setPageThreeData = (data) => (dispatch) => {
  dispatch({
    type: types.ADD_PAGE_THREE,
    payload: data,
  });
};

export const setPageFourData = (data) => (dispatch) => {
  dispatch({
    type: types.ADD_PAGE_FOUR,
    payload: data,
  });
};

export const calculateRisk = (data) => (dispatch) => {
  console.log("data:", data);
  const sr_values = {
    1: [-5, -5, -5, 0, 0, -5, 0, 0, -3, -5, -10],
    2: [-5, -5, -5, 0, 0, -5, 0, 0, -3, -5, -10],
    3: [-5, -5, -5, 0, 0, -5, 0, 0, -3, -5, -10],
    4: [-10, -10, -5, -2, 0, -5, 0, 0, -10, -15, -15],
    5: [-10, -10, -5, -2, 0, -5, 0, 0, -10, -15, -15],
    6: [-15, -15, -5, -3, 0, -10, 0, 0, -15, -20, -25],
    7: [-20, -15, -10, -5, -2, -10, 0, -3, -20, -25, -30],
    8: [-25, -20, -10, -5, -2, -15, 0, -5, -25, -30, -35],
  };

  const get_base_score = (num_stories) => {
    if ([1, 2, 3].includes(num_stories)) return 130;
    else if ([4, 5].includes(num_stories)) return 120;
    else if (num_stories === 6) return 110;
    else if (num_stories == 7) return 100;
    else return 90;
  };

  const get_score_reduction = (
    num_stories,
    soft_story,
    heavy_overhang,
    short_column,
    pounding_effect,
    topographic_effect,
    visual_quality,
    age_of_building
  ) => {
    let score_reduction = 0;

    let sr_keys = [1, 2, 3, 4, 5, 6, 7, 8];
    const story_key =
      typeof num_stories !== "number" ? 8 : sr_keys[num_stories - 1];
    const vpm = {
      presence: 1,
      absence: 0,
      good: 0,
      moderate: 1,
      poor: 2,
      1975: sr_values[story_key][10],
      "1976-1996": sr_values[story_key][9],
      "1997-1999": sr_values[story_key][8],
      "2000-2006": sr_values[story_key][7],
      "2007-": sr_values[story_key][6],
    };

    score_reduction += sr_values[story_key][0] * vpm[soft_story];
    score_reduction += sr_values[story_key][1] * vpm[heavy_overhang];
    score_reduction += sr_values[story_key][2] * vpm[short_column];
    score_reduction += sr_values[story_key][3] * vpm[pounding_effect];
    score_reduction += sr_values[story_key][4] * vpm[topographic_effect];
    score_reduction += sr_values[story_key][5] * vpm[visual_quality];
    score_reduction += vpm[age_of_building];

    return score_reduction;
  };

  const calculate_ers = (
    num_stories,
    soft_story,
    heavy_overhang,
    short_column,
    pounding_effect,
    topographic_effect,
    visual_quality,
    age_of_building
  ) => {
    const base_score = get_base_score(num_stories);

    const score_reduction = get_score_reduction(
      num_stories,
      soft_story,
      heavy_overhang,
      short_column,
      pounding_effect,
      topographic_effect,
      visual_quality,
      age_of_building
    );

    console.log("score_reduction: ", score_reduction);
    console.log("base_score: ", base_score);
    return base_score + score_reduction;
  };

  const determine_risk_status = (ers) => {
    if (ers < 30) return "High Risk";
    else if (ers < 70 && ers >= 30) return "Moderate Risk";
    else if (70 <= ers && ers < 100) return "Low Risk";
    else return "No Risk";
  };
  const num_stories = isNaN(data["num_stories"])
    ? data["num_stories"]
    : Number(data["num_stories"]);
  const soft_story = data["soft_story"].toLowerCase();
  const heavy_overhang = data["heavy_overhang"].toLowerCase();
  const short_column = data["short_column"].toLowerCase();
  const pounding_effect = data["pounding_effect"].toLowerCase();
  const topographic_effect = data["topographic_effect"].toLowerCase();
  const visual_quality = data["visual_quality"].toLowerCase();
  const age_of_building = data["age_of_building"].toLowerCase();

  // Calculate ERS and determine risk status
  const ers = calculate_ers(
    num_stories,
    soft_story,
    heavy_overhang,
    short_column,
    pounding_effect,
    topographic_effect,
    visual_quality,
    age_of_building
  );
  console.log("ers: ", ers, typeof ers);
  const risk_status = determine_risk_status(ers);

  const res = {
    ers,
    risk_status,
  };
  // {
  //     "num_stories": "4",
  //     "soft_story": "absence",
  //     "heavy_overhang": "absence",
  //     "short_column": "presence",
  //     "pounding_effect": "presence",
  //     "topographic_effect": "absence",
  //     "visual_quality": "presence",
  //     "age_of_building": "1976-1996"
  // }
  dispatch({
    type: types.CALCULATE_RISK,
    payload: res,
  });
};
