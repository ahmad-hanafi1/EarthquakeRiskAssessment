import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateRisk, setPageFourData } from "./redux/actions/pageActions";
import { useNavigate } from "react-router-dom";

const Page4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [heavyOverhang, setHeavyOverhang] = useState("");
  const [topographicEffect, setTopographicEffect] = useState("");
  const [poundingEffect, setPoundingEffect] = useState("");
  const {
    numOfStories,
    ageOfBuilding,
    softStory,
    shortColumn,
    visualConstructionQuality,
  } = useSelector((state) => state.pageData);

  useEffect(() => {
    const data = {
      num_stories: numOfStories,
      soft_story: softStory,
      heavy_overhang: heavyOverhang,
      short_column: shortColumn,
      pounding_effect: poundingEffect,
      topographic_effect: topographicEffect,
      visual_quality: visualConstructionQuality,
      age_of_building: ageOfBuilding,
    };

    if (heavyOverhang && topographicEffect && poundingEffect) {
      console.log("Reached here");
      dispatch(calculateRisk(data));
    }
  }, [heavyOverhang, topographicEffect, poundingEffect]);

  return (
    <div className="container">
      <h1>Earthquake Risk Assessment</h1>
      <form id="formPage4" onsubmit="return false;">
        <label for="heavy_overhang">Heavy Overhang:</label>
        <select
          id="heavy_overhang"
          name="heavy_overhang"
          required
          value={heavyOverhang}
          onChange={(e) => setHeavyOverhang(e.target.value)}
        >
          <option value="" disabled selected>
            -- Select --
          </option>
          <option value="presence">Presence</option>
          <option value="absence">Absence</option>
        </select>
        <br />

        <label for="topographic_effect">Topographic Effect:</label>
        <select
          id="topographic_effect"
          name="topographic_effect"
          required
          value={topographicEffect}
          onChange={(e) => setTopographicEffect(e.target.value)}
        >
          <option value="" disabled selected>
            -- Select --
          </option>
          <option value="presence">Presence</option>
          <option value="absence">Absence</option>
        </select>
        <br />

        <label for="pounding_effect">Pounding Effect:</label>
        <select
          id="pounding_effect"
          name="pounding_effect"
          required
          value={poundingEffect}
          onChange={(e) => setPoundingEffect(e.target.value)}
        >
          <option value="" disabled selected>
            -- Select --
          </option>
          <option value="presence">Presence</option>
          <option value="absence">Absence</option>
        </select>
        <br />

        <button
          type="button"
          onClick={() => {
            dispatch(
              setPageFourData({
                heavyOverhang,
                topographicEffect,
                poundingEffect,
              })
            );
            if (heavyOverhang && topographicEffect && poundingEffect) {
              navigate("/5");
            }
          }}
        >
          Calculate ERS Score
        </button>
      </form>
    </div>
  );
};

export default Page4;
