import React, { useState, useEffect } from "react";
import "../components/ProductDetail.css";
import WhiteLocation from "../assets/images/white-location.svg";
import SmallMap from "../assets/images/small-map.png";
import WhitePhone from "../assets/images/white-phone.svg";
import WhiteMail from "../assets/images/white-mail.svg";
import TextField from "@mui/material/TextField";
import ButtonArrow from "../assets/images/button-arrow.svg";
import DownloadIcon from "../assets/images/download.svg";

import productDetail from "../assets/images/product-details.png";
import productDetail1 from "../assets/images/products-details1.svg";
import productDetail2 from "../assets/images/products-details2.svg";
import productDetail3 from "../assets/images/products-details3.svg";
import productDetail4 from "../assets/images/products-details4.svg";
import lineSvg from "../assets/images/line.svg";
import addSvg from "../assets/images/add.svg";

import Accordion from "./Accordian";
import ProductDetails5 from "../assets/images/product-details5.png";
import TataSteel from "../assets/images/tata-steel.png";
import CaseStudies from "./CaseStudies";
import { Helmet } from "react-helmet-async";
import Form from "./Form";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [productDetails, setProductDetails] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const BaseUrl = "https://ukladmin.3mindsdigital.com";

  const productId = queryParams.get("productId");

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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://ukladmin.3mindsdigital.com/api/product-details?filters[id][$eq]=${productId}&populate=*`
        );
        setProductDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getData();
  }, [productId]);
  return (
    <>
      <Helmet>
        <title>Product Details</title>
      </Helmet>
      <div
        className={screenWidth > 820 ? "mx-20 pt-120" : "pl-[5%] pr-[5%]"}
        itemScope
        itemType="https://schema.org/Product"
      >
        <div
          className="container product-details-container flex item-center h-450"
          itemProp="mainEntity"
          itemScope
          itemType="https://schema.org/Product"
        >
          <div className="col-md-5 product-image">
            <img
              src={BaseUrl.concat(
                productDetails?.[0]?.attributes?.Image?.data?.attributes?.url
              )}
              alt="product-Detail"
              itemProp="image"
            />
          </div>
          <div className="col-md-7 product-details">
            <div
              className="flex justify-between items-center product-title-container"
              itemScope
              itemProp="name"
            >
              <div className="product-detail-title">
                <span className="graphite-text">
                  {productDetails?.[0]?.attributes?.Title?.split("(")?.[0]}
                </span>{" "}
                <span className="ukl-text">
                {
  productDetails?.[0]?.attributes?.Title?.includes("(")
    ? "("+ productDetails[0].attributes.Title.split("(")[1] 
    : ""
}
                </span>
              </div>
              {/* <div className="Sealing-container"
              itemProp="category">Fluid Sealing Division</div> */}
            </div>
            <div className="small-text pb-5">Graphite Sheets</div>
            <div>
              <div
                onClick={() => {
                  handleToggle("product");
                }}
                className="d-flex items-center flex-row justify-between"
              >
                <div className="small-semibold-text pt-20 pb-20">
                  PRODUCT DESCRIPTION{" "}
                </div>
                <img
                  className={
                    toggledStates["product"] ? "minus-class" : "plus-class"
                  }
                  src={toggledStates["product"] ? lineSvg : addSvg}
                />
              </div>
              <div
                style={{ display: toggledStates["product"] ? "block" : "none" }}
                className="small-text colors-primary pt-3 pb-20"
                itemProp="description"
              >
                {productDetails?.[0]?.attributes?.Description}
              </div>
            </div>
            <div className="horizontal-lines mt-1"></div>
            <div>
              <div
                onClick={() => {
                  handleToggle("size");
                }}
                className="d-flex items-center flex-row justify-between"
              >
                <div className="small-semibold-text pt-20 pb-20">
                  SIZES AVAILABLE
                </div>
                <img
                  className={
                    toggledStates["size"] ? "minus-class" : "plus-class"
                  }
                  src={toggledStates["size"] ? lineSvg : addSvg}
                />
              </div>
              <div
                className="pb-3"
                style={{ display: toggledStates["size"] ? "block" : "none" }}
              >
                {productDetails?.[0]?.attributes?.SizesAvailable?.map(
                  (size) => {
                    return (
                      <>
                        <div className="flex ">
                          <div
                            itemProp="additionalProperty"
                            itemScope
                            itemType="https://schema.org/PropertyValue"
                          >
                            <div className="light-text" itemProp="name">
                              Width
                            </div>
                            <div
                              className="color-black light-text"
                              itemProp="value"
                            >
                              {size?.Width}
                            </div>
                          </div>
                          <div
                            className="ml-[50px]"
                            itemProp="additionalProperty"
                            itemScope
                            itemType="https://schema.org/PropertyValue"
                          >
                            <div className="light-text" itemProp="name">
                              Roll Length
                            </div>
                            <div
                              className="color-black light-text"
                              itemProp="value"
                            >
                              {size?.RollLength}
                            </div>
                          </div>
                        </div>
                        <div
                          className="pt-3"
                          itemProp="additionalProperty"
                          itemScope
                          itemType="https://schema.org/PropertyValue"
                        >
                          <div className="light-text" itemProp="name">
                            Thickness
                          </div>
                          <div
                            className="color-black light-text"
                            itemProp="value"
                          >
                            {size?.Thickness}
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
              </div>
            </div>
            <div className="horizontal-lines mt-1"></div>
            <div>
              <div
                onClick={() => {
                  handleToggle("specification");
                }}
                className="d-flex items-center flex-row justify-between"
              >
                <div className="small-semibold-text pt-20 pb-20">
                  SPECIFICATIONS
                </div>
                <img
                  className={
                    toggledStates["specification"]
                      ? "minus-class"
                      : "plus-class"
                  }
                  src={toggledStates["specification"] ? lineSvg : addSvg}
                />
              </div>
              <div
                className="pt-3 pb-3 d-flex flex-col h-[135px] justify-evenly"
                style={{
                  display: toggledStates["specification"] ? "block" : "none",
                }}
                itemProp="additionalProperty"
                itemScope
                itemType="https://schema.org/PropertyValue"
              >

                {
                  productDetails?.[0]?.attributes?.Specification?.map(
                    (specification) => {
                      return (

<>
<div className="colors-primary small-text ">
                  <span className="font-weight-600" itemProp="name">
                    Material:{" "}
                  </span>
                  <span itemProp="value">{specification?.Material}</span>
                </div>
                <div className="colors-primary small-text">
                  <span className="font-weight-600" itemProp="name">
                    {" "}
                    Application:{" "}
                  </span>{" "}
                  <span itemProp="value">
                    {specification?.Application}
                  </span>
                </div>
                <div className="colors-primary small-text ">
                  <span className="font-weight-600" itemProp="name">
                    Formats:{" "}
                  </span>
                  <span itemProp="value">
                  {specification?.Formats}
                  </span>
                </div>
                <div className="colors-primary small-text ">
                  <span className="font-weight-600" itemProp="name">
                    Usage:{" "}
                  </span>
                  <span itemProp="value">
                   {specification?.Usage}
                  </span>
                </div>
</>
                      )})
                }
               
              </div>
            </div>
            <div className="horizontal-lines mt-1"></div>
            <div className="w-full">
              <div
                onClick={() => {
                  handleToggle("keyfeatures");
                }}
                className="d-flex items-center flex-row justify-between"
              >
                <div className="small-semibold-text pt-20 pb-20">
                  KEY FEATURES
                </div>
                <img
                  className={
                    toggledStates["keyfeatures"] ? "minus-class" : "plus-class"
                  }
                  src={toggledStates["keyfeatures"] ? lineSvg : addSvg}
                />
              </div>

              <div
                style={{
                  display: toggledStates["keyfeatures"] ? "block" : "none",
                }}
                className="flex justify-between w-[90%]"
                itemProp="additionalProperty"
                itemScope
                itemType="https://schema.org/PropertyValue"
              >
                 <div className="d-flex items-center flex-row justify-between">
                  {" "}
{
                  productDetails?.[0]?.attributes?.KeyFeatures?.map(
                    (feature) => {
                      return (

               
                  <div className="w-[22%]">
                    <img src={productDetail1} itemProp="image" />
                    <div className="key-features" itemProp="name">
                      {feature?.Info1}
                    </div>
                  </div>
                 
                
                      )})
}</div>
              </div>
              <div className=" mt-[10px] d-flex  items-baseline">
                <div className="download-button-container mr-10">
                  <button className="download-button  flex items-baseline justify-center">
                    <span className="pr-2.5 download-text">Download</span>
                    <span>
                      <img src={DownloadIcon} alt="arrow" className="ml-2" />
                    </span>
                  </button>
                </div>
                <div>
                  <button className="button-style flex items-baseline justify-center">
                    <span className="pr-2.5">Enquire Now</span>
                    <span>
                      <img src={ButtonArrow} alt="arrow" className="mt-2" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-[70px]"
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          <div className="Frequently-text font-weight-600" itemProp="headline">
            Case<span className="font-weight-300"> Study</span>
          </div>
          <div itemProp="mainEntity">
            <CaseStudies title="Study" />
          </div>
        </div>
        <div
          className="container"
          style={{ paddingTop: "20px" }}
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="Frequently-text font-weight-600">
            Frequently Asked <span className="font-weight-300">Questions</span>
          </div>
          <div
            className="faq-container padding-t-50 w-3/4 "
            style={{ margin: "0 auto" }}
          >
            <div className="col-md-12">
              {/* <!-- Nav tabs --> */}
              <div className=" flex-content-center flex-dir-col">
                <ul
                  className="nav navbar-tabs w-full flex-align-center space-around"
                  role="tablist"
                >
                  <li
                    role="presentation"
                    className="width-25"
                    onClick={() => handleProduct("all")}
                  >
                    <a
                      href="#all"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                      className="poppins-regular-style"
                      title="All"
                    >
                      All
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className="active width-25"
                    onClick={() => handleProduct("products")}
                  >
                    <a
                      href="#home"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                      className="poppins-regular-style"
                      title="Products"
                    >
                      Products
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className="width-25"
                    onClick={() => handleProduct("industry")}
                  >
                    <a
                      href="#Industry"
                      aria-controls="profile"
                      role="tab"
                      data-toggle="tab"
                      className="poppins-regular-style"
                      title="Industry"
                    >
                      Industry
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className="width-25"
                    onClick={() => handleProduct("trial")}
                  >
                    <a
                      href="#trial"
                      aria-controls="messages"
                      role="tab"
                      data-toggle="tab"
                      className="poppins-regular-style"
                      title="Product Trial"
                    >
                      Product Trial
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className="width-25"
                    onClick={() => handleProduct("lorem")}
                  >
                    <a
                      href="#lorem"
                      aria-controls="settings"
                      role="tab"
                      data-toggle="tab"
                      className="poppins-regular-style"
                    >
                      Lorem Ipsum
                    </a>
                  </li>
                </ul>

                {/* <!-- Tab panes --> */}
                {productTab === "products" ? (
                  <div role="tabpanel" className="tabs-pane active">
                    {data.map((item) => {
                      const { id, questions, answer } = item;
                      return (
                        <div
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                          key={id}
                        >
                          <Accordion {...item} />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
                {productTab === "all" ? (
                  <div role="tabpanel" className="tabs-pane active">
                    {data.map((item) => {
                      const { id, questions, answer } = item;
                      return (
                        <div
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                          key={id}
                        >
                          <Accordion key={id} {...item} />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
                {productTab === "industry" ? (
                  <div role="tabpanel" className="tabs-pane active">
                    {data.map((item) => {
                      const { id, questions, answer } = item;
                      return (
                        <div
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                          key={id}
                        >
                          <Accordion key={id} {...item} />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
                {productTab === "trial" ? (
                  <div role="tabpanel" className="tabs-pane active">
                    {data.map((item) => {
                      const { id, questions, answer } = item;
                      return (
                        <div
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                          key={id}
                        >
                          <Accordion key={id} {...item} />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
                {productTab === "lorem" ? (
                  <div role="tabpanel" className="tabs-pane active">
                    {data.map((item) => {
                      const { id, questions, answer } = item;
                      return (
                        <div
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                          key={id}
                        >
                          <Accordion key={id} {...item} />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
};

export default ProductDetail;
