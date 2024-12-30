import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Page5 = () => {
  const data = useSelector((state) => state.pageData);
  console.log(data);
  return (
    <div className="container">
      <h1 style={{ width: "100%", minWidth: "400px" }}>Result</h1>
      <p>
        Building ID: <span style={{ fontWeight: "600" }}>{data?.name}</span>
      </p>
      <p>
        Building Address:{" "}
        <span style={{ fontWeight: "600" }}>{data?.address}</span>
      </p>
      <p>
        Date: <span style={{ fontWeight: "600" }}>{data?.date}</span>
      </p>
      <p>
        Earthquake Risk Score:{" "}
        <span style={{ fontWeight: "600" }}>{data?.earthquakeRiskScore}</span>
      </p>
      <span
        style={{
          padding: "15px 30px",
          backgroundColor:
            data?.riskStatus === "Low Risk" || data?.riskStatus === "No Risk"
              ? "green"
              : "red",
          width: "fit",
          color: "white",
          borderRadius: "10px",
        }}
      >
        {data?.riskStatus}
      </span>
      <p>
        {" "}
        <Link to={"/"} className="backLink">
          Test again
        </Link>
      </p>
    </div>
  );
};

export default Page5;
