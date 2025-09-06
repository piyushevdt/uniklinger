import React, { useEffect, useState } from "react";
import MainBanner from "../assets/images/contact-us-banner.png";
import Location from "../assets/images/location.svg";
import Mail from "../assets/images/mail.svg";
import Call from "../assets/images/call.svg";

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
import MapComponent from "./MapComponent";
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
const imageStyle = {
  width: "100%",
  height: "auto",
};

const ContactUs = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [partnerTab, setPartnerTab] = useState("channel");
  const [locationTab, setLocationTab] = useState("manufacturing");
  const [screenWidth, setScreenWidth] = useState(0);
  const [address, setAddress] = useState("");
  const [long, setLong] = useState();
  const [lat, setLat] = useState();
  const [isClicked, setIsClicked] = useState(0);
  const [bannerImage, setBannerImage] = useState();
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

  function handleToggle(event) {
    console.log("Clicked element:", event.target);
    console.log("Parent element:", event.target.parentElement);
    if (event) {
      let content = event?.target?.parentElement?.children[1];
      console.log("Content element:", content);

      if (!content) {
        console.error("Content element not found");
        return;
      }

      if (content?.style?.maxHeight) {
        content.style.maxHeight = null;
        content.style.height = null;
        event.target.children[0].classList.add("fa-plus");
        event.target.children[0].classList.remove("fa-minus");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.height = content.scrollHeight + "px";
        event.target.children[0].classList.add("fa-minus");
        event.target.children[0].classList.remove("fa-plus");
      }
    }
  }
  const handleIconClick = (event) => {
    // Stop the click event from propagating to avoid triggering other handlers (like the button click handler)
    event.stopPropagation();

    // Log the clicked element (i.e., the <i> tag)
    console.log("Clicked element:", event.target);

    // Access the parent element (div with class 'button-container')
    const parentElement = event.target.closest(".wrapper");
    console.log("Parent element:", parentElement);
    if (event) {
      let content = event?.target?.closest(".wrapper").children[1];
      console.log("Content element:", content);

      if (!content) {
        console.error("Content element not found");
        return;
      }

      if (content?.style?.maxHeight) {
        content.style.maxHeight = null;
        content.style.height = null;
        event.target.classList.add("fa-plus");
        event.target.classList.remove("fa-minus");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.height = content.scrollHeight + "px";
        event.target.classList.add("fa-minus");
        event.target.classList.remove("fa-plus");
      }
    }

    // Add custom logic to handle the content element
    // For example, you can toggle a class or perform some action on the element
    // content.classList.toggle('active'); // Example of toggling a class
  };

  const handlePartner = (tab) => {
    setPartnerTab(tab);
  };
  const handleLocation = (tab) => {
    setLocationTab(tab);
  };

  const handleAddress = async (event) => {
    console.log("event--->", event.target.parentElement.children[0]);
    if (event) {
      setAddress(event.target.parentElement.children[0].innerText);
    }
  };

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
  // const [partnerTab, setPartnerTab] = useState("channel");
  // const screenWidth = window.innerWidth;

  const handlePartnerChange = (event, newValue) => {
    setPartnerTab(newValue);
  };

  // const openAchemaLink = () => {
  //   // Add your link handling logic here
  //   console.log("Link clicked");
  // };

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
        {/* <div style={{ paddingTop: '100px' }} itemScope itemType="http://schema.org/Organization">
    <img
      src={bannerImage}
      alt="Contact Us"
      description="Contact-Us"
      // style={imageStyle}
      itemProp="image"
      // loading="eager"
    />
  </div> */}
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
          {/* <div class="container">
            <div class="row pt-50">
              <div class="col-md-12"> */}
          {/* <!-- Nav tabs --> */}
          {/* <div class="card flex-align-center flex-col"> */}
          {/* <ul
                    class="nav nav-tabs w-60 flex-align-center space-around"
                    role="tablist"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <li
                      role="presentation"
                      class="active w-33"
                      onClick={() => handleLocation("manufacturing")}
                      itemProp="department"
                      itemScope
                      itemType="https://schema.org/Organization"
                    >
                      <a
                        href="#home"
                        aria-controls="home"
                        role="tab"
                        data-toggle="tab"
                        className="poppins-regular text-[14px] md:text-[18px]"
                        itemProp="name"
                        title="Manufacturing Units"
                      >
                        Manufacturing Units
                      </a>
                    </li>
                    <li
                      role="presentation"
                      className="w-33"
                      onClick={() => handleLocation("branch")}
                      itemProp="department"
                      itemScope
                      itemType="https://schema.org/Organization"
                    >
                      <a
                        href="#profile"
                        aria-controls="profile"
                        role="tab"
                        data-toggle="tab"
                        className="poppins-regular text-[14px] md:text-[18px]"
                        itemProp="name"
                        title="Branch Offices"
                      >
                        Branch Offices
                      </a>
                    </li> */}
          {/* <li
                      role="presentation"
                      className="w-33"
                      onClick={() => handleLocation("global")}
                      itemProp="department"
                      itemScope
                      itemType="https://schema.org/Organization" 
                    >
                      <a
                        href="#messages"
                        aria-controls="messages"
                        role="tab"
                        data-toggle="tab"
                        className="poppins-regular text-[14px] md:text-[18px]"
                        itemProp="name" title="Global Partners"
                      >
                        Global Partners
                      </a>
                    </li> */}
          {/* </ul> */}

          {/* <!-- Tab panes --> */}
          {/* <div class="tab-content poppins-regular"> */}
          {/* <div
                      role="tabpanel"
                      class="tab-pane active"
                      id="home"
                      style={
                        locationTab === "manufacturing"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      <div className="col-md-6 ">
                        <MapComponent lat={lat} long={long} />
                      </div>
                      <div className="col-md-6">
                        <div class="boxaccordion">
                          <div class="containerwidth">
                            <div class="wrapper">
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Ahmednagar Factory
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>
                              </button>
                              <div
                                class="content"
                                itemScope
                                itemType="http://schema.org/Place"
                              >
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      style={{ width: 20 }}
                                      alt="locate-us"
                                      description="locate-us"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular  cursor-pointer"
                                    title="click to view address on map"
                                  >
                                    <span
                                      itemProp="address"
                                      itemScope
                                      itemType="http://schema.org/PostalAddress"
                                    >
                                      <span
                                        itemProp="streetAddress"
                                        className="text-[14px] md:text-[16px] leading-[22px]"
                                      >
                                        Fluid Control Division, Plot No. C/37,
                                        MIDC Area
                                      </span>
                                      ,
                                      <span
                                        itemProp="addressLocality"
                                        className="text-[14px] md:text-[16px]"
                                      >
                                        Ahmednagar
                                      </span>{" "}
                                      –
                                      <span
                                        itemProp="postalCode"
                                        className="text-[14px] md:text-[16px]"
                                      >
                                        414111
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular text-[14px] md:text-[16px]">
                                    <a
                                      href="tel:+912416611801"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +91 241-6611801 / +91 241-6611801
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular text-[14px] md:text-[16px]">
                                    <a
                                      href="mailto:fcdworks@uniklinger.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      fcdworks@uniklinger.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper">
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Pune – Vadu Factory
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div
                                class="content"
                                itemScope
                                itemType="http://schema.org/Place"
                              >
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      style={{ width: 20 }}
                                      alt="locate-us"
                                      description="locate-us"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular  cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                  >
                                    <span
                                      itemProp="address"
                                      itemScope
                                      itemType="http://schema.org/PostalAddress"
                                    >
                                      <span
                                        itemProp="streetAddress"
                                        className="text-[14px] md:text-[16px] leading-[22px]"
                                      >
                                        Fluid Sealing Division Gate No. 1240, S.
                                        No. 140
                                      </span>
                                      ,
                                      <span
                                        itemProp="addressLocality"
                                        className="text-[14px] md:text-[16px]"
                                      >
                                        Vadu Budruk, Tal. Shirur
                                      </span>
                                      ,
                                      <span
                                        itemProp="addressRegion"
                                        className="text-[14px] md:text-[16px]"
                                      >
                                        Pune
                                      </span>{" "}
                                      –
                                      <span
                                        itemProp="postalCode"
                                        className="text-[14px] md:text-[16px]"
                                      >
                                        412216
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular text-[14px] md:text-[16px]">
                                    <a
                                      href="tel:+919930662621"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +91 2137 676900 / +91 2137-676928
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular text-[14px] md:text-[16px]">
                                    <a
                                      href="mailto:fsdworks@uniklinger.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      fsdworks@uniklinger.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper">
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Pune – Sanaswadi Factory
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div
                                class="content"
                                itemScope
                                itemType="http://schema.org/Place"
                              >
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      style={{ width: 20 }}
                                      alt="locate-us"
                                      description="locate-us"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular text-[14px] md:text-[16px] cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                  >
                                    <span
                                      itemProp="address"
                                      itemScope
                                      itemType="http://schema.org/PostalAddress"
                                    >
                                      <span
                                        itemProp="streetAddress"
                                        className="text-[14px] md:text-[16px] leading-[22px]"
                                      >
                                        Safety Valve & Control Valve Division
                                        177, Cannel Road
                                      </span>
                                      ,
                                      <span
                                        itemProp="addressLocality"
                                        className="text-[14px] md:text-[16px] leading-[22px]"
                                      >
                                        Village: Sanaswadi, Tal. Shirur
                                      </span>
                                      ,
                                      <span
                                        itemProp="addressRegion"
                                        className="text-[14px] md:text-[16px]"
                                      >
                                        Pune
                                      </span>
                                      ,
                                      <span
                                        itemProp="addressCountry"
                                        className="text-[14px] md:text-[16px]"
                                      >
                                        Maharashtra
                                      </span>{" "}
                                      –
                                      <span
                                        itemProp="postalCode"
                                        className="text-[14px] md:text-[16px]"
                                      >
                                        412208
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular text-[14px] md:text-[16px]">
                                    <a
                                      href="tel:+919930662621"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +91 2137-661815
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular text-[14px] md:text-[16px]">
                                    <a
                                      href="mailto:astworks@uniklinger.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      astworks@uniklinger.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      class="tab-pane"
                      id="profile"
                      style={
                        locationTab === "branch"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                      itemScope
                      itemType="http://schema.org/Organization"
                    >
                      <div className="col-md-6">
                        <MapComponent lat={lat} long={long} />
                      </div>
                      <div className="col-md-6">
                        <div class="boxaccordion">
                          <div class="containerwidth">
                            <div class="wrapper">
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Mumbai Sales Office
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div class="content">
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                    itemProp="address"
                                    itemScope
                                    itemType="http://schema.org/PostalAddress"
                                  >
                                    <span
                                      itemProp="streetAddress"
                                      className="leading-[22px]"
                                    >
                                      Uni Klinger Limited Unit 203, A, Godrej
                                      Two, Eastern Express Highway,
                                      Pirojshanagar,
                                    </span>
                                    <span itemProp="addressLocality">
                                      Vikhroli East
                                    </span>
                                    ,
                                    <span itemProp="addressRegion">Mumbai</span>
                                    <span itemProp="postalCode">400079</span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+918799962688"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +91 8799962688
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:salesmum@uniklinger.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      salesmum@uniklinger.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper">
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Delhi Sales Office
                                <i class="fas fa-plus icon"></i>
                              </button>
                              <div class="content">
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                    itemProp="address"
                                    itemScope
                                    itemType="http://schema.org/PostalAddress"
                                  >
                                    <span
                                      itemProp="streetAddress"
                                      className="leading-[22px]"
                                    >
                                      Uni Klinger Limited Office Flat No 1003,
                                      10th Floor, Indra Prakash Building, 21,
                                      Barakhamba Road, Connaught Place,
                                    </span>
                                    <span itemProp="addressLocality">
                                      New Delhi
                                    </span>
                                    <span itemProp="postalCode">110001</span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+911141658767"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +911141658767 / +911141658768
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:salesdel@uniklinger.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      salesdel@uniklinger.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="wrapper"
                              itemScope
                              itemType="http://schema.org/Organization"
                            >
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Baroda Sales Office
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div
                                class="content"
                                itemProp="address"
                                itemScope
                                itemType="http://schema.org/PostalAddress"
                              >
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                  >
                                    <span
                                      itemProp="streetAddress"
                                      className="leading-[22px]"
                                    >
                                      Uni Klinger Limited 102, Offtel Tower –
                                      ll, 2nd Floor R. C. Dutt Road, Alkapuri
                                    </span>
                                    ,
                                    <span itemProp="addressLocality">
                                      Vadodara
                                    </span>
                                    -<span itemProp="postalCode">390007</span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+912652312343"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +912652312343 / +91 265 2340660 / +91 265
                                      2341419
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:salesbar@uniklinger.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      salesbar@uniklinger.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="wrapper"
                              itemScope
                              itemType="http://schema.org/Organization"
                            >
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Chennai Sales Office
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div
                                class="content"
                                itemProp="address"
                                itemScope
                                itemType="http://schema.org/PostalAddress"
                              >
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                  >
                                    <span
                                      itemProp="streetAddress"
                                      className="leading-[22px]"
                                    >
                                      Uni Klinger Limited East Coast Centre 5th
                                      Floor, 553, Mount Road, Teynampet
                                    </span>
                                    ,
                                    <span itemProp="addressLocality">
                                      Chennai
                                    </span>{" "}
                                    – <span itemProp="postalCode">600018</span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+914424345707"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +914424345707 / +914424343960
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:saleschen@uniklinger.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      saleschen@uniklinger.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="wrapper"
                              itemScope
                              itemType="http://schema.org/Organization"
                            >
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Pune Sales Office
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div
                                class="content"
                                itemProp="address"
                                itemScope
                                itemType="http://schema.org/PostalAddress"
                              >
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                  >
                                    <span
                                      itemProp="streetAddress"
                                      className="leading-[22px]"
                                    >
                                      Uni Klinger Limited Central Sales Office
                                      Kohinoor Estate, SC 1, 5th Floor Opp.
                                      Bajaj Garden
                                    </span>
                                    ,
                                    <span itemProp="addressLocality">Pune</span>{" "}
                                    – <span itemProp="postalCode">411003</span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+912041023000"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +912041023000 / +912041023001
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:salescso@uniklinger.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      salescso@uniklinger.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="wrapper"
                              itemScope
                              itemType="http://schema.org/Organization"
                            >
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Kolkata Sales Office
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div
                                class="content"
                                itemProp="address"
                                itemScope
                                itemType="http://schema.org/PostalAddress"
                              >
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                  >
                                    <span
                                      itemProp="streetAddress"
                                      className="leading-[22px]"
                                    >
                                      Uni Klinger Limited 9, Chitrakoot, 8th
                                      Floor, 230A, A.J.C. Bose Road
                                    </span>
                                    ,
                                    <span itemProp="addressLocality">
                                      Kolkata
                                    </span>{" "}
                                    – <span itemProp="postalCode">700020</span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+913322872510"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +913322872510 / +91 33 22876494
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:salescal@uniklinger.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      salescal@uniklinger.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
          {/* <div
                      role="tabpanel"
                      class="tab-pane"
                      id="messages"
                      style={
                        locationTab === "global"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      <div className="col-md-6">
                        <MapComponent lat={lat} long={long} />
                      </div>
                      <div className="col-md-6">
                        <div class="boxaccordion">
                          <div class="containerwidth">
                            <div
                              class="wrapper"
                              itemScope
                              itemType="http://schema.org/Organization"
                            >
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Malaysia
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div
                                class="content"
                                itemScope
                                itemType="http://schema.org/PostalAddress"
                              >
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer leading-[22px]"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                    itemProp="streetAddress"
                                  >
                                    C/o TLG Engineering & Trading SDN. BHD No.3,
                                    Jalan TSB 10, Taman Industry Sungai Buloh,
                                    47810. Kota Damansara, Selangor Darul Ehsan,
                                    Malaysia
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+0361568873"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +03 61568873 / +03 61570437
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:charleyquah@tlg.com.my"
                                      itemProp="email"
                                      title="email"
                                    >
                                      charleyquah@tlg.com.my
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="wrapper"
                              itemScope
                              itemType="http://schema.org/Organization"
                            >
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Bahrain
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div
                                class="content"
                                itemScope
                                itemType="http://schema.org/PostalAddress"
                              >
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer leading-[22px]"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                    itemProp="streetAddress"
                                  >
                                    Kanoo Automotive & Industrial Equipment P.O.
                                    Box 119, Manama, Kingdom of Bahrain
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+973321443067"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      (+973)321443067
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:dineshprasad.r@ekkanoo.com.bh"
                                      temprop="email"
                                      title="email"
                                    >
                                      dineshprasad.r@ekkanoo.com.bh
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="wrapper"
                              itemScope
                              itemType="http://schema.org/Organization"
                            >
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Kuwait
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div class="content">
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                      itemProp="logo"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                    itemProp="address"
                                    itemScope
                                    itemType="http://schema.org/PostalAddress"
                                  >
                                    <span itemProp="name">
                                      Warba National Contracting Co.
                                    </span>
                                    <span itemProp="postOfficeBoxNumber">
                                      P.O. Box 26389
                                    </span>
                                    ,
                                    <span itemProp="addressLocality">
                                      Safat
                                    </span>
                                    <span itemProp="postalCode">13124</span>,
                                    <span itemProp="addressCountry">
                                      Kuwait
                                    </span>
                                    .
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+96599391572"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +96599391572
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:enquiries@warbagroup.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      enquiries@warbagroup.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="wrapper"
                              itemScope
                              itemType="http://schema.org/Organization"
                            >
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Jordan
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div class="content">
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                      itemProp="logo"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                    itemProp="address"
                                    itemScope
                                    itemType="http://schema.org/PostalAddress"
                                  >
                                    <span
                                      itemProp="name"
                                      className="leading-[22px]"
                                    >
                                      Industrial Chain For Metal & Engineering
                                      Supplies
                                    </span>
                                    Office 304, 3rd Floor, Building 73,
                                    <span itemProp="streetAddress">
                                      Wasi Al-Tal St
                                    </span>
                                    ;
                                    <span itemProp="addressLocality">
                                      Amman
                                    </span>{" "}
                                    -
                                    <span itemProp="addressCountry">
                                      Jordan
                                    </span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+962798634469"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +962798634469
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:sales@industrialchain-jo.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      sales@industrialchain-jo.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="wrapper"
                              itemScope
                              itemType="http://schema.org/Organization"
                            >
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                United Arab Emirates
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div class="content">
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                      itemProp="logo"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                    itemProp="address"
                                    itemScope
                                    itemType="http://schema.org/PostalAddress"
                                  >
                                    <span
                                      itemProp="name"
                                      className="leading-[22px]"
                                    >
                                      AL DAQEEQ ENGINEERING
                                    </span>
                                    P.O.Box:{" "}
                                    <span itemProp="postOfficeBoxNumber">
                                      83247
                                    </span>
                                    ,
                                    <span itemProp="addressLocality">
                                      Sharjah
                                    </span>
                                    ,
                                    <span itemProp="addressCountry">
                                      United Arab Emirates
                                    </span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+97165360878"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +97165360878
                                    </a>{" "}
                                    /
                                    <a
                                      href="tel:+97143804081"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +97143804081
                                    </a>{" "}
                                    /
                                    <a
                                      href="tel:+971564080345"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +971564080345
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:abdulla@aldaqeeq.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      abdulla@aldaqeeq.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="wrapper"
                              itemScope
                              itemType="http://schema.org/Organization"
                            >
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Yemen
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div class="content">
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                      itemProp="logo"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                    itemProp="address"
                                    itemScope
                                    itemType="http://schema.org/PostalAddress"
                                  >
                                    <span
                                      itemProp="name"
                                      className="leading-[22px]"
                                    >
                                      Al Gawf Trading & Services Co. Ltd
                                    </span>
                                    PO Box:{" "}
                                    <span itemProp="postOfficeBoxNumber">
                                      1520
                                    </span>
                                    ,
                                    <span itemProp="addressLocality">
                                      Sana'a
                                    </span>
                                    ,
                                    <span itemProp="addressCountry">
                                      Republic of Yemen
                                    </span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+967206950207003"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +967206950207003
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:walid@algawf.com"
                                      itemProp="email"
                                      title="phone"
                                    >
                                      walid@algawf.com
                                    </a>{" "}
                                    /
                                    <a
                                      href="mailto:tmk@algawf.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      tmk@algawf.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="wrapper"
                              itemScope
                              itemType="http://schema.org/Organization"
                            >
                              <button
                                class="toggle"
                                onClick={(event) => {
                                  handleToggle(event);
                                  handleAddress(event);
                                }}
                              >
                                Qatar
                                <i
                                  class="fas fa-plus icon"
                                  onClick={(event) => {
                                    event.stopPropagation(); // Prevent triggering button click
                                    handleIconClick(event);
                                  }}
                                ></i>{" "}
                              </button>
                              <div class="content">
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Location}
                                      alt="locate-us"
                                      description="locate-us"
                                      itemProp="logo"
                                    />
                                  </div>
                                  <div
                                    className="poppins-regular font-16 cursor-pointer"
                                    title="click to view address on map"
                                    onClick={(event) => handleAddress(event)}
                                    itemProp="address"
                                    itemScope
                                    itemType="http://schema.org/PostalAddress"
                                  >
                                    <span
                                      itemProp="name"
                                      className="leading-[22px]"
                                    >
                                      Global Electric Company
                                    </span>
                                    PO Box No:{" "}
                                    <span itemProp="postOfficeBoxNumber">
                                      4844
                                    </span>
                                    ,
                                    <span itemProp="addressLocality">Doha</span>
                                    ,
                                    <span itemProp="addressCountry">Qatar</span>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Call}
                                      alt="call-us"
                                      description="call-us"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="tel:+97455849047"
                                      itemProp="telephone"
                                      title="phone"
                                    >
                                      +97455849047
                                    </a>
                                  </div>
                                </div>
                                <div class="pt-10 pb-10 d-flex">
                                  <div className="pr-10">
                                    <img
                                      src={Mail}
                                      alt="mail-to"
                                      description="mail-to"
                                    />
                                  </div>
                                  <div className="poppins-regular font-16">
                                    <a
                                      href="mailto:purushothama@oitcgroup.com"
                                      itemProp="email"
                                      title="email"
                                    >
                                      purushothama@oitcgroup.com
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
        <CustomMap />
      </div>
    </CSSTransition>
  );
};

export default ContactUs;
