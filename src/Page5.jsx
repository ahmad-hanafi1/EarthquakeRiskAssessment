import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Page5 = () => {
  const data = useSelector((state) => state.pageData);
  console.log(data);

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await document.getElementById("container1");
    pdf.html(data).then(() => {
      pdf.save("earthquake_score.pdf");
    });
  };
  return (
    <>
      <div className="container" id="container1">
        <h1 style={{ width: "100%", minWidth: "400px" }}>Result</h1>
        {data?.image ? (
          <img
            className="image"
            alt="not found"
            width={"250px"}
            src={data?.image ? URL.createObjectURL(data?.image) : ""}
          />
        ) : null}
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

      <div className="saveAsPDF" onClick={() => createPDF()}>
        Save as PDF
      </div>
    </>
  );
};

export default Page5;
