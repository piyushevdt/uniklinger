import React, { useEffect, useState } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import IndustrySec from "./IndustrySec";
import axios from "axios";
import ChemicalPetrochemical from "../assets/images/ChemicalIndustry.svg";
import Pharmaceutical from "../assets/images/PharmaIndustry.svg";
import Rubber from "../assets/images/RubberIndustry.svg";
import Soap from "../assets/images/SoapIndustry.svg";
import Brewery from "../assets/images/BreweryIndustry.svg";
import AeratedConcreteBlock from "../assets/images/AeratedConcreteBlock.svg";
import Textiles from "../assets/images/TextileIndustry.svg";
import TyreManufacturing from "../assets/images/TyreIndustry.svg";

const SolutionsCarousel = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [focusElement, setFocusElement] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const BaseUrl = "https://ukladmin.3mindsdigital.com";
  const images = [
    Pharmaceutical,
    ChemicalPetrochemical,
    Textiles,
    TyreManufacturing,
    AeratedConcreteBlock,
    Brewery,
    Rubber,
  ];

  const allowedIds = [1, 4, 14, 15, 16, 17, 20];

  // Fetching data
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/api/industry-solutions?populate=*`
        );
        const fetchedData = response.data.data;
        // Filter data based on allowed IDs
        const filtered = fetchedData.filter((item) =>
          allowedIds.includes(item.id)
        );
        setData(fetchedData);
        setFilteredData(filtered);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setScreenWidth(entry.contentRect.width);
      }
    });
    resizeObserver.observe(document.body);
  }, []);

  useEffect(() => {
    let buttons = document.querySelectorAll(".fancy-carousel-navigation-button");
    buttons.forEach((button) => {
      button.innerHTML = `<i class="fas fa-chevron-down"></i>`;
    });
    let carouselElements = document.querySelectorAll(".fancy-carousel-element");
    carouselElements.forEach((element, index) => {
      if (index === focusElement) {
        element.children[0].style.filter = "none";
      } else {
        element.children[0].style.filter = "grayscale(100%)";
      }
    });
  }, [focusElement]);

  return (
    <div
      style={screenWidth < 820 ? { display: "none" } : { position: "relative" }}
      className="container md:mt-[50px] md:mb-[50px] lg:mb-[50px]"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20rem",
        }}
        className="carousel-section col-md-12"
      >
        <div
          style={{
            order: 2,
            display: "flex",
            justifyContent: "center",
            marginTop: "-100px",
          }}
          className="col-md-6"
        >
          <FancyCarousel
            images={images}
            carouselRadius={200}
            peripheralImageRadius={60}
            centralImageRadius={0}
            setFocusElement={setFocusElement}
            focusElementStyling={{}}
            borderWidth={0}
            borderHexColor={"808080"}
          />
        </div>

        <div style={{ order: 1 }} className="info-box-wrapper col-md-6">
          <div>
            {filteredData.length > 0 && (
              <IndustrySec industryData={filteredData[focusElement]} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsCarousel;
