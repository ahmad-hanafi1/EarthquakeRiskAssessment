import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setPageOneData } from "./redux/actions/pageActions";
import { useDispatch } from "react-redux";

const Page1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="container">
      <h1>Earthquake Risk Assessment </h1>
      <form id="formPage1" onsubmit="return false;">
        <label for="building_name">Building Name:</label>
        <input
          type="text"
          id="building_name"
          name="building_name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label for="building_address">Building Address:</label>
        <input
          type="text"
          id="building_address"
          name="building_address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />

        <label for="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />

        <label for="photo">Upload Photo:</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={(event) => {
            console.log(event.target.files[0]); // Log the selected file
            setSelectedImage(event.target.files[0]); // Update the state with the selected file
          }}
        />
        <br />

        <button
          onClick={() => {
            dispatch(setPageOneData({ name, date, address, selectedImage }));
            navigate("2");
          }}
          type="button"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Page1;
