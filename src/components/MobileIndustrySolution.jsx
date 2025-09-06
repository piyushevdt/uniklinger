import React, { useState, useEffect } from "react";
import axios from "axios";
import { Select, MenuItem, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonArrow from "../assets/images/button-arrow.svg";

const MobileIndustrySolution = () => {
  const [industry, setIndustry] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const BaseUrl = "https://ukladmin.3mindsdigital.com";

  const allowedIds = [1, 4, 14, 15, 16, 17, 20];

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/api/industry-solutions?populate=*`
        );
        const fetchedData = response.data.data || [];
        const filtered = fetchedData.filter((item) =>
          allowedIds.includes(item.id)
        );
        setData(fetchedData);
        setFilteredData(filtered);
        if (filtered.length > 0) {
          setIndustry(filtered[0].id);
          setSelectedItem(filtered[0]);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchCards();
  }, []);

  const handleChange = (event) => {
    const selectedId = event.target.value;
    setIndustry(selectedId);
    const selected = filteredData.find((item) => item.id === selectedId);
    setSelectedItem(selected);
  };

  return (
    <div className="fluid-container mt-[50px]">
      <div className="industry-select-container">
        <div className="solution-title">
          <b>Solutions</b> Industry Wise
        </div>
        <FormControl fullWidth>
          <Select
            value={industry}
            onChange={handleChange}
            sx={{
              height: 46, // Set the desired height
              // '& .MuiSelect-select': {
              //   display: 'flex',
              //   alignItems: 'center', // Center align text vertically
              // },
              paddingLeft: "10px",
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  "& .MuiMenuItem-root": {
                    display: "block", // Ensure items are displayed in block layout
                    fontSize: 16,
                    padding: "8px 16px", // Adjust padding for spacing
                  },
                  overflowY: "auto", // Enable vertical scrolling when content overflows
                  "&::-webkit-scrollbar": {
                    width: "8px", // Customize scrollbar width
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888", // Customize scrollbar thumb color
                    borderRadius: "4px", // Round the scrollbar thumb
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#555", // Darken scrollbar thumb on hover
                  },
                },
              },
            }}
          >
            {filteredData.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.attributes?.Title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {selectedItem && (
        <div style={{ paddingTop: "20px" }}>
          <div className="solution-image-container">
            <img
              src={`${BaseUrl}${selectedItem.attributes?.Image?.data?.attributes?.url}`}
              alt={selectedItem.attributes?.Title || "Industry Image"}
              className="solution-image"
              style={{filter: "brightness(50%)",}}
            />
            <div className="solution-relative-text">
              <div className="solution-image-subtitle">Most Reliable</div>
              <div className="solution-main-image-title">
                {selectedItem.attributes?.Title}
              </div>
            </div>
          </div>
          <div className="solution-description">
            {selectedItem.attributes?.Description}
          </div>
          <a
            href={selectedItem.attributes?.redirect_url}
            className="card-button-class d-flex items-baseline"
            style={{ padding: "8px 20px", fontSize: "12px" }}
          >
            <span className="discoverNow mr-5">Discover Now</span>
            <span>
              <img src={ButtonArrow} alt="arrow" style={{ marginTop: "3px" }} />
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default MobileIndustrySolution;
