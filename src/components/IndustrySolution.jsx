import React, { useEffect, useState, useRef } from "react";
import MainBanner from "../assets/images/industry-solution-banner.png";
import MobileBanner from "../assets/images/solution-mobile-banner.png";
import ButtonArrow from "../assets/images/button-arrow.svg";
import axios from "axios";
import Form from "./Form";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import ProductsBannerListing from "../assets/images/industrySolutionsBanner.png";
import ProductsMobileBannerListing from "../assets/images/industryMobileSolutionsBanner.png";
import { useLayoutEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const IndustrySolution = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    fetchCards();
  }, []);
  // useEffect(() => {
  //   // Scroll to the form section
  //   if (formRef.current) {
  //     formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }, [formRef]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const BaseUrl = "https://ukladmin.3mindsdigital.com";
  useEffect(() => {
    // Delay scroll to the top until after the page finishes rendering
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Delay by 100ms to ensure the DOM is rendered
  }, [location.pathname]);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   fetchCards();

  //   // Update screen width on resize
  //   const handleResize = () => setScreenWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/api/industry-solutions?populate=*`
      );
      setCards(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleMouseEnter = (index) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  const handleClickEnquiry = (title) => {
    const emailAddress = "salescso@uniklinger.com";
    const subject = `${title}'s Enquiry`;
    const body = `Hey, I wanted to know more about ${title}`;
    const mailtoUrl = `mailto:${encodeURIComponent(
      emailAddress
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  const isMobile = screenWidth <= 820;

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 2000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Helmet>
        <title>Industry Solutions</title>
        <link
          rel="canonical"
          href="https://uniklinger.com/industry-solutions"
        />
      </Helmet>
      <div
        className="  container"
        style={{ paddingTop: isMobile ? "50px" : "50px" }}
      >
        {/* <input ref={inputRef} type="text" placeholder="Avoid focus on this" /> */}

        <div
          className="banner-class relative text-center"
          itemScope
          itemType="https://schema.org/Product"
          style={{ padding: isMobile ? "20px" : "0px" }}
        >
          <img
            src={isMobile ? ProductsMobileBannerListing : ProductsBannerListing}
            alt="Safety Valves"
            className="banner-image"
            description="Safety Valves"
            itemProp="image"
          />
        </div>
        <div className="industry-card-containers">
          {cards.length === 0 ? (
            <div>No data available</div>
          ) : (
            cards.map((card, index) => (
              <div
                key={card.id}
                // className="industry-card"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                itemScope
                itemType="https://schema.org/Product"
                style={{
                  margin: isMobile ? "20px" : "5px",
                  padding: "5px",
                  border: "1px solid #a19c9c",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{}}>
                  <img
                    src={BaseUrl.concat(
                      card.attributes.Image.data.attributes.url
                    )}
                    alt={card.attributes.Title}
                    description={card.attributes.Description}
                    className="industry-image"
                    itemProp="image"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="industry-content bg-white p-20">
                  <div className="industry-title pb-20" itemProp="name">
                    {card.attributes.Title}
                  </div>
                  <div
                    className="buttons-container"
                    style={{
                      display:
                        hoverIndex === index || isMobile ? "flex" : "none",
                    }}
                    itemProp="potentialAction"
                    itemScope
                    itemType="https://schema.org/Action"
                  >
                    <a
                      className="card-button-secondary-class"
                      href={card.attributes.redirect_url}
                    >
                      <span>View More</span>
                    </a>
                    <button
                      className="card-button-class d-flex"
                      onClick={() => handleClickEnquiry(card.attributes.Title)}
                      itemProp="target"
                    >
                      <span className="pr-10">Enquire Now</span>
                      <span>
                        <img
                          src={ButtonArrow}
                          alt="arrow"
                          style={{ marginTop: "3px" }}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <Box sx={{ pt: { xs: 2, md: 6 }, pb: { xs: 2, md: 2 } }}>
          <Form />
        </Box>
      </div>
    </>
  );
};

export default IndustrySolution;
