import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import factory from "../assets/images/Mask group.png";
import suman from "../assets/images/suman-majum.png";
import quote from "../assets/images/“.png";
import Next from "../assets/images/nextArrow.svg";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";

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
        borderRadius: "50%",
        position: "absolute",
        right: "90px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
    >
      <img
        style={{
          position: "absolute",
          top: 20,
          left: 26,
        }}
        src={Next}
        alt="Next"
        description="next-button"
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
        borderRadius: "50%",
        position: "absolute",
        left: "-35px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
    >
      <img
        src={Next}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          transform: "rotate(180deg)",
        }}
        alt="Prev"
        description="previous-button"
      />
    </div>
  );
};

function Testimonial() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: isMobile ? null : <NextArrow />,
    prevArrow: isMobile ? null : <PrevArrow />,
    dots: isMobile,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div>
    <h1 className="text-5xl testimonials mt-[136px]" itemScope itemType="https://schema.org/Review">
        <span className="font-bold ">Testimonials</span>
      </h1>
      <div className="testimonial-slider-container p-[10px] md:p-0">
        <Slider {...settings} style={{ width: "105%" }}>
          {[1, 2, 3, 4].map((item, index)=> (
            <Card
            key={index}
              sx={{
                maxWidth: 600,
                backgroundColor: "#E7ECF4",
                p: isMobile ? 2 : 2,
              }}
              itemScope
              itemType="https://schema.org/Review"
            >
              <CardActionArea>
                <Grid
                  container
                  direction={isMobile ? "column" : "row"}
                  style={{ height: "100%" }}
                >
                  {!isMobile && (
                    <Grid
                      item
                      xs={5}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <CardMedia
                        component="img"
                        image={factory}
                        alt="factory"
                        sx={{ height: "390px", width: "330px" }}
                        itemProp="reviewBody"
                      />
                    </Grid>
                  )}
                  <Grid
                    item
                    xs={isMobile ? 12 : 7}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems={isMobile ? "center" : "flex-start"}
                    sx={{ p: 2 }}
                  >
                    <CardContent sx={{ width: "100%" }}>
                      <Box display="flex" alignItems="center">
                        <img src={quote } alt="quote" description="quote"                         itemProp="reviewBody"
 />
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="font-14"
                        sx={{ mt: 2, mb: 2 }}
                        itemProp="reviewBody"

                      >
                        The ACCSTM successfully maintains low{" "}
                        <span className="poppins-semibold">
                          {" "}
                          Chiller Approach Temperature
                        </span>
                        , resulting in significant energy savings and a positive
                        impact on our bottom line. Highly recommend for improved
                        energy efficiency.
                      </Typography>
                      <Box display="flex" alignItems="center" sx={{ mt: 5 }}>
                        <CardMedia
                          component="img"
                          image={suman}
                          alt="suman"
                          itemProp="author"
                          sx={{ height: 64, width: 64, mr: 2 }}
                        />
                        <Box sx={{ mt: 1 }}>
                          <Typography
                            variant="subtitle1"
                            className="font-18"
                            fontWeight="bold"
                            itemProp="author"
                          >
                            Suman Majumder
                          </Typography>
                          <Typography
                            variant="body2"
                            className="font-14"
                            sx={{ color: "rgba(42, 42, 42, 1)" }}
                            color="text.secondary"
                          >
                            VP-Engineering, Hyatt Regency, Delhi
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Grid>
                  {isMobile && (
                    <Grid
                      item
                      xs={12}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <CardMedia
                        component="img"
                        image={factory}
                        alt="factory"
                        sx={{
                          height: 145,
                          width: "100%",
                          objectFit: "none",
                        }}
                        itemProp="reviewBody"
                      />
                    </Grid>
                  )}
                </Grid>
              </CardActionArea>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;