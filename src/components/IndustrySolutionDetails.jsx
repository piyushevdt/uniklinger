import React, { useEffect, useState } from "react";
import ButtonArrow from "../assets/images/button-arrow.svg";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import Slider from "react-slick";
import Next from "../assets/images/nextArrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customDots.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { SwiperSlide } from "swiper/react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        zIndex: 99,
        height: 64,
        width: 64,
        borderRadius: 100,
        borderColor: " rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        top: "50%",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", // Added box shadow
        marginRight: "30px",
      }}
      onClick={onClick}
    >
      <img
        style={{
          position: "absolute",
          top: 21,
          left: 26,
        }}
        src={Next}
      />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        zIndex: 99,
        height: 64,
        width: 64,
        borderRadius: 100,
        // left: -25,
        marginLeft: "30px",
        top: "50%",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", // Added box shadow
      }}
      onClick={onClick}
    >
      <img
        style={{
          position: "absolute",
          top: 21,
          left: 24,
        }}
        className="rotate-180 "
        src={Next}
      />
    </div>
  );
};
const IndustrySolutionDetails = () => {
  const { slug } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [cards, setCards] = useState();
  const [activeSlide, setActiveSlide] = useState(0);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const settings = {
    dots: false,
    customPaging: (i) => (
      <div className="custom-dot">
        <div className={`dot ${i === activeSlide ? "active" : ""}`}></div>
      </div>
    ),
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    // centerMode: true,
    nextArrow: isMobile ? null : <NextArrow />,
    prevArrow: isMobile ? null : <PrevArrow />,
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 768, // Mobile devices
        settings: {
          dots: true,
          customPaging: (i) => (
            <div className="custom-dot">
              <div className={`dot ${i === activeSlide ? "active" : ""}`}></div>
            </div>
          ),
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
          centerPadding: "20px",
          // centerMode: true,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1280, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getData();
  }, [slug]);

  const BaseUrl = "https://ukladmin.3mindsdigital.com";

  const getData = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/api/solution-details?filters[slug][$eq]=${slug}&populate[IndustryBanner]=*&populate[mainBanner]=*&populate[innovatorBanner]=*&populate[mobileMainBanner]=*&populate[USP][populate]=*`
      );
      setCards(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 2000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  const IndustrySolutionMetaData = {
    "pharma-industry": {
      title: "Manufacturers Of Fluid Control & Fluid Sealing Solutions For The Pharmaceutical Industry",
      description: "Uni Klinger Limited, as one of the trusted manufacturers of fluid control & fluid sealing solutions for the pharmaceutical industry. Visit us at uniklinger.com!",
    },
    "chemical-petrochemical-plants-industry": {
      title: "Design And Manufacturer Of Chemical And Petrochemical Industry",
      description: "UKL designs and manufactures high-performance solutions for a wide range of chemical and petrochemical processing applications. Visit us at uniklinger.com!",
    },
    "textiles-industry": {
      title: "Steam Engineering & Sealing Technologies And Solutions For Textile Industry",
      description: "Uni Klinger provides steam & sealing solutions for all textile processes, enhancing efficiency, equipment life, and reducing maintenance costs. Visit at uniklinger.com!",
    },
    "tyre-manufacturing-industry": {
      title: "Fluid Control And Fluid Sealing Solutions For Tyre Industry",
      description: "Uni Klinger partners with the tire industry to provide fluid control & sealing solutions, ensuring safety, reliability, & lower operational costs. Visit at uniklinger.com!",
    },
    "aerated-block-industry": {
      title: "Aerated Block Industry Innovators & Supplier - Uni Klinger",
      description: "We, at UNI KLINGER can supply various products like Steam trap, Piston valve for steam, Pressure reducing station, Flash vessel and other products. Visit at uniklinger.com!",
    },
    "brewery-industry": {
      title: "Brewery Industry Innovators & Supplier - Uni Klinger",
      description: "By enhancing efficiency, reliability, and quality, Uni Klinger's product range is essential for maintaining smooth, uninterrupted brewery operations. Visit at uniklinger.com!",
    },
    "rice-industry": {
      title: "Manufacturer Of Rice Industry Innovators - Uni Klinger",
      description: "We, at Uni Klinger delivers our automatic pumping trap, steam trap, pressure reducing station, valves, gaskets & more in the Rice industry. Visit at uniklinger.com!",
    },
    "captive-cogen-industry": {
      title: "Captive Cogen Industry Innovators | Captive Cogen Plants - Uni Klinger",
      description: "We offer advanced solutions for Captive Cogen plants with industry expertise and a commitment to environmental sustainability. Visit us at uniklinger.com!",
    },
    "rubber-industry": {
      title: "Rubber Industry Innovators - Uni Klinger",
      description: "Uni Klinger's steam traps, valves, and pressure regulators ensure precise control for uniform curing and molding, critical for high-quality rubber products.",
    },
    "soap-industry": {
      title: "Soap Industry Innovators - Uni Klinger",
      description: "Saponification is the process of making soap from fatty acids. Uni Klinger supplies steam engineering accessories for evaporators & related applications. Visit us at uniklinger.com!",
    },
    "dairy-industry": {
      title: "Steam Engineering & Sealing Solutions For Dairy Industry",
      description: "Uni Klinger Steam Engineering & sealing solutions offer high performance in Dairy, food, and beverage, ensuring product integrity, traceability, safety, and less downtime.",
    },
    "sugar-industry": {
      title: "Sugar Industry Innovators - Uni Klinger",
      description: "Uni Klinger has an expertise in product required for sugar industry. Our products has a proven track record in sugar industry for many years. Visit us at uniklinger.com!",
    },
    "edible-oil-industry": {
      title: "Edible Oil Industry Innovators - Uni Klinger",
      description: "Uni Klinger has decades of experience and a proven track record as a preferred and trusted partner for the edible oil industry. Visit us at uniklinger.com!",
    },
    "fertilizer-industry": {
      title: "Fertilizer Industry Innovators - Uni Klinger",
      description: "Uni Klinger has a products in range which are durable, reliable, high-performing and proven in the fertilizer industry. Visit the website at uniklinger.com!",
    },
    "hotel-industry": {
      title: "Hotel Industry Innovators - Uni Klinger",
      description: "Uni Klinger deliver complete steam engineering solutions that improve productivity and safety while reducing downtime & operational costs. Visit at uniklinger.com!",
    },
  };

  const MetaData = IndustrySolutionMetaData[slug] || {
    title: "Industry Solutions Details",
    description: "Explore our industry solutions tailored to your business.",
  };

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
    <Box sx={{ px: { xs: 2, md: 0 } }}>
      <Helmet>
        <title>{MetaData.title}</title>
        <meta
          name="description"
          content={MetaData.description}
        />
      </Helmet>
      <div className="container mt-[100px]">
        <div className="">
          <img
            src={
              screenWidth > 768 &&
              cards?.[0]?.attributes?.mainBanner?.data?.attributes?.url
                ? BaseUrl.concat(
                    cards?.[0]?.attributes?.mainBanner?.data?.attributes?.url
                  )
                : BaseUrl.concat(
                    cards?.[0]?.attributes?.mobileMainBanner?.data?.attributes
                      ?.url || ""
                  )
            }
            alt="banner"
            className="banner-image"
            itemScope
            itemType="https://schema.org/ImageObject"
            itemProp="image"
          />
        </div>
        <div className="pt-50 flex details-container">
          <div className="details-image-container w-2/5">
            <img
              src={BaseUrl.concat(
                cards?.[0]?.attributes?.innovatorBanner?.data?.attributes?.url
              )}
              alt="pharma-solution"
              className="w-full h-full"
              itemScope
              itemType="https://schema.org/ImageObject"
              itemProp="image"
            />
          </div>
          <div
            className="details-content-container w-3/5 ml-[40px] mr-[40px]"
            itemScope
            itemType="https://schema.org/Article"
          >
            <h1 className="details-title pb-20" itemProp="headline">
              {cards?.[0]?.attributes?.title} Innovators
            </h1>
            <div className="details-description" itemProp="articleBody">
              {cards?.[0]?.attributes?.description}
            </div>
            <div className="pt-20">
              <button
                className="button-class flex items-center justify-center"
                itemProp="potentialAction"
                itemScope
                itemType="https://schema.org/Action"
              >
                <span className="pr-2" itemProp="name">
                  Enquire Now
                </span>
                <span>
                  <img src={ButtonArrow} alt="arrow" className="ml-2" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-50 flex">
          <div className="relative mobileHide">
            <img
              src={BaseUrl.concat(
                cards?.[0]?.attributes?.IndustryBanner?.data?.attributes?.url
              )}
              alt="video-section"
              // className="w-full"
              itemScope
              itemType="https://schema.org/VideoObject"
              itemProp="video"
              style={{ width: "100%", height: "100%" }}
            />
            <div
              style={{
                backgroundColor: "#00000061",
                width: "25%",
                height: "auto",
                padding: "15px",
              }}
              className="absolute text-white top-[40%]  left-[5%] poppins  text-[14px]"
              itemProp="name"
            >
              <div className="poppins text-[24px] font-bold">
                Process Of Industry
              </div>
              {cards?.[0]?.attributes?.processOfInddustry}
            </div>
          </div>
        </div>
        <div
          style={{
            paddingTop: isMobile ? "20px" : "50px",
            paddingBottom: isMobile ? 0 : "30px",
            marginBottom: isMobile ? "20px" : 0,
          }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ fontSize: { xs: "20px", md: "35px" }, marginBottom: 3, padding: 0 }}
          >
            <span style={{ fontWeight: "bold", paddingRight: 2 }}>
              Our USP’s In
            </span>
            <span style={{ fontFamily: "poppins", fontWeight: 400 }}>
              {" "}
              {cards?.[0]?.attributes?.title}
            </span>
          </Typography>
          {cards?.[0]?.attributes?.USP?.length > 0 ? (
            <Slider
              {...settings}
              style={{
                paddingBottom: isMobile ? "100px" : "160px",
                overflow: isMobile ? "visbile" : "hidden",
              }}
            >
              {cards?.[0]?.attributes?.USP?.map((usp, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      // width: isMobile ? "95%" : 358,
                      width: {xs: "95%", lg: "95%", xl: "90%"},
                      height: isMobile ? "100%" : "100%",
                      margin: "auto",
                      border: "2px solid rgba(0, 0, 0, 0.1)",
                      padding: 1,
                    }}
                  >
                    <
                      // sx={{ display: "flex", flexDirection: "column", }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          // objectFit: isMobile? "fill": "cover",
                          height: isMobile ? "100%" : "100%",
                          width: isMobile ? "100%" : "100%",
                          // padding: 1,
                        }}
                        image={BaseUrl.concat(
                          usp?.image1?.data?.[0]?.attributes?.url
                        )}
                        alt={`USP-${index + 1}`}
                      />
                      <CardContent
                        sx={{
                          // height: "calc(100% - 320px)",
                          background: "#E7ECF4",
                          // border: "1px solid rgba(0, 0, 0, 0.1)",
                          padding: isMobile ? 1 : 3,
                          height: {xs: "115px",md: "160px", xl: "130px"},

                        }}
                      >
                        <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: {xs: "12px", md: "16px"} }}>
                          {usp?.title1}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: {xs: "12px",md:"14px"},
                            color: "#2A2A2A",
                            // marginTop: {xs: 0, md: 0.5},
                          }}
                        >
                          {usp?.description1}
                        </Typography>
                      </CardContent>
                    </>
                  </Card>
                </SwiperSlide>
              ))}
            </Slider>
          ) : (
            <div className="grid grid-row-3 md:grid-cols-3 ">
              {cards?.[0]?.attributes?.USP?.map((usp, index) => (
                <SwiperSlide
                  key={index}
                  style={{ padding: isMobile ? "10px" : 0 }}
                >
                  <Card
                    sx={{
                      width: isMobile ? "100%" : 398,
                      height: isMobile ? "100%" : 380,
                      margin: isMobile ? "10px" : "auto",
                    }}
                  >
                    <CardActionArea
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          objectFit: "cover",
                          height: isMobile ? "100%" : 191,
                        }}
                        image={BaseUrl.concat(
                          usp?.image1?.data?.[0]?.attributes?.url
                        )}
                        alt={`USP-${index + 1}`}
                      />
                      <CardContent
                        sx={{
                          // height: "calc(100% - 240px)",
                          background: "#FFFFFF",
                          border: "1px solid rgba(0, 0, 0, 0.1)",
                          padding: 3,
                          height: {xs: "100px",md: "100%"}
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {usp?.title1}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: {xs: "12px",md:"14px"},
                            color: "#2A2A2A",
                            marginTop: 1,
                          }}
                        >
                          {usp?.description1}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
              ))}
            </div>
          )}
        </div>
      </div>
    </Box>
  );
};

export default IndustrySolutionDetails;
