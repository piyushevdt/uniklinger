import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heatechBanner from "../assets/images/HomeSliderBanner.svg";
import EngineeredBanner from "../assets/images/ProductsRangeBanner.svg";
import EngineeredBannerMobile from "../assets/images/ProductsRangeBannerMobile.svg";
import heatechMobileBanner from "../assets/images/HomeSliderBannerMobile.svg";
import VideoBanner from "../assets/images/videoBanner.png";
import VideoMobileBanner from "../assets/images/videoMobileBanner.svg";
import Next from "../assets/images/nextArrow.svg";
import "../components/TopCarousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import YouTube from "react-youtube";
import { useNavigate } from "react-router-dom";

const Arrow = React.memo(({ className, style, onClick, isNext }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      background: "white",
      zIndex: 9,
      height: 64,
      width: 64,
      borderRadius: 100,
      borderColor: "#e6e6e6",
      borderWidth: 1,
      right: isNext ? -10 : undefined,
      left: isNext ? undefined : -10,
      // top: "50%",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", // Added box shadow
    }}
    onClick={onClick}
  >
    <img
      style={{
        position: "absolute",
        top: 21,
        left: isNext ? 26 : 24,
        transform: isNext ? undefined : "rotate(180deg)",
      }}
      alt={isNext ? "Next" : "Previous"}
      src={Next}
    />
  </div>
));

export default function SimpleSlider() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 768 && window.innerWidth < 1535
  );
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 2560);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const navigate = useNavigate();

  const opts = {
    height: isMobile ? 450 : isDesktop ? 500 : 600,
    width: "100%",
    margin: 0,
    playerVars: {
      autoplay: 0,
    },
  };
  const getThumbnailUrl = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const playVideo = (videoId) => {
    // Stop the currently playing video if it's different from the new one
    if (currentVideoId && playerRef.current) {
      playerRef.current.pauseVideo();
    }
    setCurrentVideoId(videoId); // Set the new video ID
    setIsVideoPlaying(true);
  };
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  const stopVideo = () => {
    if (
      playerRef.current &&
      typeof playerRef.current.pauseVideo === "function"
    ) {
      playerRef.current.pauseVideo();
    }
    setCurrentVideoId(null); // Reset the current video ID
    setIsVideoPlaying(false);
  };
  useEffect(() => {
    return () => {
      stopVideo(); // Stop the video when unmounting
    };
  }, []);
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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsDesktop(window.innerWidth >= 768 && window.innerWidth < 1535);
      setIsLargeScreen(window.innerWidth >= 2560);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleRedirection = (url) => {
    window.open(url, "_blank");
  };

  const settings = {
    dots: false,
    nextArrow: <Arrow isNext={true} />,
    prevArrow: <Arrow isNext={false} />,
    speed: 1000,
    slidesToShow: 1,
    infinite: true, // Enable infinite scrolling for better UX
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Slide every 3 seconds
    initialSlide: 0,

    // centerMode: true,
    // infinite: false,
    width: "100%",
    centerPadding: "0px",
    slidesPerRow: 1,
    afterChange: (current) => setActiveSlide(current),

    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          nextArrow: null,
          prevArrow: null,
          dots: true,
          customPaging: (i) => (
            <div className="custom-dot">
              <div className={`dot ${i === activeSlide ? "active" : ""}`}></div>
            </div>
          ),
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div className="container pt-[100px]">
      <div className="top-banner-slider umang">
        <Slider
          {...settings}
          sx={{ display: "flex" }}
          style={{ padding: "10px" }}
        >
          <div
            className="top_banner_image"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                height: "100%",
                margin: 0,
                width: "100%",
                cursor: "pointer",
              }}
            >
              {isVideoPlaying && currentVideoId === "Muj1IkWMo0Q" ? (
                <YouTube
                  videoId={"Muj1IkWMo0Q"}
                  onEnd={stopVideo}
                  opts={opts}
                  onReady={onReady}
                />
              ) : (
                <div
                  className="thumbnail-wrapper"
                  onClick={() => playVideo("Muj1IkWMo0Q")}
                >
                  <img
                    src={isMobile ? heatechMobileBanner : heatechBanner}
                    alt="Thumbnail"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="top_banner_image">
            <div
              style={{
                height: "100%",
                margin: 0,
                width: "100%",
                cursor: "pointer",
              }}
            >
              {isVideoPlaying && currentVideoId === "BEO0-bHsSOQ" ? (
                <YouTube
                  videoId={"BEO0-bHsSOQ"}
                  onEnd={stopVideo}
                  opts={opts}
                  onReady={onReady}
                />
              ) : (
                <div
                  className="thumbnail-wrapper"
                  onClick={() => playVideo("BEO0-bHsSOQ")}
                >
                  <img
                    src={isMobile ? VideoMobileBanner : VideoBanner}
                    alt="Thumbnail"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="top_banner_image">
            <div
              style={{
                height: "100%",
                margin: 0,
                width: "100%",
                cursor: "pointer",
              }}
            >
                <div
                  className="thumbnail-wrapper"
                  onClick={() => navigate("/products")}
                >
                  <img
                    src={isMobile ? EngineeredBannerMobile : EngineeredBanner}
                    alt="Thumbnail"
                  />
                </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
