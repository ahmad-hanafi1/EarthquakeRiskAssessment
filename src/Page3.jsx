import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPageThreeData } from "./redux/actions/pageActions";

const Page3 = () => {
  const navigate = useNavigate();
  const { numOfStories } = useSelector((state) => state.pageData);
  const dispatch = useDispatch();
  const [softStory, setSoftStory] = useState("");
  const [shortColumn, setshortColumn] = useState("");
  const [visualConstructionQuality, setVisualConstructionQuality] =
    useState("");

  return (
    <div className="container">
      <h1>Earthquake Risk Assessment </h1>

      {/* <!-- Form for selecting soft story presence or absence --> */}
      <form id="formSoftStory" onSubmit={() => false}>
        <label for="soft_story">Soft Story:</label>
        <select
          id="soft_story"
          name="soft_story"
          required
          value={softStory}
          onChange={(e) => setSoftStory(e.target.value)}
        >
          <option value="" disabled selected>
            -- Select --
          </option>
          <option value="presence">Presence</option>
          <option value="absence">Absence</option>
        </select>
        <br />
      </form>

      <form id="visualConstructionQuality" onSubmit={() => false}>
        <label for="visual_construction-quality">
          Visual Construction Quality:
        </label>
        <select
          id="visual_construction-quality"
          name="visual_construction-quality"
          required
          value={visualConstructionQuality}
          onChange={(e) => setVisualConstructionQuality(e.target.value)}
        >
          <option value="" disabled selected>
            -- Select --
          </option>
          <option value="presence">Good</option>
          <option value="absence">Moderate</option>
          <option value="absence">Poor</option>
        </select>
        <br />
      </form>

      {/* <!-- Form for selecting short column presence or absence --> */}
      <form id="formShortColumn">
        <label for="short_column">Short Column:</label>
        <select
          id="short_column"
          name="short_column"
          required
          value={shortColumn}
          onChange={(e) => setshortColumn(e.target.value)}
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
              setPageThreeData({
                shortColumn,
                softStory,
                visualConstructionQuality,
              })
            );
            navigate("/4");
          }}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Page3;
