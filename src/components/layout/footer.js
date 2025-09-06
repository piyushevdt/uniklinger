import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/updatedLogo.png";
import Watermark from "../../assets/images/watermark.svg";
import Linkedin from "../../assets/images/linkedin.png";
import "./footer.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";

const Footer = (props) => {
  const navigate = useNavigate();
  const [Routes, setRoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  const handleClick = () => {
    navigate("/");
  };
  const location = useLocation();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://ukladmin.3mindsdigital.com/api/routes?populate=*"
        );
        setRoutes(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    setIsLoading(false); // Reset to false immediately on URL change

    return () => clearTimeout(timer); // Cleanup on effect re-run or unmount
  }, [location.pathname]);
  const numberOfColumns = 2; // You can change this to 3, 4, etc.

  // Create an array of arrays to hold the routes for each column
  const columns = Array.from({ length: numberOfColumns }, () => []);

  Routes.filter((item) => item?.attributes?.footer).forEach((route, index) => {
    const columnIndex = index % numberOfColumns;
    columns[columnIndex].push(route);
  });
  return (
    <>
    {isLoading && (
    <div className="footer-container container">
      <footer className="footer">
        <div className="footer-content">
          <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
            <div className="footer-logo" >
              <a className="footer-logo-link" href="/">
                <img src={Logo} alt="image160I2026" />
              </a>
              <div className="footer-description" style={{fontSize: {xs: "14px", md: "18px"}}}>
              Efficient, Together
              </div>
            </div>

            <Box sx={{display:{xs: 'none', md: 'flex'}}} >
              <span className="follow-text" style={{fontSize:'18px'}}>Follow Us On :</span>
              <span>
                <a
                  href="https://www.linkedin.com/company/uni-klinger/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img src={Linkedin} alt="LinkedIn" />{" "}
                </a>
              </span>
            </Box>
          </div>
          <div
            className="footer-content-column watermark-column .d-none .d-sm-block"
            style={{ position: "relative" }}
          >
            {/* <img src={Watermark} alt="watermark" className="watermarkLogo" /> */}
          </div>
          {/* <div className="footer-content-column  links-column">
            <div className="footer-links">
              <span className="footer-text04">
                <a className="footer-logo-link" href="/about-us">
                  About Us
                </a>
              </span>
              <span className="footer-text04">
                <a className="footer-logo-link" href="/products">
                  Products
                </a>
              </span>
              <span className="footer-text04">
                <a className="footer-logo-link" href="/industry-solutions">
                  Solutions
                </a>
              </span>
              <span className="footer-text04">
                <a className="footer-logo-link" href="/careers">
                  Careers
                </a>
              </span>
            </div>
            <div className="footer-links">
              <span className="footer-text04">
                <a className="footer-logo-link" href="/partner-with-us">
                  Partner With Us
                </a>
              </span>
              <span className="footer-text04">
                <a className="footer-logo-link" href="/blog">
                  Blog
                </a>
              </span>
              <span className="footer-text04">
                <a className="footer-logo-link" href="/privacy-policy">
                  Privacy Policy
                </a>
              </span>
              <span className="footer-text04">
              <a className="footer-logo-link" href="/terms-conditions">
                 Terms & Conditions
                </a>
              </span>
            </div>
          </div> */}

          <div className="footer-content-column links-column">
            <div className="flex items-start w-full">
              {columns.map((columnRoutes, columnIndex) => (
                <div key={columnIndex} className="footer-links w-full">
                  {columnRoutes?.map((route, routeIndex) => (
                    <span key={routeIndex} className="footer-text04">
                      <a
                        className="footer-logo-link"
                        href={route?.attributes?.url}
                      >
                        {route?.attributes?.title}
                      </a>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="footer-heading follow-us-container desktopHide">
            <span className="follow-text">Follow Us On :</span>
            <span>
              <a
                href="https://www.linkedin.com/company/uni-klinger/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={Linkedin} alt="LinkedIn" />{" "}
              </a>
            </span>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <button
                style={{ fontSize: 16 }}
                onClick={handleClick}
                rel="noopener noreferrer"
              >
                ©2024 UniKlinger. All rights reserved
              </button>
            </p>
          </div>
        </div>
      </footer>
    </div>
    )}
    </>
  );
};

export default Footer;
