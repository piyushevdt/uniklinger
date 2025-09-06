import React, { useEffect, useState } from "react";
import AboutBanner from "../assets/images/IgnitingChange.png";
import AboutBannerMobile from "../assets/images/IngnitingChangeMobile.png";
import Backdrop from "@mui/material/Backdrop";
import "../assets/css/slide.css";
import "../components/AboutUs.css";
// import AboutImg1 from "../assets/images/Process-Plant.jpg";
import AboutImg1 from "../assets/images/Process-Plant.svg";
import AboutImg2 from "../assets/images/blockchain-7177284.jpg";
import AboutImg3 from "../assets/images/ai-generated-9043401.png";
import AboutImg4 from "../assets/images/technology-4085029.jpg";
import Close from "../assets/images/close.png";

import CsrImage from "../assets/images/children-306607_1920.jpg";
// import RndImage from "../assets/images/Engineer with factory in the background.jpg";
import RndImage from "../assets/images/about-side-image.svg";

import DottoedArrow from "../assets/images/DottoedArrow.svg";
import Logo from "../assets/images/new-watermark.png";
import CircularProgress from "@mui/material/CircularProgress";

import Piston from "../assets/images/Shape.png";
import PistonLogo from "../assets/images/pistonLogo.png";
import Sealed from "../assets/images/Shape2.png";
import Steam from "../assets/images/Shape3.png";
import SteamLogo from "../assets/images/SteamTrapsLogo.png";
import JoinSheetLogo from "../assets/images/JoinSheetLogo.png";
import SafetyValveLogo from "../assets/images/SafetyValveLogo.png";

import certificate1 from "../assets/certifications/pdf1.pdf";
import certificate2 from "../assets/certifications/pdf2.pdf";

import certificate3 from "../assets/certifications/pdf3.pdf";
import certificate4 from "../assets/certifications/pdf4.pdf";
import certificate5 from "../assets/certifications/pdf5.pdf";
import certificate6 from "../assets/certifications/pdf6.pdf";
import certificate7 from "../assets/certifications/pdf7.pdf";
import certificate8 from "../assets/certifications/pdf8.pdf";
import certificate9 from "../assets/certifications/pdf9.pdf";
import certificate10 from "../assets/certifications/pdf10.pdf";

import AR1 from "../assets/documents/Annual Report on CSR activities 31.03.2021.pdf";
import AR2 from "../assets/documents/Annual Report on CSR activities 31.03.2022.pdf";
import AR3 from "../assets/documents/Annual Report on CSR activities 31.03.2023.pdf";
import AR4 from "../assets/documents/Annual Report on CSR activities 31.03.2024.pdf";
import AR5 from "../assets/documents/UKL_Corporate Social Responsibility Policy_22.05.15.pdf";

import { Helmet } from "react-helmet-async";
import PDFThumbnail from "../utils/getpdf";
import Slider from "react-slick";
import Prev from "../assets/images/prevArrow.svg";
import Next from "../assets/images/nextArrow.svg";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import { Box, Grid, Typography } from "@mui/material";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#FFFFFF",
        color: "#1E1D1C",
        zIndex: 9,
        height: isMobile ? 54 : 64,
        width: isMobile ? 54 : 64,
        borderRadius: "2px",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        boxShadow: "4px 4px 10px 0px #0973D840",
        marginTop: isMobile ? "390px" : "100px",
        marginRight: isMobile ? "100px" : "20px",
      }}
      onClick={onClick}
    >
      <img
        style={{
          position: "absolute",
          top: isMobile ? 17 : 21,
          left: isMobile ? 22 : 26,
        }}
        src={Next}
        alt="next"
      />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#1E1D1C",
        color: "#FFFFFF",
        zIndex: 9,
        height: isMobile ? 54 : 64,
        width: isMobile ? 54 : 64,
        borderRadius: "2px",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        boxShadow: "4px 4px 20px 0px #0973D840",
        marginTop: isMobile ? "390px" : "100px",
        marginLeft: isMobile ? "100px" : "20px",
      }}
      onClick={onClick}
    >
      <img
        style={{
          position: "absolute",
          top: isMobile ? 17 : 21,
          left: isMobile ? 20 : 24,
        }}
        src={Prev}
        alt="prev"
      />
    </div>
  );
};

// Modal styling (customize as needed)
const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const [partnerTab, setPartnerTab] = useState("company");
  const [locationTab, setLocationTab] = useState("manufacturing");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfToDisplay, setPdfToDisplay] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const handlePDFClick = (pdfUrl) => {
  //   setSelectedPDF(pdfUrl);
  // };
  const settings = {
    dots: false,
    infinite: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    centerMode: true,
    // responsive: [
    //   {
    //     breakpoint: 768, // Mobile breakpoint
    //     settings: {
    //       nextArrow: <NextArrow />,
    //       prevArrow: <PrevArrow />,
    //     },
    //   },
    // ],
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 2000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = selectedPDF;
    link.download = "document.pdf";
    link.click();
    setSelectedPDF(null);
    setDownloading(false);
  };
  const handleDownloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfToDisplay;
    link.download = "certificate.pdf";
    link.click();
  };

  // useEffect(() => {
  //   // Scroll to the top of the page when the component mounts
  //   window.scrollTo(0, 0);
  // }, []);
  // useEffect(() => {
  //   const toggles = document.getElementsByClassName("toggle");
  //   const contentDiv = document.getElementsByClassName("content");
  //   const icons = document.getElementsByClassName("icon");

  //   for (let i = 0; i < toggles.length; i++) {
  //     toggles[i].addEventListener("click", () => {
  //       if (
  //         parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight
  //       ) {
  //         contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
  //         toggles[i].style.color = "var(--primary-color)";
  //         icons[i].classList.remove("fa-plus");
  //         icons[i].classList.add("fa-minus");
  //       } else {
  //         contentDiv[i].style.height = "0px";
  //         toggles[i].style.color = "#111130";
  //         icons[i].classList.remove("fa-minus");
  //         icons[i].classList.add("fa-plus");
  //       }

  //       for (let j = 0; j < contentDiv.length; j++) {
  //         if (j !== i) {
  //           contentDiv[j].style.height = 0;
  //           toggles[j].style.color = "#111130";
  //           icons[j].classList.remove("fa-minus");
  //           icons[j].classList.add("fa-plus");
  //         }
  //       }
  //     });
  //   } // Call the function once when the component mounts
  // }, [toggle]);

  const handlePartner = (tab) => {
    console.log(tab);
    setPartnerTab(tab);
    window.history.pushState(null, null, `#${tab}`);

    setTimeout(() => {
      const targetElement = document.getElementById(tab);
      if (targetElement) {
        const yOffset = -200; // Adjust as per the header height
        const xOffset = (window.innerWidth - targetElement.offsetWidth) / 2; // Center horizontally
        const y =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        const x =
          targetElement.getBoundingClientRect().left +
          window.pageXOffset -
          xOffset;

        window.scrollTo({ top: y, left: x, behavior: "smooth" });
      }
    }, 100);
  };

  const handleLocation = (tab) => {
    console.log(tab);
    setLocationTab(tab);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    setSelectedPDF("");
  };

  // useEffect(() => {
  //   // const hash = window.location.hash.replace("#", "");
  //   // console.log(hash,"hash")
  //   // if (hash) {
  //   //   setPartnerTab(hash);
  //   // }
  //   console.log("in here")
  // }, []);

  useEffect(() => {
    const handleUrlChange = () => {
      const hash = location.hash;
      if (hash) {
        const id = hash.replace("#", ""); // Remove the '#' from the hash
        setPartnerTab(id);
        handlePartner(id);

        // Scroll to the target element after a slight delay
        setTimeout(() => {
          const targetElement = document.getElementById(id);
          if (targetElement) {
            const yOffset = -200; // Adjust this offset for any fixed headers
            const y =
              targetElement.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 100); // Adjust the delay if necessary
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Call the function on initial load
    handleUrlChange();
  }, [location]); // Run effect whenever `location` changes
  // function handleToggle(event) {
  //   console.log("Clicked element:", event.target);
  //   console.log("Parent element:", event.target.parentElement);
  //   if (event) {
  //     let content = event?.target?.parentElement?.children[1];
  //     console.log("Content element:", content);

  //     if (!content) {
  //       console.error("Content element not found");
  //       return;
  //     }

  //     if (content?.style?.maxHeight) {
  //       content.style.maxHeight = null;
  //       content.style.height = null;
  //       event.target.children[0].classList.add("fa-plus");
  //       event.target.children[0].classList.remove("fa-minus");
  //     } else {
  //       content.style.maxHeight = content.scrollHeight + "px";
  //       content.style.height = content.scrollHeight + "px";
  //       event.target.children[0].classList.add("fa-minus");
  //       event.target.children[0].classList.remove("fa-plus");
  //     }
  //   }
  // }

  const handleIconClick = (event) => {
    event.stopPropagation();

    console.log("Clicked element:", event.target);

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
  };
  const handleToggle = (index) => {
    console.log("here", index);
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Ethical Leadership & Integrity",
      content:
        "We maintain high ethical standards across all operations, ensuring transparency, integrity, and trust. Our governance policies prioritize corporate responsibility, fairness, and compliance to build a culture of accountability and respect.",
    },
    {
      title: "Community & Employee Engagement",
      content:
        "We actively involve employees in community initiatives, conducting programs that focus on education, health, and environmental care. Together, we aim to uplift local communities and foster meaningful, positive change.",
    },
    {
      title: "Sustainable Development & Empowerment",
      content:
        "We are dedicated to improving the lives of underserved communities through initiatives in education, healthcare, and environmental sustainability, empowering individuals and building long-term solutions for societal and economic development.",
    },
  ];

  const reports = [
    {
      title: "Annual Report - CSR Activities 31.03.2021",
      description: "Annual Report on CSR Activities",
      date: "31/03/2021",
      AnnualReport: AR1,
    },
    {
      title: "Annual Report - CSR Activities 31.03.2022",
      description: "Annual Report on CSR Activities",
      date: "31/03/2022",
      AnnualReport: AR2,
    },
    {
      title: "Annual Report - CSR Activities 31.03.2023",
      description: "Annual Report on CSR Activities",
      date: "31/03/2023",
      AnnualReport: AR3,
    },
    {
      title: "Annual Report - CSR Activities 31.03.2024",
      description: "Annual Report on CSR Activities",
      date: "31/03/2024",
      AnnualReport: AR4,
    },
    {
      title: "UKL Corporate Social Responsibility Policy 22.05.15",
      description: "UKL Corporate Social Responsibility Policy",
      date: "22/05/2015",
      AnnualReport: AR5,
    },
  ];
  const handleDownloadAR = (report) => {
    const link = document.createElement("a");
    link.href = report; // Use the dynamic report link from the clicked item
    link.download = report.split("/").pop(); // Dynamically set the download filename
    link.click();
  };

  const handlePDFClick = (pdfUrl) => {
    setPdfToDisplay(pdfUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPdfToDisplay(null);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "90%", // Default width for small screens
      maxWidth: "600px", // Restrict maximum width for larger screens
      height: "80vh", // Responsive height
      padding: "20px", // Add padding for better layout
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Add shadow for aesthetics
      borderRadius: "10px", // Optional: Rounded corners
      marginTop: isMobile ? "30px" : 0,
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dim the background
      zIndex: 1000, // Ensure the modal is above all other elements
    },
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
    <>
      <Helmet>
        <title>About Us - Uniklinger.com</title>
        <link rel="canonical" href="https://uniklinger.com/about-us" />
        <meta
          name="description"
          content="UKL leverages advanced technology and top-tier manufacturing to provide innovative solutions, boosting efficiency and sustainability across industries."
        />
      </Helmet>

      <div
        className=" container flex flex-col  items-center"
        style={{
          background: "white",
          paddingTop: "100px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
        itemScope
        itemType="http://schema.org/Organization"
      >
        <header className=" text-center ">
          <h1
            className="text-center big-bold pb-10 about-us-title"
            itemProp="name"
          >
            Uniklinger
          </h1>
          <div className="big-regular about-us-description">
            We are UKL, a Neterwala Group joint venture{" "}
            {screenWidth > 820 ? <br /> : ""} with Klinger AG in India.
          </div>
          <div className="small-regular line-height about-us-mini-description">
            We deliver customer-centric solutions worldwide, combining
            innovation with world-class manufacturing in India.
          </div>
        </header>
        {isMobile ? (
          <section className=" flex flex-col items-center w-[100%]">
            <div className="gap-8 mt-30 flex items-center w-full z-10	 ">
              <div className="clients-team">
                <div className="text-[24px] team-count" itemProp="foundingDate">
                  40+
                </div>
                <div className="font-15-text color-primary">
                  Years Of Experience
                </div>
              </div>
              <div className="clients-team">
                <div className="text-[24px] team-count">1600+</div>

                <div className="font-15-text color-primary">
                  Industry Customers
                </div>
              </div>
            </div>

            <div className=" gap-8 mt-9 flex items-center w-full z-10	 ">
              <div className="clients-team">
                <div className="team-count text-[24px]">4000+</div>
                <div className="font-15-text color-primary text-[12px]">
                  Plants Served
                </div>
              </div>
              <div className="clients-team">
                <div
                  className="team-count text-[24px]"
                  itemProp="numberOfEmployees"
                >
                  3
                </div>
                <div className="font-15-text color-primary text-[12px]">
                  Manufacturing Units
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className=" p-0 gap-5 mt-30 flex items-center w-full z-10	 ">
            <div className="clients-team">
              <div className="team-count" itemProp="foundingDate">
                40+
              </div>
              <div className="font-16-text color-primary">
                Years Of Experience
              </div>
            </div>
            <div className="clients-team">
              <div className="font-16-text color-primary">
                <div className="team-count">1600+</div>
                <div className="font-16-text color-primary">
                  Industry Customers
                </div>
              </div>
            </div>
            <div className="clients-team">
              <div className="team-count">4000+</div>
              <div className="font-16-text color-primary">Plants Served</div>
            </div>
            <div className="clients-team">
              <div className="team-count" itemProp="numberOfEmployees">
                3
              </div>
              <div className="font-16-text color-primary">
                Manufacturing Units
              </div>
            </div>
          </section>
        )}
        <div
          style={{ height: 250, width: { xs: "340px", sm: "600px" } }}
          className="relative w-full"
        >
          <img
            style={{
              margin: "0px 20px",
              height: isMobile ? 335 : 350,
              width: 320,
              position: "absolute",
              left: isMobile ? "6%" : "39%",
              top: isMobile ? -86 : -86,
            }}
            alt="arrow"
            src={DottoedArrow}
          />
          <div className="brief-uni">
            <span>A Brief History of Uniklinger</span>
          </div>
        </div>

        <div
          className="  row ml-0 mr-0 md:mt-10 sx:mt-5 product-card-container"
          style={{
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "100%",
            // margin: "20px"
          }}
        >
          <div
            className="col-md-6 md:p-0 padding-none "
            style={{ marginTop: isMobile ? "10px" : 0 }}
          >
            <img
              style={{ width: "100%" }}
              src={AboutImg1}
              alt="A Brief History of Uniklinger"
              className="banner-image p-5"
              description="A Brief History of Uniklinger"
            />
          </div>
          {/* <div className="relative"> */}
          {/* <img style={{ float: "right" }} src={Logo} /> */}
          <div className="col-md-6  pt-[20px] md:p-20 lg:p-[8rem]">
            <h3 className="text-[26px]  md:pt-[20px] md:text-[36px] color-primary poppins-semibold vision-title">
              A Vision Takes Root
            </h3>
            <div className="text-align-left small-regular md:pt-[10px] md:pr-[10%]  text-[14px] width-full vision-description">
              For over forty years, we have enabled process plants be safer,
              more efficient and sustainable.
            </div>
            <div className="text-align-left small-regular md:pt-[20px] md:pr-[10%] text-[14px] width-full vision-description">
              We are deeply committed in our efforts to combat climate change.
              All our products and solutions are targeted to save energy thereby
              reducing carbon footprints of our customers.
            </div>
          </div>
          {/* </div> */}
        </div>
        <div
          className="  product-cards-container "
          style={screenWidth <= 820 ? { marginTop: "30px" } : {}}
        >
          <div className=" col-md-12 px-[0px] py-[30px] align-items-center">
            <div className="col-md-6 p-0 neterwala-group-container">
              <div
                className=" md:px-8 px-3  pb-[40px]"
                style={{
                  fontSize: isMobile ? "30px" : "45px",
                  fontWeight: 550,
                  color: "#ffffff",
                }}
                itemProp="parentOrganization"
                itemScope
                itemType="http://schema.org/Organization"
              >
                About The Neterwala Group
                <hr
                  className="horizontal-floating-line"
                  style={{ marginTop: "10px" }}
                />
              </div>
            </div>
            <div className="col-md-6 px-3 md:px-5  py-3 text-[50px] md:pt-[8%]  small-regular neterwala-description">
              The Neterwala Group is a diversified business conglomerate with
              leadership in metallurgy, aerospace manufacturing, and data
              services for the oil, gas, and mineralogy sectors. <br />
              <br />
              With a robust presence in India and the United Kingdom, the group
              is dedicated to pioneering innovation and maintaining the highest
              standards of quality across its wide-ranging operations.
            </div>
          </div>

          <div
            className="w-full neterwala-group-subcontainer px-10 mt-2"
            style={{ backgroundColor: "#eef2f7" }}
          >
            <div className="width-200 box">
              <div className="text-center box-section-title">
                60+ <br /> Years Of Experience
              </div>
            </div>
            <div className="dottedLine-class my-10"></div>
            <div className="width-200 box">
              <div className="text-center box-section-title">
                3000+ <br /> Customers
              </div>
            </div>
            <div className="dottedLine-class my-10"></div>
            <div className="width-200 box">
              <div className="text-center  box-section-title">
                15 <br /> Factories
              </div>
            </div>
            <div className="dottedLine-class my-10"></div>
            <div className="width-200 box">
              <div className="text-center  box-section-title">
                2500+ <br /> Employees
              </div>
            </div>
          </div>
        </div>
        {isMobile ? (
          <section className="">
            <img
              src={AboutImg2}
              alt="INNOVATING INDUSTRIES WORLDWIDE"
              description="INNOVATING INDUSTRIES WORLDWIDE"
              className="banner-image p-7"
              style={{ marginBottom: "-30px" }}
            />
            <div className="industries-worldwide-container   col-md-6 gap-2  ">
              <div
                className="industries-text pl-[16px]"
                style={{ fontSize: isMobile ? "16px" : "20px" }}
              >
                INNOVATING INDUSTRIES WORLDWIDE
              </div>
              <div
                className="poppins-regular text-[14px]  color-white mt-0 md:mt-14 industries-description"
                style={{ fontSize: isMobile ? "12px" : "14px" }}
              >
                UKL harnesses cutting-edge technology and world-class
                manufacturing capabilities to deliver innovative solutions that
                enhance efficiency and sustainability across various industries.
                Our commitment to continuous improvement and customer-focused
                innovation drives us to set new benchmarks in industrial
                excellence globally.
              </div>
              <div className="horizontal-line mt-0 md:mt-[20px]"></div>
            </div>
          </section>
        ) : (
          <section
            className="  row ml-0 mr-0 mt-12 relative"
            style={{ paddingLeft: "5%", paddingRight: "5%" }}
          >
            <div className="col-md-6 p-0">
              <img
                src={AboutImg2}
                alt="INNOVATING INDUSTRIES WORLDWIDE"
                description="INNOVATING INDUSTRIES WORLDWIDE"
                className="banner-image p-5"
              />
            </div>
            <div className="col-md-6 gap-8 industries-worldwide-container p-16">
              <div className="industries-text ">
                INNOVATING INDUSTRIES WORLDWIDE
              </div>
              <div className="text-[14px] color-white mt-[20px] poppins text-left">
                UKL harnesses cutting-edge technology and world-class
                manufacturing capabilities to deliver innovative solutions that
                enhance efficiency and sustainability across various industries.
                Our commitment to continuous improvement and customer-focused
                innovation drives us to set new benchmarks in industrial
                excellence globally.
              </div>
              <div
                className="horizontal-line "
                style={{ marginTop: isMobile ? "10px" : "20px" }}
              ></div>
            </div>
          </section>
        )}

        <section className=" ">
          <div className="row pt-50">
            <div className="col-md-12" style={{ padding: "10px" }}>
              {/* <!-- Nav tabs --> */}
              <Box
                className=" flex-align-center flex-col"
                sx={{ px: { xs: 2, md: 0 } }}
              >
                <ul
                  className="nav nav-tabs w-full flex-align-center space-around"
                  role="tablist"
                  style={{
                    paddingLeft: isMobile ? "10px" : 0,
                    paddingRight: isMobile ? "10px" : 0,
                  }}
                >
                  <li
                    id="company"
                    role="presentation"
                    className={`${
                      partnerTab === "company" ? "active w-33" : "w-33"
                    }`}
                    onClick={() => handlePartner("company")}
                  >
                    <a
                      href="#company"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                      className="poppins-regular text-[14px]"
                      title="Our Company"
                    >
                      Our Company
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={`${
                      partnerTab === "csr" ? "active w-33" : "w-33"
                    }`}
                    onClick={() => handlePartner("csr")}
                  >
                    <a
                      href="#csr"
                      aria-controls="profile"
                      role="tab"
                      data-toggle="tab"
                      className="poppins-regular text-[14px]"
                    >
                      CSR
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={` ${
                      partnerTab === "services" ? "active w-33" : "w-33"
                    }`}
                    onClick={() => handlePartner("services")}
                  >
                    <a
                      href="#services"
                      aria-controls="messages"
                      role="tab"
                      data-toggle="tab"
                      className="poppins-regular text-[14px]"
                    >
                      Our Manufacturing Services
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={` ${
                      partnerTab === "rnd" ? "active w-33" : "w-33"
                    }`}
                    onClick={() => handlePartner("rnd")}
                  >
                    <a
                      href="#rnd"
                      aria-controls="settings"
                      role="tab"
                      data-toggle="tab"
                      className="poppins-regular text-[14px] "
                    >
                      Research, Development & Innovation
                    </a>
                  </li>
                </ul>

                {/* <!-- Tab panes --> */}
                <div
                  className="tab-content poppins-regular ml-10 "
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  <div
                    role="tabpanel"
                    className={`tab-pane ${
                      partnerTab === "company" ? "active" : ""
                    }`}
                    id="company"
                    style={
                      partnerTab === "company"
                        ? {
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                          }
                        : { display: "none" }
                    }
                  >
                    <div
                      className="flex "
                      style={{
                        flexDirection: isMobile ? "column" : "row",
                        // paddingLeft: "30px",
                        // paddingRight: "20px",
                        justifyContent: isMobile ? "center" : "space-between",
                      }}
                    >
                      <img
                        src={AboutImg3}
                        alt="Our Company"
                        description="Engineer.Innovate.Deliver. Secure. Repeat"
                        style={{
                          height: isMobile ? "100%" : 500,
                          width: isMobile ? 250 : 360,
                        }}
                        className="banner-image p-1 h-full engineer-image object-cover"
                      />
                      <div className="col-md-8 p-30  engineer-container">
                        <div className="font-46 ">
                          <div
                            className="color-blue"
                            // style={{ lineHeight: isMobile ? 2 : 2.4 }}
                          >
                            Engineer. Innovate.
                          </div>
                          <div className="color-red">
                            Deliver. Secure. Repeat
                          </div>
                        </div>
                        <div
                          className="font-16-regular leading-[28px] "
                          style={{ marginTop: isMobile ? "10px" : "40px" }}
                        >
                          UKL serves industries worldwide with a robust network
                          of distributors and dealers, ensuring our engineered
                          solutions reach every corner of the globe.
                          <br />
                          <br />
                          Our three manufacturing plants in western India
                          produce high-quality products that meet international
                          standards, enabling us to support greenfield and
                          brownfield projects across diverse sectors globally.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    className={`tab-pane ${
                      partnerTab === "csr" ? "active" : ""
                    }`}
                    id="csr"
                    style={
                      partnerTab === "csr"
                        ? { display: "flex", flexDirection: "column" }
                        : { display: "none" }
                    }
                  >
                    {" "}
                    <div
                      className="flex "
                      style={{
                        flexDirection: isMobile ? "column" : "row",
                        // paddingLeft: "30px",
                        // paddingRight: "20px",
                        justifyContent: isMobile ? "center" : "space-between",
                      }}
                    >
                      <img
                        src={CsrImage}
                        alt="CSR"
                        description="Giving back to Society & People"
                        style={{
                          height: isMobile ? "100%" : 500,
                          width: isMobile ? 250 : 360,
                        }}
                        className="banner-image p-1 h-full engineer-image object-cover"
                      />
                      <div
                        className="col-md-8 p-30  engineer-container"
                        style={{}}
                      >
                        <div className="font-46 ">
                          <div className="color-blue">Giving back to </div>
                          <div
                            className="color-red"
                            style={{
                              position: "relative",
                              top: isMobile ? "-10px" : "-20px",
                            }}
                          >
                            Society & People
                          </div>
                        </div>
                        <div className="font-16-regular leading-[28px] ">
                          At Uni Klinger Ltd., we're committed to making a
                          positive impact on the lives of underprivileged
                          communities near our business units. Our Corporate
                          Social Responsibility (CSR) efforts focus on three key
                          areas: Health, Education, and Environment.
                          <br />
                          <br />
                          We engage with the community through a two-tiered
                          approach. First, our employees actively participate in
                          various programs and activities within and around our
                          business unit locations. Second, we support social
                          programs through the Maneckji and Shirinbai Neterwala
                          Foundation (MSNF), a public charitable trust.
                          <br />
                          <br />
                          MSNF provides vital medical aid, educational loans,
                          and domestic and overseas scholarships to those in
                          need. The trust also operates a school serving over
                          600 students in Tumsar.
                        </div>
                      </div>
                    </div>
                    <div className="big-heading mt-[50px]">
                      CSR <span style={{ fontWeight: 600 }}>Reports</span>
                    </div>
                    <div
                      className="grid grid-cols-3"
                      style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        // marginLeft: "20px",
                        flexWrap: "wrap",
                        // paddingRight: "20px"
                      }}
                    >
                      <Grid container spacing={3}>
                        {reports?.map((product, index) => (
                          <Grid item xs={12} sm={6} md={4}>
                            <div
                              className="reports-listing-card  px-8 pt-[30px] pb-[30px] justify-between"
                              itemProp="offers"
                              itemScope
                              itemType="https://schema.org/Offer"
                            >
                              <div className="flex flex-col justify-between gap-5">
                                <div
                                  className="reports-title poppins w-full "
                                  itemProp="name"
                                  style={{ color: "#000" }}
                                >
                                  {product?.title}
                                </div>
                                <div className="reports-description">
                                  {product?.description}
                                </div>

                                {/* <div
                              style={{ color: "#969696" }}
                              className="reports-description"
                            >
                              Date - {product?.date}
                            </div> */}
                              </div>

                              <div
                                style={{
                                  color: "#DB1F51",
                                  textDecoration: "underline",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handleDownloadAR(product?.AnnualReport)
                                }
                                className="reports-description"
                              >
                                Read Report
                              </div>
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  </div>
                  <div>
                    <div
                      role="tabpanel"
                      className={`tab-pane ${
                        partnerTab === "services" ? "active" : ""
                      }`}
                      id="services"
                      style={
                        partnerTab === "services"
                          ? {
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }
                          : { display: "none" }
                      }
                    >
                      {/* <div className="big-heading" style={{ lineHeight: 1 }}>
                        Piston Valves & Bellow Sealed Valves
                      </div> */}
                      {/* <Typography sx={{fontSize: {xs: "26px", md: "48px"}, fontWeight: 500}}>Piston Valves & Bellow Sealed Valves</Typography> */}

                      <div
                        className="w-full flex justify-between"
                        style={{
                          flexDirection: isMobile ? "column" : "row",
                          flexWrap: "wrap",
                        }}
                      >
                        <div
                          className="row ml-0 mr-0 mt-10 resources-card"
                          style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "#F4D7DF",
                          }}
                        >
                          <div className="relative ">
                            <img
                              style={{
                                height: "100px",
                                width: "100px",
                                float: "right",
                                // marginBottom: 10,
                              }}
                              src={Piston}
                              alt="Piston Valves"
                              description="Piston Valves & Bellow Sealed Valves"
                            />
                            <div className="p-10 pt-[50px]">
                              <div
                                className="heading "
                                style={{
                                  marginTop: isMobile ? 0 : "10px",
                                  marginBottom: isMobile ? 0 : "5px",
                                  lineHeight: isMobile ? "1.2" : "normal",
                                }}
                              >
                                <img
                                  className="w-24 mb-3"
                                  src={PistonLogo}
                                  alt="piston-logo"
                                  description="Piston Valves & Bellow Sealed Valves"
                                />
                                Piston Valves and Bellow Seal Valves
                              </div>
                              <div
                                className=" small-regular w-full font-14 pt-5"
                                style={{ width: isMobile ? "100%" : "70%" }}
                              >
                                Uni Klinger’s Fluid Control Division in
                                Ahmednagar offers seatless and glandless Piston
                                Valves with KXGT rings. Enhancing performance
                                and achieving steam, fuel, and CO2 savings with
                                bubble-tight shutoff valves. Bellow Seal Valves
                                ensure zero leakage for hazardous media,
                                supporting safety and compliance with industry
                                norms.{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="row ml-0 mr-0 mt-10 resources-card"
                          style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "#E8D9E5",
                          }}
                        >
                          <div className="relative ">
                            <img
                              style={{
                                height: "100px",
                                width: "100px",
                                float: "right",
                                marginBottom: 10,
                              }}
                              src={Sealed}
                              alt="Sealed Valves"
                              description="Below Sealed Valves"
                            />
                            <div className="p-10 pt-[50px]">
                              <div
                                className="heading "
                                style={{
                                  marginTop: isMobile ? 0 : "10px",
                                  marginBottom: isMobile ? 0 : "5px",
                                  lineHeight: isMobile ? "1.2" : "normal",
                                }}
                              >
                                <img
                                  className="w-24 mb-3"
                                  src={SteamLogo}
                                  alt="steam-logo"
                                  description="Steam Trapping & Condensate Recovery Solutions"
                                />
                                Steam Trapping & Condensate Recovery Solutions
                              </div>
                              <div
                                className=" small-regular w-full font-14 pt-5"
                                style={{ width: isMobile ? "100%" : "70%" }}
                              >
                                Uni Klinger offers advanced steam traps,
                                condensate recovery and engineering solutions.
                                As pioneers of India’s intelligent Trap Valve
                                Station (ITVS) with 24×7 monitoring, we offer
                                certified reliability with ISO, IBR, EIL, CE and
                                KNPC approvals, delivering innovative and
                                customer-centric solutions.{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="row ml-0 mr-0 mt-10 resources-card"
                          style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "#D5DDE4",
                          }}
                        >
                          <div className="relative ">
                            <img
                              style={{
                                height: "100%",
                                width: "100px",
                                float: "right",
                                marginBottom: 10,
                              }}
                              src={Steam}
                              alt="Piston Valves"
                              description="Piston Valves & Bellow Sealed Valves"
                            />
                            <div className="p-10 pt-[50px]">
                              <div
                                className="heading "
                                style={{
                                  marginTop: isMobile ? 0 : "10px",
                                  marginBottom: isMobile ? 0 : "5px",
                                  lineHeight: isMobile ? "1.2" : "normal",
                                }}
                              >
                                <img
                                  className="w-24 mb-3"
                                  src={JoinSheetLogo}
                                  alt="joingSheet-logo"
                                  description="Jointing Sheets and Gaskets"
                                />
                                Jointing Sheets and Gaskets
                              </div>
                              <div
                                className=" small-regular w-full font-14 pt-5"
                                style={{ width: isMobile ? "100%" : "70%" }}
                              >
                                Uni Klinger manufactures a complete range of
                                non-asbestos compressed fibre, semi-metallic,
                                graphite, and expanded PTFE gaskets, meeting
                                zero-leak requirements in Vadu,Pune. Our
                                products feature anti-stick, anti-corrosion, and
                                anti-leak properties, ensuring superior sealing
                                for various industries, including food and
                                pharma.{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="row ml-0 mr-0 mt-10 resources-card"
                          style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "#BDD1E3",
                          }}
                        >
                          <div className="relative ">
                            <img
                              style={{
                                height: "100px",
                                width: "100px",
                                float: "right",
                                marginBottom: 10,
                              }}
                              src={Piston}
                              alt="Piston Valves"
                              description="Piston Valves & Bellow Sealed Valves"
                            />
                            <div className="p-10 pt-[50px]">
                              <div
                                className="heading "
                                style={{
                                  marginTop: isMobile ? 0 : "10px",
                                  marginBottom: isMobile ? 0 : "5px",
                                  lineHeight: isMobile ? "1.2" : "normal",
                                }}
                              >
                                <img
                                  className="w-24 mb-3"
                                  src={SafetyValveLogo}
                                  alt="SafetyValve-logo"
                                  description="Safety and Control Valves Division"
                                />
                                Safety and Control Valves Division{" "}
                              </div>
                              <div
                                className=" small-regular w-full font-14 pt-5"
                                style={{ width: isMobile ? "100%" : "70%" }}
                              >
                                Uni Klinger’s Safety & Control Valve Division in
                                Sanaswadi Pune manufactures API- and
                                ASME-compliant valves under AST SpA’s license,
                                serving refinery, petrochemical, and fertilizer
                                sectors. We focus on compliance, efficiency, and
                                customer satisfaction through continuous
                                improvement.{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <img src={AboutImg3} alt="card-image" style={{ height: 600, width: 360 }} className="banner-image p-1 h-full" />
                  <div className="col-md-8 p-30 mt-10" style={{}}>
                    <div className="font-46" >
                      <span className="color-blue">Engineer. Innovate.</span><br />
                      <span className="color-red">Deliver. Secure. Repeat</span>
                    </div>
                    <div className="font-16-regular ">
                      Uniklinger embodies a philosophy of constant progress and innovation encapsulated in the phrase "Engineer. Innovate. Deliver. Secure." This commitment starts with their team of skilled engineers who design and develop top-notch fluid control and sealing solutions.
                      <br /><br />
                      Uniklinger doesn't just stop there, though. They prioritize continuous improvement and stay at the forefront of the industry by actively seeking new and advanced solutions. Delivering on their promises is equally important.
                    </div>

                  </div> */}
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    className={`tab-pane ${
                      partnerTab === "rnd" ? "active" : ""
                    }`}
                    id="rnd"
                    style={
                      partnerTab === "rnd"
                        ? {
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                          }
                        : { display: "none" }
                    }
                  >
                    <div
                      className="flex "
                      style={{
                        flexDirection: isMobile ? "column" : "row",
                        // paddingLeft: "30px",
                        // paddingRight: "20px",
                        justifyContent: isMobile ? "center" : "space-between",
                      }}
                    >
                      <img
                        src={RndImage}
                        alt="Research,Development & Innovation"
                        description="Pioneering innovative solutions
                      for the industry"
                        style={{
                          height: isMobile ? "100%" : 500,
                          width: isMobile ? 250 : 360,
                        }}
                        className="banner-image p-1 h-full engineer-image object-cover"
                      />
                      <div
                        className="col-md-8 p-30  engineer-container"
                        style={{}}
                      >
                        <div className="font-46">
                          <span className="color-blue">
                            Pioneering innovative solutions{" "}
                          </span>

                          <span className="color-red">for the industry</span>
                        </div>
                        <div
                          className="font-16-regular leading-[28px] "
                          style={{ marginTop: isMobile ? "10px" : "40px" }}
                        >
                          Uni Klinger, a JV of Neterwala Group and Klinger AG,
                          has consistently innovated industrial solutions.
                          Building upon Klinger AG's pioneering inventions, the
                          company has expanded its product range to include
                          safety valves, control valves, and gaskets. Through
                          continuous research and development, Uni Klinger has
                          introduced innovations like bellow sealed valves and
                          energy-efficient steam products. Its focus on quality
                          and sustainability has earned it global recognition,
                          making it a leading provider of reliable solutions.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </section>
        <section
          className="mt-10 w-full"
          style={{
            marginBottom: isMobile ? "5rem" : "15rem",
            overflow: isMobile ? "visible" : "hidden", // Prevents overflow
            height: isMobile ? "700px" : "600px",
          }}
        >
          <div className="container">
            <div className="big-bold text-center font-300">Certifications</div>
            <div className="certifications-slider-container">
              <div className="certifications-slider">
                <Slider {...settings} className="mt-40">
                  {/* Add certificates here */}
                  {[
                    certificate1,
                    certificate2,
                    certificate3,
                    certificate4,
                    certificate5,
                    certificate6,
                    certificate7,
                    certificate8,
                    certificate9,
                    certificate10,
                  ].map((certificate, index) => (
                    <div className="wiper-item" key={index}>
                      <div
                        className="wiper__image"
                        onClick={() => handlePDFClick(certificate)}
                      >
                        <PDFThumbnail pdfUrl={certificate} />
                      </div>
                    </div>
                  ))}
                </Slider>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={() => {
                    document.body.style.overflow = "auto";
                    closeModal();
                  }}
                  style={{
                    content: {
                      ...customStyles.content,
                      width: isMobile ? "100%" : "60%", // Adjust width dynamically
                      height: isMobile ? "90%" : "80%",
                    },
                    overlay: customStyles.overlay,
                  }}
                  contentLabel="PDF Modal"
                >
                  <div className="flex flex-row justify-between items-baseline">
                    {/* <h3>PDF Preview</h3> */}
                    <Typography sx={{ fontSize: { xs: "18px", md: "24px" } }}>
                      PDF Preview
                    </Typography>
                    <div
                      style={{
                        textAlign: "right",
                        marginTop: "10px",
                        display: "flex",
                        alignItems: "baseline",
                      }}
                    >
                      <button onClick={closeModal}>
                        <img
                          style={{ width: "20px", height: "20px" }}
                          src={Close}
                          alt="close"
                        />
                      </button>
                    </div>
                  </div>

                  {pdfToDisplay && (
                    <iframe
                      src={pdfToDisplay}
                      style={{
                        width: "100%",
                        height: isMobile ? "90%" : "90%", // Adjust the height to fit in the viewport
                        border: "none",
                      }}
                      title="PDF Preview"
                    />
                  )}
                </Modal>
              </div>
            </div>
          </div>
        </section>

        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={selectedPDF}
          onClick={handleClose}
        >
          {downloading ? (
            <CircularProgress color="#2B9CFF" />
          ) : (
            <div className="pdf-popup">
              <div className="pdf-popup-content">
                <p>Would you like to download the PDF?</p>

                <div className="flex flex-row justify-between  items-center">
                  <button
                    className="enquire"
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={handleDownload}
                  >
                    Download
                  </button>
                  <button
                    className="view-more flex items-center justify-center"
                    style={{
                      color: "black",
                      fontSize: 16,
                      border: "1px solid black",
                    }}
                    onClick={() => setSelectedPDF(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </Backdrop>
        <div
          className={
            screenWidth >= 820
              ? " row  d-flex items-center "
              : "  global-footprint-container mt-[0px]"
          }
        >
          <div
            className="col-md-5 pl-36 global-footprint-content"
            style={{ marginBottom: "28px" }}
          >
            <div className="big-regular global-footprint-title">
              <span className="font-300">Our Global</span>{" "}
              <span style={{ fontWeight: 600 }}>Footprints</span>
            </div>
            <div className="font-16-regular leading-[28px] mt-5">
              UKL proudly serves industries worldwide with a robust network of
              distributors and dealers, ensuring our engineered solutions reach
              every corner of the globe. Our three manufacturing plants in
              western India produce high-quality products that meet
              international standards, enabling us to support greenfield and
              brownfield projects across diverse sectors globally.
            </div>
          </div>
          <div className="col-md-7 global-footprint-image">
            <img
              style={{ width: "100%" }}
              src={AboutImg4}
              alt="About-Img"
              className=""
            />
          </div>
        </div>

        {/* <div className="mt-[50px] scroller " data-speed="fast">
          <div className="big-bold text-center">
            <span className="font-300">Our</span> Clients
          </div>
          <div className="box-wrapper pt-12 gap-5">
            <div className="scroller-box"></div>
            <div className="scroller-box"></div>
            <div className="scroller-box"></div>
            <div className="scroller-box"></div>
            <div className="scroller-box"></div>
            <div className="scroller-box"></div>
          </div>
        </div> */}

        <div className="container mt-24" style={{ width: "100%" }}>
          <a href="https://uniklinger.com/careers" title="careeers">
            <img
              src={isMobile ? AboutBannerMobile : AboutBanner}
              alt="Careers"
              style={{ width: "100%" }}
              description="Careers"
              className="about-banner-image"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
