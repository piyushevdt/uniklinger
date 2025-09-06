import React, { useEffect, useState } from 'react';
import ProductsBanner from '../assets/images/productMainBanner.png';
import ButtonArrow from '../assets/images/button-arrow.svg';
import Watermark from '../assets/images/new-watermark.png';
import MobileProductBanner from '../assets/images/productMainMobileBanner.png';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import './Product.css';
import useResizeObserver from '../hooks/useResizeObserver'; // Import the custom hook
import { useNavigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

const Products = () => {
  const [cards, setCards] = useState([]);
  const screenWidth = useResizeObserver(); // Use the custom hook
  const [isLoading, setIsLoading] = useState(true);
const navigate= useNavigate()
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://ukladmin.3mindsdigital.com/api/products?populate=*');
        setCards(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    getData();
  }, []);

  const downloadPDF = (url) => {
    window.open(`https://ukladmin.3mindsdigital.com/${url}`, '_blank');
  };

  const handleEnquiry = (title) => {
    const emailAddress = 'salescso@uniklinger.com';
    const subject = `${title}'s Enquiry`;
    const body = `Hey, I wanted to know more about ${title}`;
    const mailtoUrl = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  const handleRedirection = (url) => {
    window.location.href = url;
  };

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
      <CircularProgress  />
    </Box>
     ) : (
    <>
      <Helmet>
        <title>Products - Uniklinger.com</title>
        <link rel="canonical" href="https://uniklinger.com/products" />
        <meta
          name="description"
          content="We deliver customer-focused solutions worldwide, blending innovative technology with top-tier Indian manufacturing for industries like oil, chemicals, pharmaceuticals, food, textiles, and more."
        />
      </Helmet>
      <div className="fluid-container " style={{ paddingTop: '60px' }}>
      <div className=" container banner-class" itemScope itemType="https://schema.org/Brand">
          <img
            src={screenWidth <= 800 ? MobileProductBanner : ProductsBanner}
            alt="products-banner"
            className="banner-image"
            itemProp="logo"
          />
        </div>
        <div className="container product-cards-container ">
          {cards.map((card) => (
            <div key={card.id} className="product-card mt-30 bg-white row ml-0 mr-0"
            itemScope
            itemType="https://schema.org/Product">
              <div className="col-md-5 p-0">
                <img
                  src={`https://ukladmin.3mindsdigital.com${card.attributes.Image.data.attributes.url}`}
                  alt={card?.attributes?.Title}
                  description={card?.attributes?.Description}
                  className="banner-image p-5"
                  itemProp="image"
                />
              </div>
              <div
                className="col-md-7 card-padding"
                style={{
                  backgroundImage: `url(${Watermark})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPositionX: '100%',
                }}
              >
                <div className="product-card-title" itemProp="name">{card.attributes.Title}</div>
                <div className="product-card-subtitle pt-20" itemProp="description">{card.attributes.Description}</div>
                <div className="product-usecase-title pt-50 pb-15">Use Case</div>
                <div className="usecase-grid">
                  <div className="grid-1" itemProp="additionalType">{card.attributes.Usecase[0].usecase1}</div>
                  <div className="grid-2"  itemProp="additionalType">{card.attributes.Usecase[0].usecase2}</div>
                </div>
                <div className="buttons-container pt-30 d-flex  justify-center md:justify-start items-center md:items-baseline">
                  <button className="button-class d-flex items-center mt-0"   itemProp="url" 
                  // onClick={() => {
                  //      navigate(`/products-listing?productId=${card.id}`);
                  // }}
                  onClick={() => handleRedirection(card.attributes.redirect_url)}
                  >
                    <span className="button-arrow-padding">Discover Now</span>
                    <div>
                      <img style={{width:15}} src={ButtonArrow} alt="arrow" description="arrow" />
                    </div>
                  </button>
                  <button className="secondary-button" itemProp="contactPoint" onClick={() => handleEnquiry(card.attributes.Title)}>
                    <span className="pr-10">Enquire Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
