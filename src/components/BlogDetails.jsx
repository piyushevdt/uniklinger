import React, { useState, useEffect, useRef } from "react";
import "../components/ProductDetail.css";
import WhiteLocation from "../assets/images/white-location.svg";
import SmallMap from "../assets/images/small-map.png";
import WhitePhone from "../assets/images/white-phone.svg";
import WhiteMail from "../assets/images/white-mail.svg";
import TextField from "@mui/material/TextField";
import ButtonArrow from "../assets/images/button-arrow.svg";
// import productDetail1 from "../assets/images/product1.png";

import { IoArrowForward } from "react-icons/io5";
import MobileInsightBanner from "../assets/images/InsightMobile.svg";
import ProductsBanner from "../assets/images/insighrtsDetailsBanner.png";
import BlogImage from "../assets/images/Blog.png";
import Watermark from "../assets/images/new-watermark.png";
import Share from "../assets/images/Share.png";
import Accordion from "./Accordian";
import ProductDetails5 from "../assets/images/product-details5.png";
import TataSteel from "../assets/images/tata-steel.png";
import CaseStudies from "./CaseStudies";
import { Helmet } from "react-helmet-async";
import productDetail from "../assets/images/product-details.svg";
import productDetail1 from "../assets/images/SpiralWoundGasket.svg";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Box, CircularProgress, Divider } from "@mui/material";

const BlogDetail = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [blogDetails, setBlogDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const scrollableSectionRef = useRef(null);

  useEffect(() => {
    // Lock scrolling on the body
    document.body.classList.add("scroll-lock");

    // Enable scrolling on the specific section
    if (scrollableSectionRef.current) {
      scrollableSectionRef.current.style.overflowY = "auto"; // or 'scroll' to always show scrollbar
      scrollableSectionRef.current.style.maxHeight = "80vh"; // Set a max height for the section
    }

    return () => {
      // Remove scroll lock on unmount
      document.body.classList.remove("scroll-lock");
    };
  }, []);

  const queryParams = new URLSearchParams(location.search);
  const BaseUrl = "https://ukladmin.3mindsdigital.com";

  const blogId = location.state?.blogId;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 1,
      questions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
      answer:
        "Impressions are a big deal when it comes to oSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      id: 2,
      questions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
      answer:
        "Impressions are a big deal when it comes to oSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      id: 3,
      questions:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
      answer:
        "Impressions are a big deal when it comes to oSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
  ];
  const [productTab, setProductTab] = useState("products");
  const handleProduct = (tab) => {
    console.log(tab);
    setProductTab(tab);
  };
  const [toggledStates, setToggledStates] = useState({
    product: false,
    size: false,
    specification: false,
    keyfeatures: false,
  });

  const handleToggle = (section) => {
    setToggledStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
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
  const isMobile = screenWidth <= 600;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://ukladmin.3mindsdigital.com/api/blogs?filters[id][$eq]=${blogId}&populate=*`
        );
        setBlogDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getData();
  }, [blogId]);

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
        <title>{blogDetails?.[0]?.attributes?.title}</title>
        <link rel="canonical" href={`https://uniklinger.com/insights-details/${blogDetails?.[0]?.attributes?.slug}`} />
        <meta
          itemProp="description"
          content={blogDetails?.[0]?.attributes?.metaDescription}
        />
      </Helmet>
      <div
        className="fluid-container"
        // {
        //   screenWidth > 600
        //     ? " pt-120 fluid-container"
        //     : " pl-[1%] pr-[1%] fluid-container "
        // }
        itemScope
        itemType="https://schema.org/Product"
        style={{ paddingTop: isMobile ? "50px" : "120px" }}
      >
        <div
          className=" product-details-container flex item-center h-450"
          itemProp="mainEntity"
          itemScope
          itemType="https://schema.org/Product"
        >
          <div
            // ref={scrollableSectionRef}
            // className="scrollable-section col-md-8 grid gap-10"
            className="col-md-8 grid gap-2"
            style={{ height: "100%" }}
            // style={{ height: "100%", overflowY: "auto" }}
          >
            <div className="product-image" style={{ height: 332 }}>
              <img
                src={isMobile ? MobileInsightBanner : ProductsBanner}
                alt="product-Detail"
                style={{ height: "100%", width: "100%" }}
                itemProp="image"
              />
            </div>
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  textAlign: "start",
                }}
              >
                {blogDetails?.[0]?.attributes?.title}
              </h1>
            </div>
            <Divider />
            <div className=" flex flex-row" style={{ marginTop: "10px" }}>
              <div
                style={{ backgroundColor: "#D4DDE7", color: "#221F20AB" }}
                className="blogTags "
                itemProp="name"
              >
                {blogDetails?.[0]?.attributes?.type}
              </div>
              <div
                style={{
                  backgroundColor: "#221F200F",
                  color: "#221F20AB",
                }}
                className="blogTags ml-2"
                itemProp="name"
              >
                {blogDetails?.[0]?.attributes?.read}
                min Read
              </div>
            </div>
            {/* <div style={{fontWeight: "bold", fontSize: "20px"}}>{blogDetails?.[0]?.attributes?.title}</div> */}
            <div
              dangerouslySetInnerHTML={{
                __html:
                  blogDetails?.[0]?.attributes?.details?.details?.content.replace(
                    /\n/g,
                    "<br />"
                  ),
              }}
              className="product-card-subtitle fullWidth text-[16px]"
              itemProp="description"
            >
              {/* {blogDetails?.[0]?.attributes?.details?.details?.content} */}
            </div>
            <div className="col-md-12 p-[0px] inline-flex md:inline-flex gap-4 flex-wrap md:flex-wrap">
              {[
                {
                  imgSrc: productDetail,
                  title: "Graphite foil",
                  subtitle: "(UKL GS)",
                },
                {
                  imgSrc: productDetail1,
                  title: "Spiral Wound Gasket",
                  subtitle: "",
                },
              ].map((product, index) => (
                <div
                  className="industry-card flex-1 min-w-[250px]" // Ensures equal width for all cards
                  key={index}
                  itemScope
                  itemType="https://schema.org/Product"
                >
                  <div>
                    <img
                      src={product.imgSrc}
                      style={{
                        height: isMobile ? 150 : 269,
                        width: "100%",
                      }}
                      className="industry-image"
                      itemProp="image"
                    />
                    <div
                      className="industry-content p-2"
                      style={{ backgroundColor: "#E7ECF4", minHeight: "80px" }}
                    >
                      <div className="flex flex-row items-center justify-between p-3">
                        <div
                          style={{
                            fontFamily: "DM Sans",
                            fontWeight: 700,
                            fontSize: 16,
                          }}
                        >
                          {product.title}
                          <br />
                          <span>{product.subtitle}</span>
                        </div>
                        <div>
                          <button
                            style={{
                              marginTop: 0,
                              fontSize: isMobile ? "12px" : "14px",
                              whiteSpace: "nowrap", // Prevents text from wrapping
                              padding: "5px 10px", // Adjust padding for better fit
                            }}
                            className="view-product text-center d-flex items-center"
                          >
                            View Product
                            <span></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="product-card-subtitle fullWidth text-[16px] "  itemProp="description">
              Uni Klinger manufactures a wide range of fluid control products
              like Piston Valves, Bellow Seal Valves, Steam Traps, etc. They
              focus on providing unique solutions that address shortcomings in
              existing products. Uni Klinger manufactures a wide range of fluid
              control products like Piston Valves, Bellow Seal Valves, Steam
              Traps, etc. They focus on providing unique solutions that address
              shortcomings in existing products. Uni Klinger manufactures a wide
              range of fluid control products like Piston Valves, Bellow Seal
              Valves, Steam Traps, etc. They focus on providing unique solutions
              that address shortcomings in existing products. Uni Klinger
              manufactures a wide range of fluid control products like Piston
              Valves, Bellow Seal Valves, Steam Traps, etc. They focus on
              providing unique solutions that address shortcomings in existing
              products.
            </div> */}
            {/* <div className="col-md-12 p-[0px] inline-flex  md:inline-flex gap-4 flex-wrap md:flex-nowrap">
<div 

              className="industry-card col-md-6 "
              itemScope
              itemType="https://schema.org/Product"
            >
              <div>
                <img
                  // src={BaseUrl.concat(
                  //   card.attributes.Image.data.attributes.url
                  // )}
                  src={productDetail}
                  style={{ height: 269, width: "100%" }}
                  className="industry-image"
                  itemProp="image"
                />
<div className="industry-content p-2" style={{backgroundColor:'#E7ECF4'}}>
                <div className=" flex flex-row  items-center justify-between ">
                  <div
                    style={{fontFamily:'DM Sans',fontWeight:700,fontSize:16}}
                  >
                    Graphite foil<br/>
                    <span>(UKL GS)</span>
                  </div>
                <div>
                <button style={{marginTop:0}}className="view-product text-center d-flex items-center">
                                <span className=" text-[12px] mr-1">
                                  View Product
                                </span>
                                <span>
                             
                                </span>
                              </button>
                </div>
              
                </div>

               
              </div>

              </div>
              
            </div>
            <div 

className="industry-card col-md-6 "
itemScope
itemType="https://schema.org/Product"
>
<div>
  <img
    // src={BaseUrl.concat(
    //   card.attributes.Image.data.attributes.url
    // )}
    src={productDetail}
    style={{ height: 269, width: "100%" }}
    className="industry-image"
    itemProp="image"
  />
<div className="industry-content p-2" style={{backgroundColor:'#E7ECF4'}}>
  <div className=" flex flex-row  items-center justify-between ">
    <div
      style={{fontFamily:'DM Sans',fontWeight:700,fontSize:16}}
    >
      Graphite foil<br/>
      <span>(UKL GS)</span>
    </div>
  <div>
  <button  style={{marginTop:0}} className="view-product  text-center d-flex items-center">
                  <span className=" text-[12px] mr-1">
                    View Product
                  </span>
                  <span>
               
                  </span>
                </button>
  </div>

  </div>

 
</div>

</div>

</div>
</div> */}

            {/* <div className="product-card-subtitle fullWidth text-[16px]"  itemProp="description">
Uni Klinger manufactures a wide range of fluid control products like Piston Valves, Bellow Seal Valves, Steam Traps, etc. They focus on providing unique solutions that address shortcomings in existing products. Uni Klinger manufactures a wide range of fluid control products like Piston Valves, Bellow Seal Valves, Steam Traps, etc. They focus on providing unique solutions that address shortcomings in existing products.
            </div> */}
          </div>

          <div className="col-md-4 product-details">
            <div
              className="flex justify-between items-center product-title-container"
              itemScope
              itemProp="name"
            >
              <div className="product-detail-title">
                <span className="poppins" style={{ fontSize: 20 }}>
                  Related <span className="font-bold">Blogs</span>
                </span>
              </div>
            </div>

            <div
              className="industry-card mt-[15px]"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div>
                <img
                  // src={BaseUrl.concat(
                  //   card.attributes.Image.data.attributes.url
                  // )}
                  src={BlogImage}
                  style={{ height: 172, width: "100%" }}
                  className="industry-image"
                  itemProp="image"
                />
              </div>
              <div className="industry-content bg-white p-[10px]">
                <div className=" flex flex-row pb-10 ">
                  <div
                    style={{ backgroundColor: "#D4DDE7", color: "#221F20AB" }}
                    className="blogTags "
                    itemProp="name"
                  >
                    Lifestyle
                  </div>
                  <div
                    style={{
                      backgroundColor: "#221F200F",
                      color: "#221F20AB",
                    }}
                    className="blogTags ml-2"
                    itemProp="name"
                  >
                    5 min Read
                  </div>
                </div>

                <div className="blog-description pb-10" itemProp="description">
                  {/* {card.attributes.Description} */}
                  Providing unique solutions that address shortcomings in
                  existing products.
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="poppins" style={{ fontSize: 14 }}>
                    19 Feb, 2023
                  </div>
                  <div>
                    <div className="md:mt-[0px] mt-10 d-flex items-center">
                      <a
                        href="/about-us"
                        title="About Us"
                        className="font-semibold text-black text-[14px] md:text-[16px] m-2 md:pt-3"
                      >
                        Know More
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

            <div
              className="industry-card mt-[15px]"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div>
                <img
                  // src={BaseUrl.concat(
                  //   card.attributes.Image.data.attributes.url
                  // )}
                  src={BlogImage}
                  style={{ height: 172, width: "100%" }}
                  className="industry-image"
                  itemProp="image"
                />
              </div>
              <div className="industry-content bg-white p-[10px]">
                <div className=" flex flex-row pb-10 ">
                  <div
                    style={{ backgroundColor: "#D4DDE7", color: "#221F20AB" }}
                    className="blogTags "
                    itemProp="name"
                  >
                    Lifestyle
                  </div>
                  <div
                    style={{
                      backgroundColor: "#221F200F",
                      color: "#221F20AB",
                    }}
                    className="blogTags ml-2"
                    itemProp="name"
                  >
                    5 min Read
                  </div>
                </div>

                <div className="blog-description pb-10" itemProp="description">
                  {/* {card.attributes.Description} */}
                  Providing unique solutions that address shortcomings in
                  existing products.
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="poppins" style={{ fontSize: 14 }}>
                    19 Feb, 2023
                  </div>
                  <div>
                    <div className="md:mt-[0px] mt-10 d-flex items-center">
                      <a
                        href="/about-us"
                        title="About Us"
                        className="font-semibold text-black text-[14px] md:text-[16px] m-2 md:pt-3"
                      >
                        Know More
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
