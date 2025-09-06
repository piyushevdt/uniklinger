import React from "react";
import Slider1 from "../assets/images/slider-1.png";
import OwlCarousel from "react-owl-carousel";

function HomePageSlider() {
  return (

    <OwlCarousel classNameName="owl-theme" loop={true} margin={10} nav
    itemScope
    itemType="http://schema.org/ImageGallery">
    <div className="item"
     itemScope
     itemType="http://schema.org/ImageObject">

<img
          src={Slider1}
          alt="Slider Image 1"
          itemType="http://schema.org/ImageObject"
          itemProp="image"
        />
        <meta itemProp="name" content="Slider Image 1" />
        <meta itemProp="description" content="An image of our featured content" />
   
    </div>
    <div
        className="item"
        itemScope
        itemType="http://schema.org/ImageObject"
      >
        <img
          src={Slider1}
          alt="Slider Image 2"
          itemType="http://schema.org/ImageObject"
          itemProp="image"
        />
        <meta itemProp="name" content="Slider Image 2" />
        <meta itemProp="description" content="An image of our featured content" />
      </div>
      <div
        className="item"
        itemScope
        itemType="http://schema.org/ImageObject"
      >
        <img
          src={Slider1}
          alt="Slider Image 3"
          itemType="http://schema.org/ImageObject"
          itemProp="image"
        />
        <meta itemProp="name" content="Slider Image 3" />
        <meta itemProp="description" content="An image of our featured content" />
      </div>
   </OwlCarousel> 

  );
}

export default HomePageSlider;


