import React, { useState, useEffect } from "react";
import HomePageSlider from "./Carousel";
import TopCarousel from "./TopCarousel";
import PartnerUs from "./PartnerUs";
import About from "./About";
import Testimonial from "./Testimonial";
import CaseStudies from "./CaseStudies";
import ProductsOffer from "./ProductsOffer";
import IndustrySec from "./IndustrySec";
import Form from "./Form";
import { Helmet } from "react-helmet-async";
import SolutionsCarousel from './SolutionsCarousel';
import MobileIndustrySolution from "./MobileIndustrySolution";
import { MapContainer, TileLayer, Marker, Popup as LeafletPopup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "./Home.css";
import { ReactComponent as WorldMap } from '../assets/Maskgroup.svg';
import BlueMarker from "../assets/images/blueMarker.png";
import IndustryExample from "../assets/images/industry-example.svg";
import OilRefineries from "../assets/images/oil-refineries.svg";
import ChemicalPetrochemical from "../assets/images/chemical-petrochemical.svg";
import Pharmaceutical from "../assets/images/pharmaceuticals.svg";
import FoodBaverage from "../assets/images/food-beverage.svg";
import Paper from "../assets/images/paper.svg";
import Textiles from "../assets/images/textiles.svg";
import TyreManufacturing from "../assets/images/tyre-manufacturing.svg";
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import { Box, CircularProgress } from "@mui/material"; // Import CircularProgress

const customIcon = new L.Icon({
  iconUrl: BlueMarker,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const locations = [
  {
    position: [400.0, 200],
    country: "North America",
    address: "1700 North Moore St, Suite 1520, Arlington, VA 22209-1911",
    phone: "+1 (703) 243 9787",
    fax: "+1 (703) 243 9791",
    email: "northamerica@tata.com",
    googleMaps: "https://goo.gl/maps/MXSRWXkMjBjBnr6u8"
  },
  {
    position: [200.5002, 500.1421],
    country: "Europe",
    address: "18, Grosvenor Place, London SW1X 7HSc",
    phone: "+44 (20) 7235 8281",
    fax: "+44 (20) 7235 8727",
    email: "tata@tata.co.uk",
    googleMaps: "https://goo.gl/maps/oeTt22Ne4z6QZzTz8"
  },
];

const Popup = ({ isVisible, position, content }) => (
  isVisible ? (
    <div style={{ position: 'absolute', top: position.y, left: position.x }}>
      {content}
    </div>
  ) : null
);

function Home() {
  const [loading, setLoading] = useState(true); // Loader state
  const [screenWidth, setScreenWidth] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [height, setHeight] = useState("700px"); // Default height

  useEffect(() => {
    // Simulate data loading or component setup
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust the timeout as needed
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setScreenWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(document.body);
  }, [screenWidth]);

  useEffect(() => {
    const updateScreenInfo = () => {
      setScreenWidth(window.innerWidth);
      const zoom = window.outerWidth / window.innerWidth;
      setZoomLevel(zoom);
      setHeight(`${700 * zoom}px`); // Adjust height based on zoom level
    };

    updateScreenInfo();

    window.addEventListener("resize", updateScreenInfo);

    return () => {
      window.removeEventListener("resize", updateScreenInfo);
    };
  }, []);

  if (loading) {
    // Show loader while loading
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Helmet>
        <title>Manufacturers of Precision-Engineered Valves, Steam Traps, and Gaskets</title>
        <meta
          name="description"
          content="UKL enhances process plant safety, efficiency, and sustainability with innovative, customer-focused solutions and world-class manufacturing in India, serving clients globally."
        />
      </Helmet>

      <TopCarousel />
      <ProductsOffer />
      {screenWidth < 1024 && <MobileIndustrySolution />}
      <SolutionsCarousel style={{ height }} />
      <About />
      <PartnerUs />
      <Box sx={{py: {xs: 0, md: 5}}}>
        <Form />
      </Box>
    </>
  );
}

export default Home;
