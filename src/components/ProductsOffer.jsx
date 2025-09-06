import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from "../assets/images/slider-1.png";
import product1 from "../assets/images/piston-valves.svg";
import product2 from "../assets/images/steam-traps.svg";
import product3 from "../assets/images/jointing.svg";
import product4 from "../assets/images/safety-control.svg";
import factory from "../assets/images/Mask group.png";
import engineer from "../assets/images/image 22.png";
import suman from "../assets/images/suman-majum.png";
import quote from "../assets/images/“.png";
import steel from "../assets/images/steal.png";
import blog from "../assets/images/blog-card.png";
import graphite from "../assets/images/Graphite-Sheets.png";
import ppft from "../assets/images/extended-ppft-sheets.png";
import ppft1 from "../assets/images/extended-ppft-sheets-1.png";
import arrowImage from "../assets/images/product-arrow.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, CardActions, Box } from "@mui/material";
import "./customDots.css";
import Next from "../assets/images/nextArrow.svg";
import RightSideArrow from "../assets/images/right-side-arrow.svg";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import "./ProductsOffer.css";
import { Container } from "react-bootstrap";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        zIndex: 9,
        height: 64,
        width: 64,
        right: -40,
        borderRadius: 100,
        borderColor: " rgba(0, 0, 0, 0.1)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        borderWidth: 1,
        top: "50%",
        // right: -35,
      }}
      onClick={onClick}
    >
      <img
        style={{
          position: "absolute",
          top: 21,
          left: 27,
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
        zIndex: 9,
        height: 64,
        width: 64,
        borderRadius: 100,
        left: -30,
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
          left: 21,
        }}
        className="rotate-180 "
        src={Next}
      />
    </div>
  );
};

export default function ProductsOffer() {
  const [activeDot, setActiveDot] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [cards, setCards] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(4);
  const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth >= 1970); // Adjust width as needed
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsLargeDevice(window.innerWidth >= 1920);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const settings = {
    // className: "center",
    dots: false,
    customPaging: (i) => (
      <div className="custom-dot">
        <div className={`dot ${i === activeSlide ? "active" : ""}`}></div>
      </div>
    ),

    centerPadding: "10px",
    slidesToShow: isMobile ? 1 : 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current) => setActiveSlide(current),

    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          dots: true,
          customPaging: (i) => (
            <div className="custom-dot">
              <div className={`dot ${i === activeSlide ? "active" : ""}`}></div>
            </div>
          ),
          nextArrow: null,
          prevArrow: null,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          // centerMode: true,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2.5,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
    ],
  };

  // const settings = {
  //   dots: false,
  //   infinite: true,

  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerPadding: "10px",

  //   responsive: [
  //     {
  //       breakpoint: 768, // Mobile breakpoint
  //       settings: {
  //         nextArrow: null,
  //         prevArrow: null,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //         infinite: false,
  //         centerMode: true
  //       }
  //     }
  //   ]
  // };

  useEffect(() => {
    if (selectedProduct !== null && carouselRef.current) {
      const productElement = document.getElementById(
        `product-${selectedProduct}`
      );
      if (productElement) {
        const offsetLeft = productElement.offsetLeft;
        const carouselWidth = carouselRef.current.offsetWidth;
        const productWidth = productElement.offsetWidth;

        // Scroll to center the selected product
        carouselRef.current.scrollLeft =
          offsetLeft - carouselWidth / 2 + productWidth / 2;
      }
    }
    getData();
  }, [selectedProduct]);
  const BaseUrl = "https://ukladmin.3mindsdigital.com";
  const getData = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/api/product-details?filters[product_id][$eq]=${selectedProduct}&populate=*`
      );
      setCards(response.data.data);
      console.log("cards", cards);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const [maxHeight, setMaxHeight] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Find the maximum height of the cards
    const heights = cardRefs.current.map((card) => card?.offsetHeight || 0);
    const maxHeight = Math.max(...heights);
    setMaxHeight(maxHeight);
  }, [cards]);

  const handleRedirection = (url) => {
    window.open(url, "_blank"); // Opens the URL in a new tab
  };

  return (
    <div className="w-full mb-[4rem] mt-[60px]  container contact-us-container">
      <h1 className="text-[20px] md:text-4xl font-bold">PRODUCTS WE OFFER</h1>

      <div
        ref={carouselRef}
        className="w-full overflow-x-auto flex justify-center"
        style={{ paddingLeft: isMobile ? "10px" : 0 }}
      >
        <div className="flex justify-around md:w-[100%] lg:w-[80%] xl:w-[60%] pl-[400px] md:pl-0">
          {[
            {
              id: 1,
              src: product1,
              label: "Piston Valves  & Bellow Seal Valves",
            },
            { id: 3, src: product2, label: "Steam Traps & Accessories" },
            { id: 4, src: product3, label: "Jointing Sheets & Gaskets" },
            { id: 2, src: product4, label: "Safety & Control Valves" },
          ].map((product) => {
            const words = product.label.split(" ");
            const firstThreeWords = words.slice(0, 3).join(" ");
            const remainingWords = words.slice(3).join(" ");

            return (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className={`carousel-prod ${
                  product.id === 3 || product.id === 2
                    ? "carousel-prod-red"
                    : ""
                } relative flex rounded-full flex-col items-center p-4 cursor-pointer m-[10px] transition-all duration-300`}
                style={
                  selectedProduct === product.id
                    ? {
                        border: `12px solid ${
                          product.id === 3 || product.id === 2
                            ? "#fcb8ca"
                            : "#a6bcf9cc"
                        }`,
                        width: 180, // Increased size for selected
                        height: 180, // Increased size for selected
                      }
                    : {
                        width: 160, // Increased default size
                        height: 160, // Increased default size
                      }
                }
                onClick={() => setSelectedProduct(product.id)}
              >
                <img
                  src={product.src}
                  className="w-full h-[70%] rounded-full"
                  alt={product.label}
                />
                <div
                  className="text-white text-[12px] md:text-[12px] dmsans-bold text-center absolute bottom-[30px]"
                  style={{ width: "80%" }}
                >
                  <div>{firstThreeWords}</div>
                  {remainingWords && <div>{remainingWords}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="products-slider md:block mobileHide"
        style={{ marginTop: "40px", padding: "10px" }}
      >
        {cards?.length > 2 ? (
          <Slider {...settings}>
            {cards.length > 2 ? (
              cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      width: { xs: "95%", lg: "90%", xl: "90%" },
                      height: 400,
                      border: "2px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardActionArea
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ objectFit: "cover", height: 240 }}
                        image={BaseUrl.concat(
                          card?.attributes?.Image?.data?.attributes?.url
                        )}
                        alt={card.attributes.Title}
                      />
                      <a
                        href={card.attributes.redirect_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          height: "100%",
                        }}
                      >
                        <CardContent
                          sx={{
                            height: "calc(100% - 240px)",
                            background: "#FFFFFF",
                            borderTop: "2px solid rgba(0, 0, 0, 0.1)",
                            padding: 3,
                          }}
                          // onClick={() =>
                          //   handleRedirection(card.attributes.redirect_url)
                          // }
                        >
                          <div className="dmsans leading-[22px] text-[20px]" style={{fontWeight: 600, marginBottom: "15px"}}>
                            {card?.attributes?.Title}
                          </div>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                fontSize: "14px",
                                color: "#2A2A2A",
                                fontWeight: 400,
                              }}
                            >
                              {card.attributes.Description.slice(0, 80)}
                              <span
                                style={{
                                  color: "#222222",
                                  fontSize: 14,
                                  fontWeight: 600,
                                  paddingLeft: "5px",
                                }}
                              >
                                Read More...
                              </span>
                            </Typography>
                            <button
                              itemProp="url"
                              // onClick={() => {
                              //      navigate(`/products-listing?productId=${card.id}`);
                              // }}
                              onClick={() =>
                                handleRedirection(card.attributes.redirect_url)
                              }
                            >
                              <img
                                src={arrowImage}
                                alt="arrow"
                                style={{
                                  width: "48px",
                                  height: "48px",
                                  marginLeft: "8px",
                                }}
                              />
                            </button>
                          </Box>
                        </CardContent>
                      </a>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>No data available</SwiperSlide>
            )}
          </Slider>
        ) : (
          <div className="grid grid-row-3 md:grid-cols-3 gap-[20px]">
            {cards?.length > 0 && cards.length <= 2 ? (
              cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      width: { xs: 280, md: 400 },
                      height: 400,
                      border: "2px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardActionArea
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ objectFit: "cover", height: 240 }}
                        image={BaseUrl.concat(
                          card?.attributes?.Image?.data?.attributes?.url
                        )}
                        alt={card.attributes.Title}
                      />
                        <a
                        href={card.attributes.redirect_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          height: "100%",
                        }}
                      >
                      <CardContent
                        sx={{
                          height: "calc(100% - 240px)",
                          background: "#FFFFFF",
                          borderTop: "2px solid rgba(0, 0, 0, 0.1)",
                          padding: 3,
                        }}
                        // onClick={() =>
                        //   handleRedirection(card.attributes.redirect_url)
                        // }
                      >
                        <div className="dmsans leading-[22px] text-[20px]" style={{fontWeight: 600, marginBottom: "15px"}}>
                          {card?.attributes?.Title}
                        </div>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: "14px",
                              color: "#2A2A2A",
                              fontWeight: 400,
                            }}
                          >
                            {card.attributes.Description.slice(0, 80)}
                            <span
                              style={{
                                color: "#222222",
                                fontSize: 14,
                                fontWeight: 600,
                                paddingLeft: "5px",
                              }}
                            >
                              Read More...
                            </span>
                          </Typography>
                          <button
                            itemProp="url"
                            // onClick={() => {
                            //      navigate(`/products-listing?productId=${card.id}`);
                            // }}
                            onClick={() =>
                              handleRedirection(card.attributes.redirect_url)
                            }
                          >
                            <img
                              src={arrowImage}
                              alt="arrow"
                              style={{
                                width: "48px",
                                height: "48px",
                                marginLeft: "8px",
                              }}
                            />
                          </button>
                        </Box>
                      </CardContent>
                      </a>
                    </CardActionArea>
                  </Card>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>No data available</SwiperSlide>
            )}{" "}
          </div>
        )}

        {/* <Swiper
          className="home"
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={
            cards.length >= 3
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                }
              : true
          }
          pagination={{ clickable: true }}
          scrollbar={{ draggable: false }}
          loop={false}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          centerInsufficientSlides
        >
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Card sx={{ width: 398, height: 380 }}>
                  <CardActionArea sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      sx={{ objectFit: "cover", height: 240 }}
                      image={BaseUrl.concat(
                        card?.attributes?.Image?.data?.attributes?.url
                      )}
                      alt={card.attributes.Title}
                    />
                    <CardContent
                      sx={{
                        height: "calc(100% - 240px)",
                        background: "#FFFFFF",
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        padding: 3
                      }}
                    >
                      <div className="dmsans-bold leading-[22px] text-[24px]">
                        {card?.attributes?.Title}
                      </div>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: "14px",
                            color: "#2A2A2A",
                            fontWeight: 400
                          }}
                        >
                          {card.attributes.Description.slice(0, 80)}
                          <span
                            style={{
                              color: "#222222",
                              fontSize: 14,
                              fontWeight: 600,
                              paddingLeft: "5px"
                            }}
                          >
                            Read More
                          </span>
                        </Typography>
                        <button
                          itemProp="url"
                          // onClick={() => {
                          //      navigate(`/products-listing?productId=${card.id}`);
                          // }}
                          onClick={() =>
                            handleRedirection(card.attributes.redirect_url)
                          }
                        >
                          <img
                            src={arrowImage}
                            alt="arrow"
                            style={{
                              width: "48px",
                              height: "48px",
                              marginLeft: "8px"
                            }}
                          />
                        </button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>No data available</SwiperSlide>
          )}
          {cards.length > 3 ? (
            <>
              <NextArrow
                className="swiper-button-next"
                style={{ marginRight: "35px" }}
              />
              <PrevArrow
                className="swiper-button-prev"
                style={{ marginLeft: "20px" }}
              />
            </>
          ) : null}
        </Swiper> */}
      </div>
      <div className="products-slider md:hidden ">
        {/* <Slider {...settings} className="mt-[50px]  ">
            {cards.map((card, index) => (
              <Box
                sx={{
                  padding: "10px",
                  border: "1px solid grey",
                  boxShadow: "30px 8px 28px 20px #d9e9f9", // blur radius, spread, and color
                  bgcolor: "#ffffff",
                }}
              >
                <Card
                  key={index}
                  sx={{
                    width: isMobile ? "100%" : "100%",
                    boxShadow: "0px 4px 6px 0px #0973D840",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: "cover",
                        height: isMobile ? "200px" : "247px",
                        width: "100%",
                      }}
                      image={BaseUrl.concat(
                        card?.attributes?.Image?.data?.attributes?.url
                      )}
                      alt="green iguana"
                    />
                    <CardContent>
                      <div className="dmsans-bold text-[16px]">
                        {card?.attributes?.Title}
                      </div>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: "12px",
                            color: "#2A2A2A",
                            fontWeight: 400,
                          }}
                        >
                          {card?.attributes?.Description.slice(0, 20)}
                          <span
                            style={{
                              color: "#222222",
                              fontSize: 12,
                              fontWeight: 600,
                              paddingLeft: "5px",
                            }}
                          >
                            Read More...
                          </span>
                        </Typography>
                        <button
                          itemProp="url"
                          // onClick={() => {
                          //      navigate(`/products-listing?productId=${card.id}`);
                          // }}
                          onClick={() =>
                            handleRedirection(card.attributes.redirect_url)
                          }
                        >
                          <img
                            src={arrowImage}
                            alt="arrow"
                            style={{
                              width: "38px",
                              height: "38px",
                              marginLeft: "8px",
                            }}
                          />
                        </button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Slider> */}
        <Slider {...settings} style={{ paddingBottom: "120px" }}>
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <Box
                sx={{
                  padding: "10px",
                  border: "1px solid grey",
                  boxShadow: "30px 8px 28px 20px #d9e9f9", // blur radius, spread, and color
                  bgcolor: "#ffffff",
                  display: "flex",
                  mt: 4,
                  mb: 3,
                }}
                key={index}
              >
                <Card
                  key={index}
                  sx={{
                    width: isMobile ? "100%" : "100%",
                    boxShadow: "0px 4px 6px 0px #0973D840",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      objectFit: "cover",
                      height: isMobile ? "150px" : "247px",
                      width: "100%",
                    }}
                    image={BaseUrl.concat(
                      card?.attributes?.Image?.data?.attributes?.url
                    )}
                    alt="green iguana"
                  />
                  <CardActionArea
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <CardContent
                      sx={{
                        // flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        height: { xs: "100px", md: "100%" },
                      }}
                      onClick={() =>
                        handleRedirection(card.attributes.redirect_url)
                      }
                    >
                      <div className="productCardMobile dmsans-bold text-[14px]">
                        {card?.attributes?.Title}
                      </div>
                      <Box
                        display="flex"
                        // justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: "12px",
                            color: "#2A2A2A",
                            fontWeight: 400,
                            maxWidth: "210px",
                          }}
                        >
                          {card?.attributes?.Description.slice(0, 20)}
                          <span
                            style={{
                              color: "#222222",
                              fontSize: 12,
                              fontWeight: 600,
                              paddingLeft: "5px",
                            }}
                          >
                            Read More...
                          </span>
                        </Typography>
                        <button
                          itemProp="url"
                          onClick={() =>
                            handleRedirection(card.attributes.redirect_url)
                          }
                        >
                          <img
                            src={arrowImage}
                            alt="arrow"
                            style={{
                              width: "38px",
                              height: "38px",
                              marginLeft: "8px",
                            }}
                          />
                        </button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))
          ) : (
            <SwiperSlide>No data available</SwiperSlide>
          )}
        </Slider>
      </div>
    </div>
  );
}
