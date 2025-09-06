import React, { useState, useEffect } from "react";
import ProductsBannerListing from "../assets/images/productListingBanner.png";
import SampleListing from "../assets/images/sampleListing.png";

import ButtonArrow from "../assets/images/button-arrow.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ProductsListing = () => {
  const [toggle, setToggle] = useState(false);
  const [partnerTab, setPartnerTab] = useState("company");
  const [locationTab, setLocationTab] = useState("manufacturing");
  const navigate = useNavigate()
const [cards,setCards]=useState()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const BaseUrl = "https://ukladmin.3mindsdigital.com";

  const productId = queryParams.get('productId');
  console.log('productId ID:', productId);
  const products = [
    { title: "Compressed Non Asbestos Joining Sheet", imgSrc: SampleListing },
    { title: "Product 2", imgSrc: SampleListing },
    { title: "Product 3", imgSrc: SampleListing },
    { title: "Product 4", imgSrc: SampleListing },
    { title: "Product 4", imgSrc: SampleListing },

    { title: "Product 4", imgSrc: SampleListing },

    { title: "Product 4", imgSrc: SampleListing },
  ];
  useEffect(() => {
    const toggles = document.getElementsByClassName("toggle");
    const contentDiv = document.getElementsByClassName("content");
    const icons = document.getElementsByClassName("icon");

    for (let i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener("click", () => {
        if (
          parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight
        ) {
          contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
          toggles[i].style.color = "var(--primary-color)";
          icons[i].classList.remove("fa-plus");
          icons[i].classList.add("fa-minus");
        } else {
          contentDiv[i].style.height = "0px";
          toggles[i].style.color = "#111130";
          icons[i].classList.remove("fa-minus");
          icons[i].classList.add("fa-plus");
        }

        for (let j = 0; j < contentDiv.length; j++) {
          if (j !== i) {
            contentDiv[j].style.height = 0;
            toggles[j].style.color = "#111130";
            icons[j].classList.remove("fa-minus");
            icons[j].classList.add("fa-plus");
          }
        }
      });
    } // Call the function once when the component mounts
  }, [toggle]);

  const handlePartner = (tab) => {
    console.log(tab);
    setPartnerTab(tab);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://ukladmin.3mindsdigital.com/api/product-details?filters[product_id][$eq]=${productId}&populate=*`);
       setCards(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    getData();
  }, [productId]);
  return (
    <>
      <Helmet>
        <title>Products Listing</title>
        <meta
          itemProp="description"
          content="Uni Klinger's product range excels in simplicity, durability, reliability, and environmental consciousness."
        />
      </Helmet>
      <div className="fluid-container mt-[100px]">
        <div
          className="banner-class relative text-center"
          itemScope
          itemType="https://schema.org/Product"
        >
          <img
            src={ProductsBannerListing}
            alt="Safety Valves"
            className="banner-image"
            description="Safety Valves"
            itemProp="image"
          />
          <div
            className="absolute product-banner-title text-white top-[40%] left-[5%]"
            itemProp="name"
          >
            {cards?.[0]?.attributes?.product?.data?.attributes?.Title}
          </div>
          <div
            className="font-16 text-white absolute  text-left top-[60%] left-[5%] w-[50%] "
            itemProp="description"
          >
                  {cards?.[0]?.attributes?.product?.data?.attributes?.Description}

          </div>
        </div>
        <div className="product-cards-container pt-50">
          <div class="container">
            <div class="row ">
              <div class="col-md-12">
                {/* <!-- Nav tabs --> */}
                <div class="card flex-align-center flex-col ">
                 

                  {/* <!-- Tab panes --> */}

                  <div class="grid grid-cols-4 gap-4 w-[100%]">
                  
                    <div class="tab-content poppins-regular col-span-12 ">
                      <div
                        role="tabpanel"
                        class="tab-pane active grid grid-cols-4 "
                        id="home"
                        className={`tab-pane ${
                          partnerTab === "company" ? "active" : ""
                        }`}
                      >
                        {/* <img src={AboutImg3} alt="card-image" style={{ height: 600, width: 360 }} className="banner-image p-1 h-full" /> */}

                        {cards?.map((product, index) => (
                          <div
                            className="product-listing-card flex flex-col"
                            itemProp="offers"
                            itemScope
                            itemType="https://schema.org/Offer"
                          >
                            <img
                              src={BaseUrl.concat(product?.attributes?.Image?.data?.attributes?.url)}
                              alt={product?.attributes?.Title}
                              description={product?.attributes?.Title}
                              className="h-2/3 w-full"
                              itemProp="image"
                            />
                            <div
                              className="product-listing-card-title w-full text-left  mb-5 "
                              itemProp="name"
                            >
                              {product?.attributes?.Title}
                            </div>
                            <div className="hover-buttons d-flex justify-around w-[100%] p-2">
                              <button onClick={()=>{                       navigate(`/product-detail?productId=${product.id}`);
}} className="view-more   d-flex items-center w-[100%]">
                                <span className="text-[12px] text-black text-center">
                                  View More
                                </span>
                              </button>

                              <button className="enquire text-center d-flex items-center w-[100%]">
                                <span className=" text-[12px] mr-1">
                                  Enquire Now
                                </span>
                                <span>
                                  <img
                                    src={ButtonArrow}
                                    alt="arrow"
                                    width={10}
                                    height={10}
                                    className="mt-0"
                                    description="arrow"
                                  />
                                </span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    
                    </div>
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

export default ProductsListing;
