import React, { useEffect, useState } from "react";
import MainBanner from "../assets/images/contact-us-banner.png";

import { Helmet } from "react-helmet-async";
import MobileBanner from "../assets/images/contact-us-mobile-banner.png";
import EPCBanner from "../assets/images/EPC-banner.png";
import OEMBanner from "../assets/images/OEM-banner.png";
import SalesChannelBanner from "../assets/images/sales-channel-banner.png";
import EngineeringBanner from "../assets/images/engineering-consultance.png";
import EPCMobile from "../assets/images/EPC-mobile.png";
import OEMMobile from "../assets/images/OEM-mobile.png";
import EngineeringMobile from "../assets/images/engineering-mobile.png";
import ChannelSalesMobile from "../assets/images/channel-sales-mobile.png";
import Form from "./Form";
import { CSSTransition } from "react-transition-group";
import "../transition.css";
import { useLocation } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomMap from "./CustomMap";


const ContactUs = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [partnerTab, setPartnerTab] = useState("channel");
  const [screenWidth, setScreenWidth] = useState(0);
  const [address, setAddress] = useState("");
  const [long, setLong] = useState();
  const [lat, setLat] = useState();
  const [loading, setLoading] = useState(true); // New loading state
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjusts for small screens

  useEffect(() => {
    if (window.location.hash === "") {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    // handleToggle();
  }, [toggle]);

  

  useEffect(() => {
    handleLongLat();
  }, [address]);

  const handleLongLat = async () => {
    try {
      const response = await fetch(
        `https://maps.google.com/maps/api/geocode/json?address=${address}&key=AIzaSyD_O_krKq88mMB19VJwJn1xurZAruoClAY`
      );
      const data = await response.json();
      console.log(data);
      if (data?.results?.length > 0) {
        setLong(data.results[0].geometry.location.lng);
        setLat(data.results[0].geometry.location.lat);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => setLoading(false), 2000); // Hide loader after 800ms
    }
  };

  useEffect(() => {
    // Create a new ResizeObserver instance
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setScreenWidth(entry.contentRect.width);
      }
    });

    // Start observing the selected element
    resizeObserver.observe(document.body);
  }, [screenWidth]);

  const openAchemaLink = () => {
    const contactFormElement = document.querySelector("#contact-us-form");
    if (contactFormElement) {
      // Scroll smoothly to the contact form

      contactFormElement.scrollIntoView({ behavior: "smooth" });
      // Update the URL hash without reloading the page

      window.history.pushState(null, null, "#contact-us-form");
    }
  };

  const isMobile = screenWidth <= 820;

  const handlePartnerChange = (event, newValue) => {
    setPartnerTab(newValue);
  };


  if (loading) {
    return (
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
    );
  }

  return (
    <CSSTransition
      in={true}
      key={location.key}
      classNames="fade"
      timeout={200}
      unmountOnExit
      mountOnEnter
      onEnter={() => console.log("Entering")}
      onExited={() => console.log("Exited")}
    >
      <div
        className="contact-us-container container"
        style={{ paddingLeft: "5% !important", paddingRight: " 5% !important" }}
      >
        <Helmet>
          <title>Partner With Us</title>
          <link rel="canonical" href="https://uniklinger.com/" />
          <meta name="description" content="Partner With Us" />
        </Helmet>

        <div
          className=" flex flex-col"
          style={{ paddingTop: "100px" }}
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          <img
            src={isMobile ? MobileBanner : MainBanner}
            alt="Partner with us"
            description="Partner with us"
            className="banner-image "
            itemProp="image"
          />
        </div>
        <Box sx={{ px: { xs: 2, md: 0 } }}>
          <div
            className="section-title pt-[80px]"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <span className="poppins-semibold" itemProp="name">
              Partner
            </span>{" "}
            With Us
          </div>
          <div class="container" itemScope itemType="http://schema.org/Service">
            <div class="row pt-50">
              <div class="col-md-12">
                {/* <!-- Nav tabs --> */}
                <Box className="card border-0 flex-align-center flex-col" sx={{px: {xs: 2, md: 0},}}>
                  <Tabs
                    value={partnerTab}
                    onChange={handlePartnerChange}
                    aria-label="partner tabs"
                    variant={isSmallScreen ? "scrollable" : "fullWidth"}
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    sx={{
                      "& .MuiTabs-flexContainer": {
                        justifyContent: isSmallScreen
                          ? "flex-start"
                          : "space-around",
                          gap: isSmallScreen ? "18px" : "0", // Adds gap between tabs in mobile view
                      },
                      width: "100%",
                      "& .MuiTabs-indicator": {
                        height: "5px", // Adjust thickness of the indicator (bottom border)
                        backgroundColor: "black", // Set the bottom indicator color to black
                        borderRadius: "20px",
                      },
                      borderBottom: "2px solid #000",
                    }}
                  >
                    {[
                      "Channel Sales Partners",
                      "OEM's",
                      "Engineering Consultants",
                      "EPC Contractors",
                    ].map((label, index) => (
                      <Tab
                        key={label}
                        label={label}
                        value={label.toLowerCase().split(" ")[0]}
                        sx={{
                          marginRight: isSmallScreen ? "18px" : "0",
                          fontSize: isSmallScreen ? "14px" : "16px",
                          fontWeight: "bold",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          minWidth: "100px", // Ensures consistent width for mobile
                          width: isSmallScreen ? "auto" : "25%", // Auto width for scrollable on mobile
                          textTransform: "none",
                          "&.Mui-selected": {
                            fontWeight: "bold",
                            color: "black", // Set text color to black
                            borderBottom: "5px solid #000", // Custom bottom border for selected tab
                          },
                        }}
                      />
                    ))}
                  </Tabs>

                  {/* Tab Panels */}
                  <Box
                    role="tabpanel"
                    hidden={partnerTab !== "channel"}
                    sx={{ p: 2 }}
                  >
                    <img
                      src={
                        screenWidth <= 820
                          ? ChannelSalesMobile
                          : SalesChannelBanner
                      }
                      alt="Channel Sales"
                      className="banner-image"
                      onClick={openAchemaLink}
                    />
                  </Box>

                  <Box
                    role="tabpanel"
                    hidden={partnerTab !== "oem's"}
                    sx={{ p: 2 }}
                  >
                    <img
                      src={screenWidth <= 820 ? EngineeringMobile : OEMBanner}
                      alt="OEM"
                      className="banner-image"
                      onClick={openAchemaLink}
                    />
                  </Box>

                  <Box
                    role="tabpanel"
                    hidden={partnerTab !== "engineering"}
                    sx={{ p: 2 }}
                  >
                    <img
                      src={
                        screenWidth <= 820
                          ? EPCMobile
                          : EngineeringBanner
                      }
                      alt="Engineering"
                      className="banner-image"
                      onClick={openAchemaLink}
                    />
                  </Box>

                  <Box
                    role="tabpanel"
                    hidden={partnerTab !== "epc"}
                    sx={{ p: 2 }}
                  >
                    <img
                      src={screenWidth <= 820 ? OEMMobile : EPCBanner}
                      alt="EPC"
                      className="banner-image"
                      onClick={openAchemaLink}
                    />
                  </Box>
                </Box>
              </div>
            </div>
          </div>
        </Box>
        <Box>
          <Form />
        </Box>
        <div className="locate-us-container">
          <div
            className="section-title"
            itemScope
            itemType="https://schema.org/Place"
          >
            <span className="poppins-semibold" itemProp="name">
              Locate
            </span>
            {isMobile ? (
              <span itemProp="alternateName"> With Us</span>
            ) : (
              <span itemProp="alternateName"> Us</span>
            )}
          </div>
         
        </div>
        <CustomMap />
      </div>
    </CSSTransition>
  );
};

export default ContactUs;
