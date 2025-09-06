import React, { useState, useEffect } from "react";
import steel from "../assets/images/steal.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tataSteel from "../assets/images/Tata-Steel-logo.png";
import bosch from "../assets/images/bpsch-logo.png";
import ButtonArrow from "../assets/images/button-arrow.svg";
import DownloadIcon from "../assets/images/download.svg";
import './CaseStudies.css';

import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const CaseStudies = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  var settings = {
    dots: true,
    className: "center",
    centerMode: true,
    arrows: true,
    slidesToShow: 1,
    speed: 500,
    autoPlay: true,
    centerPadding: "20px 5%",
    appendDots: (dots) => (
      <div style={{ paddingTop: "20px" }}>
        <ul style={{ margin: "0px", fontSize: "8px", color: "red",position:'relative',left:'50%' }}>{dots}</ul>
      </div>
    ),
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
    <>
      <div className="mb-[8rem]">
        <div className="mt-[1rem] slider-wrapper case-study-slider">
          <Slider {...settings} className="mt-[5rem]" style={{ width: "105%" }}>
            <Card
              sx={{
                maxWidth: "82rem",
                border: 1,
                backgroundColor: "#FFFFFF",
              }}
              itemScope
              itemType="http://schema.org/Article"

            >
              <CardActionArea>
                <Grid container style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    flexDirection="column"
                    alignItems="left"
                    justifyContent="space-between"
                    p={4}
                  >
                    <Box>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        justifyContent="center"
                        alignItems="left"
                        sx={{
                          display: isMobile ? "block" : "flex",
                          width: isMobile ? "fit-content" : "100%",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={tataSteel}
                          alt="steel"
                          sx={{
                            height: "100%",
                            width: "100%",
                            objectFit: isMobile ? "none" : "cover",
                          }}
                             itemProp="image"
                          itemScope
                          itemType="http://schema.org/ImageObject"
                        />
                         <meta itemProp="url" content={tataSteel} />
                        <meta itemProp="name" content="Tata Steel" />
                      </Grid>
                      <Typography
                        variant="body1"
                        className="font-14 poppins-regular"
                        mt={2}
                        itemProp="articleBody"

                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        className="font-18 poppins-semibold"
                        variant="h5"
                        fontWeight="bold"
                        py={2}
                        itemProp="headline"
                      >
                        Impact
                      </Typography>
                      <Box sx={{ color: "text.secondary" }}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography className="font-22" itemProp="interactionStatistic">98</Typography>
                            <Typography className="font-16">
                              Lorem ipsum
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography className="font-22" itemProp="interactionStatistic">98</Typography>
                            <Typography className="font-16">
                              Lorem ipsum
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography className="font-22" itemProp="interactionStatistic">98</Typography>
                            <Typography className="font-16">
                              Lorem ipsum
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box display="flex">
                      <div className="download-casestudy-container mr-5">
                        <button className="download-casestudy d-flex justify-center items-center"
                         itemProp="potentialAction"
                         itemScope
                         itemType="http://schema.org/DownloadAction">
                          <span className="text-[12px] text-black text-center">
                            Download
                          </span>
                          <span>
                            <img
                              src={DownloadIcon}
                              alt="download"
                              description="download"
                              width={10}
                              height={10}
                              className="ml-3"
                            />
                          </span>
                        </button>
                      </div>

                      <button className="enquire-casestudy text-center d-flex  justify-center items-center "
                               itemProp="potentialAction"
                               itemScope
                               itemType="http://schema.org/CommunicateAction">
                        <span className=" text-[12px] mr-1">Enquire Now</span>
                        <span>
                          <img
                            src={ButtonArrow}
                            alt="arrow"
                            description="arrow"
                            width={10}
                            height={10}
                            className="mt-0 ml-3"
                          />
                        </span>
                      </button>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CardMedia
                      component="img"
                      image={steel}
                      alt="steel"
                      sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                      itemProp="image"
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    />
                      <meta itemProp="url" content={steel} />
                    <meta itemProp="name" content="Steel" />
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: "82rem", border: 1 }}
             itemScope
             itemType="http://schema.org/Article">
              <CardActionArea>
                <Grid container style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    p={4}
                  >
                    <Box>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        justifyContent="center"
                        alignItems="left"
                        sx={{
                          display: isMobile ? "block" : "flex",
                          width: isMobile ? "fit-content" : "100%",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={bosch}
                          alt="steel"
                          sx={{
                            height: "100%",
                            width: "100%",
                            objectFit: isMobile ? "none" : "cover",
                          }}
                          itemProp="image"
                          itemScope
                          itemType="http://schema.org/ImageObject"
                        />
                           <meta itemProp="url" content={bosch} />
                        <meta itemProp="name" content="Bosch" />
                      </Grid>
                      <Typography
                        variant="body1"
                        className="font-14 poppins-regular"
                        mt={2}
                        itemProp="articleBody"

                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        className="font-18 poppins-semibold"
                        variant="h5"
                        fontWeight="bold"
                        py={2}
                        itemProp="headline"

                      >
                        Impact
                      </Typography>
                      <Box sx={{ color: "text.secondary" }}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography className="font-22" itemProp="interactionStatistic">98</Typography>
                            <Typography className="font-16">
                              Lorem ipsum
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography className="font-22" itemProp="interactionStatistic">98</Typography>
                            <Typography className="font-16">
                              Lorem ipsum
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography className="font-22" itemProp="interactionStatistic">98</Typography>
                            <Typography className="font-16">
                              Lorem ipsum
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box display="flex">
                      <div className="download-casestudy-container mr-5">
                        <button className="download-casestudy d-flex justify-center items-center"
                          itemProp="potentialAction"
                          itemScope
                          itemType="http://schema.org/DownloadAction">
                          <span className="text-[12px] text-black text-center">
                            Download
                          </span>
                          <span>
                            <img
                              src={DownloadIcon}
                              alt="download"
                              description="download"
                              width={10}
                              height={10}
                              className="ml-3"
                            />
                          </span>
                        </button>
                      </div>

                      <button className="enquire-casestudy text-center d-flex  justify-center items-center "
                        itemProp="potentialAction"
                        itemScope
                        itemType="http://schema.org/CommunicateAction">
                        <span className=" text-[12px] mr-1">Enquire Now</span>
                        <span>
                          <img
                            src={ButtonArrow}
                            alt="arrow"
                            description="arrow"
                            width={10}
                            height={10}
                            className="mt-0 ml-3"
                          />
                        </span>
                      </button>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CardMedia
                      component="img"
                      image={steel}
                      alt="steel"
                      sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                      itemProp="image"
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    />
<meta itemProp="url" content={steel} />
                    <meta itemProp="name" content="Steel" />
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>

            <Card
              sx={{
                maxWidth: "82rem",
                border: 1,
                backgroundColor: "#FFFFFF",
              }}
              itemScope
              itemType="http://schema.org/Article"
            >
              <CardActionArea>
                <Grid container style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    p={4}
                  >
                    <Box>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        justifyContent="center"
                        alignItems="left"
                        sx={{
                          display: isMobile ? "block" : "flex",
                          width: isMobile ? "fit-content" : "100%",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={tataSteel}
                          alt="steel"
                          sx={{
                            height: "100%",
                            width: "100%",
                            objectFit: isMobile ? "none" : "cover",
                          }}
                          itemProp="image"
                          itemScope
                          itemType="http://schema.org/ImageObject"
                        />
                          <meta itemProp="url" content={tataSteel} />
                    <meta itemProp="name" content="tataSteel" />
                      </Grid>
                      <Typography
                        variant="body1"
                        className="font-14 poppins-regular"
                        mt={2}
                        itemProp="articleBody"

                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        className="font-18 poppins-semibold"
                        variant="h5"
                        fontWeight="bold"
                        py={2}
                        itemProp="headline"

                      >
                        Impact
                      </Typography>
                      <Box sx={{ color: "text.secondary" }}>
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Typography className="font-22" itemProp="interactionStatistic">98</Typography>
                            <Typography className="font-16">
                              Lorem ipsum
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography className="font-22" itemProp="interactionStatistic">98</Typography>
                            <Typography className="font-16">
                              Lorem ipsum
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography className="font-22" itemProp="interactionStatistic">98</Typography>
                            <Typography className="font-16">
                              Lorem ipsum
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                    <Box display="flex">
                      <div className="download-casestudy-container mr-5">
                        <button className="download-casestudy d-flex justify-center items-center"
                           itemProp="potentialAction"
                           itemScope
                           itemType="http://schema.org/DownloadAction">
                          <span className="text-[12px] text-black text-center">
                            Download
                          </span>
                          <span>
                            <img
                              src={DownloadIcon}
                              alt="download"
                              description="download"
                              width={10}
                              height={10}
                              className="ml-3"

                            />
                          </span>
                        </button>
                      </div>

                      <button className="enquire-casestudy text-center d-flex  justify-center items-center "
                       itemProp="potentialAction"
                       itemScope
                       itemType="http://schema.org/CommunicateAction">
                        <span className=" text-[12px] mr-1">Enquire Now</span>
                        <span>
                          <img
                            src={ButtonArrow}
                            alt="arrow"
                            description="arrow"
                            width={10}
                            height={10}
                            className="mt-0 ml-3"
                          />
                        </span>
                      </button>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CardMedia
                      component="img"
                      image={steel}
                      alt="steel"
                      sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                      itemProp="image"
                      itemScope
                      itemType="http://schema.org/ImageObject"
                    />
                       <meta itemProp="url" content={steel} />
                    <meta itemProp="name" content="Steel" />
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
