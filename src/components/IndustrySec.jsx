import React from "react";
import "./IndustrySec.css";
import { useNavigate } from "react-router-dom";
import ButtonArrow from "../assets/images/button-arrow.svg";

const IndustrySec = ({ industryData }) => {
  const navigate = useNavigate();
  const BaseUrl = "https://ukladmin.3mindsdigital.com";

  return (
    <div className="flex w-[100%] mb-[100px]">
      <div
        className="flex flex-col justify-start"
        style={{ height: "600px", maxHeight: "600px" }}
      >
        <h1 className="flex justify-start text-6xl poppins">
          <span className="font-semibold poppins mr-[8px]">Solutions</span>{" "}
          Industry Wise
        </h1>

        <div>
          <div className="border relative border-[#CFCCC4] p-4">
            <img
              src={BaseUrl.concat(
                industryData?.attributes?.Image?.data?.attributes?.url
              )}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(50%)", // Adjust brightness for a dull effect
              }}
              alt="industry images"
            />
            <div className="absolute bottom-[30px] left-[40px]">
              <div className="carousel-solution-title">
                {industryData?.attributes?.Title}
              </div>
            </div>
          </div>
          <div className="carousel-solution-description">
            {industryData?.attributes?.Description}
          </div>
          <a
            href={industryData?.attributes?.redirect_url}
            className="card-button-class d-flex items-baseline"
            style={{ marginTop: "20px", padding: "18px 40px" }}
          >
            <span className="discoverNow mr-5">Discover Now</span>
            <span>
              <img src={ButtonArrow} alt="arrow" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndustrySec;
