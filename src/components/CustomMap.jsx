import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
  Tabs,
  Tab,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // Plus icon
import RemoveIcon from "@mui/icons-material/Remove"; // Minus icon
import PhoneIcon from "@mui/icons-material/Phone"; // Phone icon
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const manufacturingLocations = [
  {
    id: 1,
    name: "Ahmadnagar Factory",
    address:
      "Fluid Control Division, Plot No. C/37, MIDC Area,Ahmednagar–414111",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.504108873793!2d74.68432452123157!3d19.14595992222723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcba2c00000001%3A0xf919e9c4c2405ce1!2sUni%20Klinger%20Limited%20(Fluid%20Control%20Division)!5e0!3m2!1sen!2sin!4v1732606922812!5m2!1sen!2sin",
    contact: {
      phone: "+91 241-6611801 / +91 241-6611801",
      email: "fcdworks@uniklinger.com",
    },
  },
  {
    id: 2,
    name: "Pune – Vadu Factory",
    address:
      "Fluid Sealing Division Gate No. 1240, S. No. 140,Vadu Budruk, Tal. Shirur,Pune–412216",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0718841957782!2d74.04866907501679!3d18.66076998246011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2dac066334e41%3A0xa67ddd884ad79991!2sUNI%20KLINGER%20LIMITED%20(Vadu%20Factory)%20-%20Gasket%20Division!5e0!3m2!1sen!2sin!4v1732607052577!5m2!1sen!2sin",
    contact: {
      phone: "+91 2137 676900 / +91 2137-676928",
      email: "fsdworks@uniklinger.com",
    },
  },
  {
    id: 3,
    name: "Pune – Sanaswadi Factory",
    address:
      "Safety Valve & Control Valve Division 177, Cannel Road,Village: Sanaswadi, Tal. Shirur,Pune,Maharashtra –412208",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.5554880311574!2d74.11559037501726!3d18.683932782441563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2db001924b397%3A0x65e4f16964311f68!2sUni%20Klinger%20Limited%20(Safety%20Valve%20%26%20Control%20Valves%20Division)!5e0!3m2!1sen!2sin!4v1732607519246!5m2!1sen!2sin",
    contact: {
      phone: "+91 2137-661815",
      email: "astworks@uniklinger.com",
    },
  },
];

const branchLocations = [
  {
    id: 4,
    name: "Mumbai Sales Office",
    address:
      "Uni Klinger Limited Unit 203, A, Godrej Two, Eastern Express Highway, Pirojshanagar,Vikhroli East,Mumbai400079",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.295272441464!2d72.91914787502795!3d19.094698182113703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b857705e2967%3A0x5dcedc240862fc7d!2sUni%20Klinger%20Ltd!5e0!3m2!1sen!2sin!4v1732609572063!5m2!1sen!2sin",
    contact: {
      phone: "+91 8799962688",
      email: "salesmum@uniklinger.com",
    },
  },
  {
    id: 5,
    name: "Delhi Sales Office",
    address:
      "Uni Klinger Limited Office Flat No 1003, 10th Floor, Indra Prakash Building, 21, Barakhamba Road, Connaught Place,New Delhi110001",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.0073467161185!2d77.22288017621138!3d28.62932172073538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd33fb900001%3A0x8374a010c2ecf545!2sUni%20Klinger%20Limited!5e0!3m2!1sen!2sin!4v1732609762220!5m2!1sen!2sin",
    contact: {
      phone: "+911141658767 / +911141658768",
      email: "salesdel@uniklinger.com",
    },
  },
  {
    id: 6,
    name: "Baroda Sales Office",
    address:
      "Uni Klinger Limited 102, Offtel Tower – ll, 2nd Floor R. C. Dutt Road, Alkapuri,Vadodara-390007",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.166394130623!2d73.17558707511859!3d22.30954597968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b04a7bddb9%3A0x4d5046ac38e3789d!2sUni%20Klinger%20Limited!5e0!3m2!1sen!2sin!4v1732609902646!5m2!1sen!2sin",
    contact: {
      phone: "+912652312343 / +91 265 2340660 / +91 265 2341419",
      email: "salesbar@uniklinger.com",
    },
  },
  {
    id: 7,
    name: "Chennai Sales Office",
    address:
      "Uni Klinger Limited East Coast Centre 5th Floor, 553, Mount Road, Teynampet,Chennai – 600018",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.888312100351!2d80.24476327489425!3d13.04278058727923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664e94343161%3A0xc3dd0c66aaabc4f4!2sUni%20Klinger%20Limited!5e0!3m2!1sen!2sin!4v1732620391894!5m2!1sen!2sin",
    contact: {
      phone: "+914424345707 / +914424343960",
      email: "saleschen@uniklinger.com",
    },
  },
  {
    id: 8,
    name: "Pune Sales Office",
    address:
      "Uni Klinger Limited Central Sales Office Kohinoor Estate, SC 1, 5th Floor Opp. Bajaj Garden,Pune – 411003",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6144195780653!2d73.85008497501387!3d18.54631848255214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c09a3effffff%3A0x4aabf3bec10d15b4!2sUni%20Klinger%20Limited!5e0!3m2!1sen!2sin!4v1732707489666!5m2!1sen!2sin",
    contact: {
      phone: "+912041023000 / +912041023001",
      email: "salescso@uniklinger.com",
    },
  },
  {
    id: 9,
    name: "Kolkata Sales Office",
    address:
      "Uni Klinger Limited 9, Chitrakoot, 8th Floor, 230A, A.J.C. Bose Road,Kolkata – 700020",
    mapSrc:
     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.9899085205737!2d88.35345790772158!3d22.540611979514534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027768172f80cf%3A0xc769c05caacf1362!2sUni%20Klinger%20Ltd!5e0!3m2!1sen!2sin!4v1735223089411!5m2!1sen!2sin",
    contact: {
      phone: "+913322872510 / +91 33 22876494",
      email: "salescal@uniklinger.com",
    },
  },
];

const CustomMap = () => {
  const [selectedMap, setSelectedMap] = useState(
    manufacturingLocations[0].mapSrc
  );
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState({}); // Track which accordion is expanded
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjusts for small screens

  const handleAccordionChange = (id, mapSrc) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific accordion state
    }));
    setSelectedMap(mapSrc);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    if (newValue === 0) {
      setSelectedMap(manufacturingLocations[0].mapSrc);
    } else {
      setSelectedMap(branchLocations[0].mapSrc);
    }
  };

  const locations = activeTab === 0 ? manufacturingLocations : branchLocations;

  return (
    <Box mt={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          px: {xs: 2, md: 0},
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant={isSmallScreen ? "scrollable" : "none"}
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: isSmallScreen ? "center" : "space-around",
              gap: {xs: 3, md: 0}
            },
            width: isSmallScreen?"100%": "50%",
            "& .MuiTabs-indicator": {
              height: "5px", // Adjust thickness of the indicator (bottom border)
              backgroundColor: "black", // Set the bottom indicator color to black
              borderRadius: "20px",
            },
            borderBottom: "2px solid #000",
          }}
        >
          <Tab
            label="Manufacturing Units"
            sx={{
              fontSize: isSmallScreen ? "14px" : "16px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minWidth: "100px", // Ensures consistent width for mobile
              width: isSmallScreen ? "auto" : "25%", // Auto width for scrollable on mobile
              textTransform: "none",
              "&.Mui-selected": {
                fontWeight: "bold",
                color: "black", // Set text color to black
                borderBottom: "5px solid #000", // Custom bottom border for selected tab
              },
            }}
          />
          <Tab
            label="Branch Offices"
            sx={{
              fontSize: isSmallScreen ? "14px" : "16px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minWidth: "100px", // Ensures consistent width for mobile
              width: isSmallScreen ? "auto" : "25%", // Auto width for scrollable on mobile
              textTransform: "none",
              "&.Mui-selected": {
                fontWeight: "bold",
                color: "black", // Set text color to black
                borderBottom: "5px solid #000", // Custom bottom border for selected tab
              },
            }}
          />
        </Tabs>
      </Box>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Box p={2}>
            <Box
              sx={{
                p: 1,
                display: "flex",
                justifyContent: "center",
                boxShadow: 2,
              }}
            >
              <iframe
                src={selectedMap}
                width="100%"
                height="350"
                allowFullScreen
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              flexDirection: "column",
              p: 2,
            }}
          >
            {locations.map((location) => (
              <Accordion
                key={location.id}
                expanded={expanded[location.id] || false}
                onChange={() =>
                  handleAccordionChange(location.id, location.mapSrc)
                }
                sx={{
                  backgroundColor: "white", // White background color for the Accordion
                  boxShadow: 0, // Optional: Remove default shadow if needed
                  "& .MuiAccordionSummary-root": {
                    backgroundColor: "white", // Ensure the summary area also has white background
                  },
                  "& .MuiAccordionDetails-root": {
                    backgroundColor: "white", // Ensure the details section also has white background
                  },
                  width: "100%",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded[location.id] ? <RemoveIcon /> : <AddIcon />
                  }
                  sx={{width: "100%"}}
                >
                  <Typography variant="h5" fontWeight="600" p={1}>
                    {location.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3 }}>
                  <Box display="flex" gap={1}>
                    <LocationOnOutlinedIcon fontSize="large" />
                    <Typography variant="h5" paragraph>
                      {location.address}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PhoneIcon />
                    <Link
                      href={`tel:${location.contact.phone}`}
                      variant="h5"
                      sx={{ textDecoration: "none" }}
                    >
                      {location.contact.phone}
                    </Link>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    sx={{ mt: 1 }}
                  >
                    <EmailOutlinedIcon />
                    <Link
                      href={`mailto:${location.contact.email}`}
                      variant="h5"
                      sx={{ textDecoration: "none" }}
                    >
                      {location.contact.email}
                    </Link>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomMap;
