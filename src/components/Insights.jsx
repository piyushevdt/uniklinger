import React, { useEffect, useState } from "react";
import MainBanner from "../assets/images/industry-solution-banner.png";
import MobileBanner from "../assets/images/solution-mobile-banner.png";
import ButtonArrow from "../assets/images/button-arrow.svg";
import axios from "axios";
import Form from "./Form";
import { Helmet } from "react-helmet-async";
import { IoArrowForward } from "react-icons/io5";
import MobileProductBanner from "../assets/images/InsightNobileBanner.svg";
import ProductsBanner from "../assets/images/InsightsBanner.png";
import BlogImage from "../assets/images/Blog.png";
import Watermark from "../assets/images/new-watermark.png";
import Share from "../assets/images/Share.png";
import BlogIndustry from "../assets/images/card1.png";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
const Insights = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const BaseUrl = "https://ukladmin.3mindsdigital.com";

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCards();

    // Update screen width on resize
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/blogs?populate=*`);
      setCards(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  console.log(cards);

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
  const shouldShowButtons = hoverIndex !== null || isMobile;

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
        <title>Blogs</title>
        <link
          rel="canonical"
          href="https://uniklinger.com/industry-solutions"
        />
      </Helmet>
      <div
        className="container flex flex-col"
        style={{ paddingTop: isMobile ? "100px" : 0 }}
      >
        <div
          className="banner"
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          <img
            src={isMobile ? MobileProductBanner : ProductsBanner}
            alt="Industry Solutions"
            description="Industry Solutions"
            className="banner-image"
            itemProp="image"
          />
        </div>
        {cards
          .filter((card) => card.id === 101)
          .map((card, index) => (
            <div
              key={index}
              className="product-cards-container "
              style={{ margin: isMobile ? "10px" : "0px" }}
            >
              <div
                style={{ height: isMobile ? "auto" : "auto" }}
                className=" product-card mt-30 bg-white "
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="col-md-4 p-0">
                  <img
                    src={BaseUrl.concat(
                      card?.attributes?.image?.data?.[0]?.attributes?.url
                    )}
                    style={{ height: "100%" }}
                    className="banner-image p-5"
                    itemProp="image"
                  />
                </div>
                <div
                  className="col-md-8 card-padding "
                  style={{
                    backgroundImage: `url(${Watermark})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "130%",
                  }}
                >
                  <div className=" flex flex-row pb-10 justify-between">
                    <div className=" flex flex-row">
                      <div
                        style={{
                          backgroundColor: "#D4DDE7",
                          color: "#221F20AB",
                        }}
                        className="blogTags "
                        itemProp="name"
                      >
                        {card?.attributes?.type}
                      </div>
                      <div
                        style={{
                          backgroundColor: "#221F200F",
                          color: "#221F20AB",
                        }}
                        className="blogTags ml-2"
                        itemProp="name"
                      >
                        {card?.attributes?.read} min Read
                      </div>
                    </div>

                    <div>
                      <img style={{ height: 31, width: 31 }} src={Share} />
                    </div>
                  </div>
                  <div className="product-card-title " itemProp="name">
                    {card?.attributes?.title}
                  </div>
                  <div className="poppins pt-20" style={{ fontSize: 14 }}>
                    19 Feb, 2023
                  </div>

                  <div
                    className="product-card-subtitle pt-20"
                    itemProp="description"
                  >
                    Uni Klinger manufactures a wide range of fluid control
                    products like Piston Valves, Bellow Seal Valves, Steam
                    Traps, etc. They focus on providing unique solutions that
                    address shortcomings in existing products.
                  </div>

                  <div
                    className="buttons-container  d-flex"
                    style={{ paddingTop: isMobile ? "50px" : "100px" }}
                  >
                    <div>
                      <button
                        className="button-class d-flex"
                        itemProp="url"
                        onClick={() =>
                          navigate(`/insights/${card?.attributes?.slug}`, {
                            state: { blogId: card.id },
                          })
                        }
                      >
                        <span className="button-arrow-padding">
                          Read the Story{" "}
                        </span>
                        <span>
                          <img
                            src={ButtonArrow}
                            alt="arrow"
                            description="arrow"
                            className="mt-8"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className="industry-card-containers">
          {cards.length === 0 ? (
            <div>No data available</div>
          ) : (
            cards
              .filter((card) => card.id !== 101)
              .map((card, index) => (
                <div
                  key={card.id}
                  // style={{height:334}}
                  // className="industry-card"
                  style={{
                    height: "100%",
                    marginLeft: isMobile ? "10px" : "0px",
                    marginRight: isMobile ? "10px" : "0px",
                    marginTop: isMobile ? "5px" : "0px",
                    marginBottom: isMobile ? "5px" : "0px",
                    padding: "5px",
                    border: "1px solid #a19c9c",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  itemScope
                  itemType="https://schema.org/Product"
                >
                  <div>
                    <img
                      src={BaseUrl.concat(
                        card?.attributes?.image?.data?.[0]?.attributes?.url
                      )}
                      style={{ height: isMobile ? "100%" : 250, width: "100%" }}
                      alt={card.attributes.title}
                      description={card.attributes.description}
                      className="industry-image"
                      itemProp="image"
                    />
                  </div>
                  <div className="industry-content bg-white p-[10px] flex flex-col justify-between">
                    <div className=" flex flex-row pb-10 ">
                      <div
                        style={{
                          backgroundColor: "#D4DDE7",
                          color: "#221F20AB",
                        }}
                        className="blogTags "
                        itemProp="name"
                      >
                        {card?.attributes?.type}
                      </div>
                      <div
                        style={{
                          backgroundColor: "#221F200F",
                          color: "#221F20AB",
                        }}
                        className="blogTags ml-2"
                        itemProp="name"
                      >
                        {card?.attributes?.read} min Read
                      </div>
                    </div>

                    {/* <div
                    className="blog-description pb-10 overflow-hidden text-ellipsis"
                    itemProp="description"
                  >
                    {card?.attributes?.description}
                  </div> */}
                    <div className="blog-description h-[50px] origin-bottom overflow-hidden text-ellipsis">
                      {" "}
                      {card?.attributes?.title}
                    </div>

                    <div className="flex flex-row justify-between origin-bottom items-baseline">
                      <div className="poppins" style={{ fontSize: 14 }}>
                        {card?.attributes?.createdDate}
                      </div>
                      <div>
                        <div
                          onClick={() => {
                            navigate(`/insights/${card?.attributes?.slug}`, {
                              state: { blogId: card.id },
                            });
                          }}
                          className="md:mt-[0px] mt-5 d-flex items-center"
                          style={{ cursor: "pointer" }}
                        >
                          <a
                            title="Blog Details"
                            className="dmsans font-semibold text-black text-[14px] origin-bottom md:text-[16px] m-2 md:pt-3"
                          >
                            Read the story
                          </a>
                          <IoArrowForward className="text-black md:m-2 origin-bottom -rotate-45 size-5 md:size-8" />
                        </div>
                        <div
                          className="gradLine"
                          style={{
                            marginLeft: 7,
                            width: "120px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
};

export default Insights;
