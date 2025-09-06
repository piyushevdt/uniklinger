import React, { useEffect } from "react";
import ProductsBanner from "../assets/images/ProductBanner.png";

import { Helmet } from "react-helmet-async";
import "./Product.css";
import useResizeObserver from "../hooks/useResizeObserver";
import { Box, Grid, Typography } from "@mui/material";
import BreadcrumbsComponent from "./BreadsComponent";
import GT1 from "../assets/documents/Form MGT-7 31.03.2021.pdf";
import GT2 from "../assets/documents/Form MGT-7 31.03.2022.pdf";
import GT3 from "../assets/documents/Form MGT-7 31.03.2023.pdf";
import GT4 from "../assets/documents/Form MGT-7 31.03.2024.pdf";
import DTR12 from "../assets/documents/Form DIR12Resignation of Mr. Goyal.pdf";

const CompanyUpdates = () => {
  const screenWidth = useResizeObserver();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = DTR12;
    link.download = "Form DIR12Resignation of Mr. Goyal.pdf";
    link.click();
  };
  const handleDownloadGT1 = () => {
    const link = document.createElement("a");
    link.href = GT1;
    link.download = "Form MGT-7 31.03.2021.pdf";
    link.click();
  };
  const handleDownloadGT2 = () => {
    const link = document.createElement("a");
    link.href = GT2;
    link.download = "Form MGT-7 31.03.2021.pdf";
    link.click();
  };
  const handleDownloadGT3 = () => {
    const link = document.createElement("a");
    link.href = GT3;
    link.download = "Form MGT-7 31.03.2021.pdf";
    link.click();
  };
  const handleDownloadGT4 = () => {
    const link = document.createElement("a");
    link.href = GT4;
    link.download = "Form MGT-7 31.03.2021.pdf";
    link.click();
  };

  const handleRedirection = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Company Updates</title>
        <link
          rel="canonical"
          href="https://uniklinger.com/about-us/company-updates"
        />
      </Helmet>

      <div className="fluid-container" style={{ paddingTop: "60px" }}>
        <div
          className="banner-class relative"
          itemScope
          itemType="https://schema.org/Brand"
        >
          <img
            src={screenWidth <= 800 ? ProductsBanner : ProductsBanner}
            alt="products-banner"
            className="banner-image h-[300px] md:h-auto"
            itemProp="logo"
          />
          <div
            className="absolute dmsans font-bold text-white md:text-[46px] text-[36px] top-[30%] md:top-[40%] left-[6%]"
            itemProp="name"
          >
            Corporate
          </div>
          <div
            className="absolute  dmsans font-bold text-white md:text-[46px] text-[36px] top-[42%] md:top-[52%] left-[6%]"
            itemProp="name"
          >
            Announcement
          </div>
        </div>
        <div
          className="product-cards-container "
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ marginTop: 50 }}>
            <BreadcrumbsComponent />
          </div>

          <div>
            <div
              className="dmsans"
              style={{ fontSize: 36, fontWeight: 700, marginTop: 50 }}
            >
              Corporate Announcement
            </div>
          </div>

          <Box>
            <Typography
              style={{
                fontSize: 18,
                color: "#000",
                marginTop: 15,
                fontWeight: 600,
              }}
            >
              View Form_MGT_7 Annual Return {">>"}
            </Typography>
            <Typography
              onClick={handleDownloadGT1}
              style={{
                fontSize: 16,
                color: "#DB1F51",
                marginTop: 15,
                cursor: "pointer",
              }}
            >
              Form MGT-7 31.03.2021
            </Typography>
            <Typography
              onClick={handleDownloadGT2}
              style={{
                fontSize: 16,
                color: "#DB1F51",
                marginTop: 15,
                cursor: "pointer",
              }}
            >
              Form MGT-7 31.03.2022
            </Typography>
            <Typography
              onClick={handleDownloadGT3}
              style={{
                fontSize: 16,
                color: "#DB1F51",
                marginTop: 15,
                cursor: "pointer",
              }}
            >
              Form MGT-7 31.03.2023
            </Typography>
            <Typography
              onClick={handleDownloadGT4}
              style={{
                fontSize: 16,
                color: "#DB1F51",
                marginTop: 15,
                cursor: "pointer",
              }}
            >
              Form MGT-7 31.03.2024
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                fontSize: 18,
                color: "#000",
                marginTop: 15,
                fontWeight: 600,
              }}
            >
              Resignation Of Director {">>"}
            </Typography>
            <Typography
              onClick={handleDownload}
              style={{
                fontSize: 16,
                color: "#DB1F51",
                marginTop: 15,
                cursor: "pointer",
              }}
            >
              Form DIR12 Resignation of Mr. Goyal
            </Typography>
          </Box>

          <div
            className="company-updates d-flex flex-row md:flex-row  items-center md:items-center mt-[50px]  justify-between"
            style={{ paddingTop: "60px", paddingBottom: "60px" }}
          >
            <Grid
              container
              spacing={2}
              className="d-flex items-center mt-[50px]"
            >
              <Grid item xs={12} sm={8}>
                <Typography
                  sx={{ fontSize: { xs: 16, sm: 22 }, color: "white" }}
                >
                  Let us help for a proposal and analysis of your needs
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} container justifyContent="flex-end" sx={{justifyContent:{xs: "center", md: "flex-end"}}}>
                <button
                  onClick={() => {
                    handleRedirection("https://uniklinger.com/main/contact");
                  }}
                  sx={{ fontSize: 14 }}
                  className="buttonTransparent-class"
                >
                  Partner With Us
                </button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyUpdates;
