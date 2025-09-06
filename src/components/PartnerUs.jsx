import React, { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import PartnerBannerLarge from "../assets/images/PartnerBannerLarge.png";
import PartnerBannerSmall from "../assets/images/PartnerBannerSmall.png";
import ImageCircle from "../assets/images/circleImg.png";
import CircleImgSmall from "../assets/images/CircleImgSmall.png";
import HandShakeImage from "../assets/images/handShake.png";

import { useNavigate } from "react-router-dom";

const PartnerUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    // <div className='m-4 ml-[10rem] p-4 h-[42rem] flex flex-col items-center'>
    //   <div className='text-5xl m-8'><span className='font-bold'>Partner</span> With Us</div>
    //   <div className='m-4 p-4 shadow-md '>
    //     <img src={partnerus} alt=''  />
    //   </div>
    // </div>
    // <div
    //   className="container p-4 flex flex-col items-center mt-[60px] mb-[20px] md:mb-0 "
    //   itemScope
    //   itemType="https://schema.org/Organization"
    // >
    //   <div className="text-5xl mb-12 ml-12 mr-12" itemProp="headline">
    //     <span className="font-bold">Partner</span> With Us
    //   </div>
    //   <div
    //     style={{ padding: isMobile ? "0px 20px" : "0px" }}
    //     onClick={() => {
    //       navigate("/partner-with-us");
    //     }}
    //     className=" flex justify-start"
    //     itemProp="potentialAction"
    //     itemScope
    //     itemType="https://schema.org/Action"
    //   >
    //     <div
    //       style={{ width: "100%" }}
    //       itemProp="image"
    //       itemScope
    //       itemType="https://schema.org/ImageObject"
    //     >
    //       <img
    //         src={isMobile ? partner : partnerus}
    //         alt="Collaborate With Us"
    //         description="Collaborate With Us"
    //         style={{ width: "100%", height: "auto", cursor: "pointer" }}
    //         itemProp="url"
    //       />
    //     </div>
    //   </div>
    // </div>

    !isMobile ? (
      <div
        className="container p-4 flex flex-col items-center mt-[60px] mb-[20px] md:mb-0 "
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div
          className="text-5xl mb-12 ml-12 mr-12 text-center"
          itemProp="headline"
        >
          <span className="font-bold">Partner</span> With Us
        </div>
        <a className="relative w-full" href="/partner-with-us">
          <img
            src={PartnerBannerLarge}
            alt="Collaborate With Us"
            className="w-full h-full object-cover z-0"
          />
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(${ImageCircle})`,
              backgroundBlendMode: "normal",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full p-16">
              <h1 className="text-3xl text-left text-white leading-10">
                Partner with us for <b>safe</b>, <b>efficient</b>, <br />
                and <b>sustainable</b> industry.
              </h1>
              <div
                className="mt-4 py-2 relative font-bold text-2xl inline-flex items-center gap-6 text-white"
              >
                Discover More <MdArrowOutward />
                <div className="contact-us"></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    ) : (
      <div
        className="p-12 flex flex-col items-center mt-[60px] mb-[20px] md:mb-0 "
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div
          className="text-4xl mb-12 ml-12 mr-12 text-center"
          itemProp="headline"
        >
          <span className="font-bold">Partner</span> With Us
        </div>
        <a className="relative w-full" href="/partner-with-us">
          <img
            src={PartnerBannerSmall}
            alt="Collaborate With Us"
            className="w-full h-[330px] object-cover z-0"
          />
          <div
            className="absolute inset-0 top-0 left-12 bg-no-repeat"
            style={{
              backgroundImage: `url(${CircleImgSmall})`,
              backgroundSize: "233px",
              backgroundBlendMode: "normal",
            }}
          >
            <img
              src={HandShakeImage}
              alt="Collaborate With Us"
              className="object-cover absolute top-0 right-10"
            />
            <div className="absolute top-0 left-0 w-full h-full px-4 pt-44 pb-4 flex items-start justify-center flex-col">
              <h1 className="text-2xl text-left text-white leading-10">
                Partner with us for <b>safe</b>, <b>efficient</b>, and{" "}
                <b>sustainable</b> industry.
              </h1>
              <div
                className="mt-4 py-2 font-bold relative text-2xl inline-flex items-center gap-4 text-white"
              >
                Discover More <MdArrowOutward />
                <div className="contact-us"></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  );
};

export default PartnerUs;
