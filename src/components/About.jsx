import React, { useState, useEffect } from "react";
import doc from "../assets/images/about-side-image.svg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1440);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1440);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container mobileHide flex justify-center flex-wrap ">
        <div className="  flex about-us flex-row h-auto md:h-[500px] w-full relative ">
          <div className=" bg-[#FFFFFF] md:bg-[#EEF2F7] h-auto md:h-full w-100%  py-[40px]  md:p-[40px]">
            <h1 className="text-[#DB1F51] about-title  text-left md:text-left text-[22px] font-medium md:mx-2 tracking-widest	">
              ABOUT US
            </h1>
            {/* <div className="md:m-2 text-[14px] md:text-[18px] font-normal color-[#2A2A2A]">
            Uni Klinger, a collaboration between Neterwala Group and Klinger AG,
            pioneers niche fluid control and sealing solutions globally.
            </div>
            <br /> */}
            <div className="md:m-2 about-description  text-[14px] md:text-[18px] font-normal color-[#2A2A2A]">
              UKL, a joint venture of the Neterwala Group and Klinger AG, has
              over 40 years of experience in making process plants safer, more
              efficient, and sustainable. We provide customer-centric solutions
              globally, combining innovative technology with world-class
              manufacturing in India.
            </div>
            <div
              className="md:m-2 mt-[20px] about-description text-[14px] md:text-[18px] font-normal color-[#2A2A2A]"
              // style={{ paddingTop: "10px" }}
            >
              {" "}
              Our products cater to diverse industries, including oil
              refineries, chemical and petrochemical plants, pharmaceuticals,
              food and beverage, paper, textiles, and tyre manufacturing.
            </div>
            <div className="md:mt-[0px] mt-6 d-flex items-center">
              <a
                href="/about-us"
                title="About Us"
                className="font-semibold text-black text-[14px] md:text-[16px] m-2 md:pt-3"
              >
                Discover More
              </a>
              <IoArrowForward className="text-black md:m-2 origin-bottom -rotate-45 size-7 ml-2 mb-2 md:size-8" />
            </div>
            <div
              className="gradLine"
              style={{
                marginLeft: 7,
                width: "120px"
              }}
            ></div>
          </div>
          <div className="w-100%  h-[30rem] md:h-full">
            <img
              src={doc}
              className="w-100% h-full object-fill"
              alt="Industry"
            />
            {/* <div className="desktopHide absolute  flex-row sm:hidden bottom-8 left-[-10%] right-8 ">
            <div className="text-center flex flex-col items-center border-1 border-blue-300 w-[154px] md:w-[calc(50% - 2rem)] h-[85px] md:h-[8rem] bg-white p-[20px] md:p-7 md:mb-0">
              <div
                className=" poppins text-[12px] md:text-[16px]"
                style={{position: 'relative',top: '5px'}}
              >
                <b >40+</b> Years of Experience
              </div>
            </div>
            <div className="text-center flex items-center border-1 border-blue-300 w-[154px] md:w-[calc(50% - 2rem)] h-[85px] md:h-[8rem] bg-white p-[10px] md:p-7 md:mb-0">
              <div className=" dmsans text-[12px] md:text-[16px]">
                Safety & Statutory compliance as per International Standards
              </div>
            </div>
            <div className="text-center flex items-center border-1 border-blue-300 w-[154px] md:w-[calc(50% - 2rem)] h-[85px] md:h-[8rem] bg-white p-[10px] md:p-7 md:mb-0">
              <div className="text-[12px] md:text-[16px]">
                Expertise and products covering 15+ industries
              </div>
            </div>
            <div className="text-center flex items-center border-1 border-blue-300 w-[154px] md:w-[calc(50% - 2rem)] h-[85px] md:h-[8rem] bg-white p-[10px] md:p-7 md:mb-0">
              <div className="text-[12px] md:text-[16px]">
                Reduction in Carbon Footprint through process efficiency
              </div>
            </div>
        </div> */}
          </div>
          <div className=" mobileHide absolute bottom-8 left-8 right-8 pl-[20px] pr-[20px] flex justify-between">
            <div className="text-center border-2 border-blue-300 w-full  bg-white mr-10  p-7 ">
              <div className="text-[12px] md:text-[16px] opensans ">
                <b className="dmsans" style={{ fontSize: "24px" }}>
                  40+
                </b>{" "}
                <br />
                Trained Specialists
              </div>
            </div>
            <div className="text-center border-2 border-blue-300 w-full d-flex items-center  bg-white  mr-10 p-7">
              <div className=" opensans text-[12px] md:text-[16px]">
                Safety & Statutory compliance as per International Standards
              </div>
            </div>
            <div className="text-center border-2 border-blue-300 w-full d-flex items-center  bg-white mr-10 p-7">
              <div className=" opensans text-[12px] md:text-[16px]">
                Expertise and products covering <b>15+</b> industries
              </div>
            </div>
            <div className="text-center border-2 border-blue-300 w-full  bg-white mr-10 p-7">
              <div className=" opensans text-[12px] md:text-[16px]">
                Reduction in Carbon <br /> Footprint through
                <br /> process efficiency
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" desktopHide flex justify-center flex-wrap ">
        <div className=" desktopHide flex about-us flex-row h-auto w-full relative">
          <div className="fluid-container">
            <div className=" bg-[#FFFFFF] md:bg-[#EEF2F7] h-auto md:h-full w-full   py-[40px]  md:p-[40px]">
              <h1 className="text-[#DB1F51] about-title  text-left md:text-left text-[22px] font-medium md:mx-2 tracking-widest	">
                ABOUT US
              </h1>
              {/* <div className="md:m-2 text-[14px] md:text-[18px] font-normal color-[#2A2A2A]">
            Uni Klinger, a collaboration between Neterwala Group and Klinger AG,
            pioneers niche fluid control and sealing solutions globally.
          </div>
          <br /> */}
              <div className="md:m-2 about-description  text-[14px] md:text-[18px] font-normal color-[#2A2A2A]">
                UKL, a joint venture of the Neterwala Group and Klinger AG, has
                over 40 years of experience in making process plants safer, more
                efficient, and sustainable. We provide customer-centric
                solutions globally, combining innovative technology with
                world-class manufacturing in India.
              </div>
              <div
                className="md:m-2 mt-[20px] about-description text-[14px] md:text-[18px] font-normal color-[#2A2A2A]"
                // style={{ paddingTop: "10px" }}
              >
                {" "}
                Our products cater to diverse industries, including oil
                refineries, chemical and petrochemical plants, pharmaceuticals,
                food and beverage, paper, textiles, and tyre manufacturing.
              </div>
              <div className="md:mt-[0px] mt-6 d-flex items-center">
                <a
                  href="/about-us"
                  title="About Us"
                  className="font-semibold text-black text-[14px] md:text-[16px] m-2 md:pt-3"
                >
                  Discover More
                </a>
                <IoArrowForward className="text-black md:m-2 origin-bottom -rotate-45 size-7 ml-2 mb-2 md:size-8" />
              </div>
              <div
                className="gradLine"
                style={{
                  marginLeft: 7,
                  width: "120px"
                }}
              ></div>
            </div>
          </div>

          <div className="w-full  md:h-full fluid-container relative">
            <img
              src={doc}
              className="w-full h-full object-fill"
              alt="Industry"
            />
            <div className="desktopHide absolute  flex-row sm:hidden bottom-8  about-us-cards ">
              {/* <div class="flex flex-wrap flex-col justify-between gap-2 md:gap-0       md:mr-0">
           
          </div> */}
              <div class="flex flex-wrap  justify-center gap-2 mr-[18px]">
                <div className="text-center flex items-center border-1 border-blue-300 w-[134px] md:w-[calc(50% - 2rem)] h-[85px] md:h-[8rem] bg-white p-[10px] md:p-7 md:mb-0">
                  <div
                    className=" poppins text-[12px] md:text-[12px]"
                    style={{ position: "relative", top: "5px" }}
                  >
                    <b>40+</b> Years of Experience
                  </div>
                </div>
                <div className="text-center flex items-center border-1 border-blue-300 w-[134px] md:w-[calc(50% - 2rem)] h-[85px] md:h-[8rem] bg-white p-[10px] md:p-7 md:mb-0">
                  <div className=" dmsans text-[12px] md:text-[12px]">
                    Safety & Statutory compliance as per International Standards
                  </div>
                </div>
                <div className="text-center flex items-center border-1 border-blue-300 w-[134px] md:w-[calc(50% - 2rem)] h-[85px] md:h-[8rem] bg-white p-[10px] md:p-7 md:mb-0">
                  <div className="text-[12px] md:text-[12px]">
                    Expertise and products covering 15+ industries
                  </div>
                </div>
                <div className="text-center flex items-center border-1 border-blue-300 w-[134px] md:w-[calc(50% - 2rem)] h-[85px] md:h-[8rem] bg-white p-[10px] md:p-7 md:mb-0">
                  <div className="text-[12px] md:text-[12px]">
                    Reduction in Carbon Footprint through process efficiency
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

export default About;
