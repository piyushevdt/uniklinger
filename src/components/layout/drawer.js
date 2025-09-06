import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Popover from "@mui/material/Popover";
import { Search as SearchIcon } from "@mui/icons-material";
import Logo from "../../assets/ukllogo.png";
import { ReactComponent as SmallLogo } from "../../assets/images/updateSmallLogo.svg";
import { ReactComponent as SearchIcon1 } from "../../assets/images/SearchIcon1.svg";
import { ReactComponent as DropdownArrow } from "../../assets/images/down.svg";
import { ReactComponent as UpArrow } from "../../assets/images/up.svg";

import { ReactComponent as MenuIcon } from "../../assets/images/Icon.svg";
import Arrow1 from "../../assets/images/Vector.svg";

import SearchBar from "material-ui-search-bar";
import "./header-desktop.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";
import MobileBg from "../../assets/images/Hamburger.svg";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 300;
const BaseUrl = "https://ukladmin.3mindsdigital.com";

function DrawerAppBar(props) {
  const navigate = useNavigate();

  const location = useLocation();

  // Check if the current path matches any of the routes
  const { window } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [companyUpdatesOpen, setCompanyUpdatesOpen] = useState(false); // Track the dropdown open state
  const [companyUpdatesOpen1, setCompanyUpdatesOpen1] = useState(false); // Track the dropdown open state
  const [companyUpdatesOpen2, setCompanyUpdatesOpen2] = useState(false); // Track the dropdown open state

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showAboutMobile, setShowAboutMobile] = useState(false);
  const [showCompanyUpdatesMobile, setShowCompanyUpdatesMobile] =
    useState(false);
  const [Routes, setRoutes] = useState([]);
  const theme = useTheme();
  const [selectedSubroute, setSelectedSubroute] = useState("");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [results, setResults] = useState({
    products: [],
    blogs: [],
    solutions: [],
  });

  const menuRef = useRef(null);

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
      //  finally {
      //   setIsLoading(false); // Set loading to false after data is fetched
      // }
    };

    getData();

    // const timer = setTimeout((subroute) => {
    //   setIsLoading(true);
    //       }, 2000);

    // // Cleanup timeout on component unmount
    // return () => clearTimeout(timer);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverItemClick = (subroute) => {
    setSelectedSubroute(subroute);
    setCompanyUpdatesOpen(false);
    handleClose(); // Close the popover
    navigate(subroute); // Navigate to the selected subroute
  };
  const [anchorE2, setAnchorE2] = React.useState(null);
  const handlePopoverItemClick1 = (subroute) => {
    setSelectedSubroute(subroute);
    setCompanyUpdatesOpen1(false);
    handleClose(); // Close the popover
    navigate(subroute); // Navigate to the selected subroute
  };
  const [anchorE3, setAnchorE3] = React.useState(null);
  const handlePopoverItemClick2 = (subroute) => {
    setSelectedSubroute(subroute);
    setCompanyUpdatesOpen2(false);
    handleClose(); // Close the popover
    navigate(subroute); // Navigate to the selected subroute
  };
  const handleRedirection = (url) => {
    if (typeof window !== "undefined") {
      console.log(url, "nn");
      window.open(url, "_blank");
      // setCompanyUpdatesOpen(false); // Uncomment if needed
      handleClose(); // Close the popover
    } else {
      console.log("window object is not available");
    }
  };
  const handleClick = (event) => {
    console.log(event, "event");
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    console.log(event, "event");
    setAnchorE2(event.currentTarget);
  };
  const handleClick2 = (event) => {
    console.log(event, "event");
    setAnchorE3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorE2(null);
    setAnchorE3(null);
  };
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorE2);
  const open2 = Boolean(anchorE3);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);

    setIsLoading(false);
    handleClose();

    return () => clearTimeout(timer);
  }, [location.pathname]);
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        backgroundImage: `url(${MobileBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        marginTop: -4,
      }}
    >
      <Box sx={{ p: 2, mt: -2 }}>
        <a href="/">
          <img src={Logo} alt="image160I2026" style={{ height: 30 }} />
        </a>
      </Box>
      <Divider sx={{ px: 2 }} />
      <List sx={{ px: 2 }}>
        {Routes.filter((item) => item?.attributes?.header).map((item) => (
          <React.Fragment key={item?.attributes?.title}>
            <ListItem sx={{ py: 1.5 }}>
              <ListItemButton
                onClick={() => {
                  navigate(item?.attributes?.url); // Navigate directly for other items
                }}
                sx={{
                  // textAlign: "center",
                  marginRight:
                    item?.attributes?.title === "About Us" ? "-40px" : "0px",
                }}
              >
                <ListItemText
                  primary={item?.attributes?.title}
                  sx={{ fontSize: "20px", textTransform: "uppercase" }}
                />
                {item?.attributes?.title === "About Us" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent parent onClick from firing
                      setShowAboutMobile(!showAboutMobile);
                    }}
                    style={{ marginRight: "25px" }}
                  >
                    {showAboutMobile ? (
                      <Icon
                        icon="iconamoon:arrow-up-2"
                        width={"25px"}
                        height={"25px"}
                      />
                    ) : (
                      <Icon
                        icon="iconamoon:arrow-down-2"
                        width={"25px"}
                        height={"25px"}
                      />
                    )}
                  </button>
                )}
              </ListItemButton>
            </ListItem>
            <Divider sx={{ px: 2 }} />
            {/* Conditionally render the sub-menu for "About Us" */}
            {showAboutMobile && item?.attributes?.title === "About Us" && (
              <Box>
                <ListItem>
                  <ListItemButton
                    onClick={() => navigate("/about-us#company")}
                    // sx={{ textAlign: "center" }}
                  >
                    <ListItemText
                      primary="Our Company"
                      sx={{
                        color:
                          location.pathname == "/about-us#company"
                            ? "#DB1F51"
                            : "#000",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => navigate("/about-us#csr")}
                    // sx={{ textAlign: "center" }}
                  >
                    <ListItemText
                      primary="CSR"
                      sx={{
                        color:
                          location.pathname == "/about-us#csr"
                            ? "#DB1F51"
                            : "#000",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                    onClick={() => navigate("/about-us#services")}
                    // sx={{ textAlign: "center" }}
                  >
                    <ListItemText
                      sx={{
                        color:
                          location.pathname === "/about-us#services"
                            ? "#DB1F51"
                            : "#000",
                      }}
                      primary="Our Manufacturing Resources"
                    />
                  </ListItemButton>
                </ListItem>{" "}
                <ListItem>
                  <ListItemButton onClick={() => navigate("/about-us#rnd")}>
                    <ListItemText
                      primary={"Research, Development & Innovation"}
                      primaryTypographyProps={{
                        sx: {
                          color:
                            location.pathname === "/about-us#rnd"
                              ? "#DB1F51"
                              : "#000",
                          whiteSpace: "pre-wrap",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton
                  // onClick={() => navigate("/about-us/company-updates")}
                  // sx={{ textAlign: "center" }}
                  >
                    <ListItemText
                      primary="Company Updates"
                      sx={{
                        color:
                          location.pathname === "/about-us/company-updates"
                            ? "#DB1F51"
                            : "#000",
                      }}
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent parent onClick from firing
                        setShowCompanyUpdatesMobile(!showCompanyUpdatesMobile);
                      }}
                    >
                      {" "}
                      {showCompanyUpdatesMobile ? (
                        <Icon
                          icon="iconamoon:arrow-up-2"
                          width={"25px"}
                          height={"25px"}
                        />
                      ) : (
                        // <img style={{ height: 12, width: 12, marginLeft: 10 }} src={Up} />
                        <Icon
                          icon="iconamoon:arrow-down-2"
                          width={"25px"}
                          height={"25px"}
                        />
                      )}
                    </button>
                  </ListItemButton>
                </ListItem>
                {showCompanyUpdatesMobile && (
                  <Box>
                    <ListItem>
                      <ListItemButton
                        onClick={() => navigate("/about-us/company-updates")}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              sx={{
                                color:
                                  location.pathname ===
                                  "/about-us/company-updates"
                                    ? "#DB1F51"
                                    : "#000",
                              }}
                            >
                              • Corporate Announcements
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton
                        // onClick={() =>
                        //   navigate(
                        //     "https://uniklinger.com/Achema#partnerWithUs"
                        //   )
                        // }
                        href="https://uniklinger.com/Achema#partnerWithUs"
                      >
                        <ListItemText
                          primary={
                            <Typography
                              variant="h6"
                              sx={{
                                color:
                                  location.pathname ===
                                  "https://uniklinger.com/Achema#partnerWithUs"
                                    ? "#DB1F51"
                                    : "#000",
                              }}
                            >
                              • Achema Microsite
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  </Box>
                )}
              </Box>
            )}
          </React.Fragment>
        ))}

        {isSmallScreen && (
          <ListItem sx={{ py: 1.5 }}>
            <ListItemButton
              onClick={() => {
                navigate("/partner-with-us");
              }}
              sx={{
                // textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              <ListItemText primary="PARTNER WITH US" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleCompanyUpdatesClick = () => {
    setCompanyUpdatesOpen((prev) => !prev); // Toggle the dropdown
  };
  const handleCompanyUpdatesClick1 = () => {
    setCompanyUpdatesOpen1((prev) => !prev); // Toggle the dropdown
  };
  const handleCompanyUpdatesClick2 = () => {
    setCompanyUpdatesOpen2((prev) => !prev); // Toggle the dropdown
  };

  const fetchCards = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/search?query=how`);
      setResults({
        products: response.data.products || [],
        blogs: response.data.blogs || [],
        solutions: response.data.solutions || [],
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchCards();
  }, []);

  // Filter cards based on search input
  useEffect(() => {
    if (searchValue) {
      const filtered = allResults.filter((item) =>
        (item.Title || item.title)
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFilteredCards(filtered);
    } else {
      setFilteredCards(allResults);
    }
  }, [searchValue, results]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    if (isMenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuVisible]);

  const handleSearchBarClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleMenuItemClick = (type, slug, item) => {
    setSearchValue(item);
    setMenuVisible(false);
    navigate(`/${type}/${slug}`);
  };

  const allResults = [
    ...results.products.map((item) => ({ ...item, type: "products" })),
    ...results.blogs.map((item) => ({ ...item, type: "insights" })),
    ...results.solutions.map((item) => ({ ...item, type: "solutions" })),
  ];

  return (
    <>
      {isLoading && (
        <Box className="container" sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar component="nav">
            <Toolbar
              sx={{
                background: "#FFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <List sx={{ display: { xs: "none", sm: "flex" }, ml: 2 }}>
                  {Routes.filter((item) => item?.attributes?.header).map(
                    (item) => (
                      <ListItem key={item}>
                        <ListItemButton
                          aria-describedby={id}
                          onMouseEnter={(event) => {
                            if (item?.attributes?.title === "About Us") {
                              handleClick(event);
                            } else if (item?.attributes?.title === "Products") {
                              handleClick1(event);
                            } else if (
                              item?.attributes?.title === "Solutions"
                            ) {
                              handleClick2(event);
                            }
                          }}
                          onMouseLeave={handleClose}
                          onClick={() => {
                            console.log("clicked");

                            if (item?.attributes?.title === "About Us") {
                              console.log("Clicked on ABOUT US");
                              navigate(item?.attributes?.url);
                            } else {
                              navigate(item?.attributes?.url);
                            }
                          }}
                          sx={{
                            textAlign: "center",
                            backgroundColor: isHovered
                              ? "#f0f0f0"
                              : "transparent",
                          }}
                        >
                          <ListItemText
                            primary={item?.attributes?.title}
                            sx={{
                              fontWeight: 500,
                              fontSize: 13,
                              textTransform: "uppercase",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    )
                  )}
                </List>
                <a href="/">
                  <img
                    src={Logo}
                    alt="image160I2026"
                    style={{ height: 43, width: "100%" }}
                  />
                </a>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <SearchBar
                    searchIcon={<SearchIcon1 />}
                    style={{
                      width: 223,
                      height: 40,
                      fontSize: 12,
                      marginRight: "46px",
                    }}
                    onClick={handleSearchBarClick}
                    value={searchValue}
                    onChange={(newValue) => setSearchValue(newValue)}
                  />
                  {isMenuVisible && (
                    <div
                    ref={menuRef}
                      style={{
                        position: "absolute",
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        width: 223,
                        marginTop: 50,
                        zIndex: 1000,
                        maxHeight: "300px",
                        overflowY: "scroll",
                      }}
                    >
                      {filteredCards.map((item) => (
                        <div
                          key={item.id}
                          style={{
                            padding: "8px 12px",
                            cursor: "pointer",
                            fontSize: 12,
                          }}
                          onClick={() =>
                            handleMenuItemClick(
                              item.type,
                              item.slug,
                              item.Title || item.title
                            )
                          }
                        >
                          {item.Title || item.title}
                        </div>
                      ))}
                    </div>
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      position: "relative",
                    }}
                  >
                    <div className="d-flex items-center">
                      <div>
                        <span className="contact-us-text  d-flex">
                          <div className="d-flex">
                            <a
                              className=" header-menu mr-3"
                              href="/partner-with-us"
                            >
                              PARTNER WITH US{" "}
                            </a>
                            <img
                              className="hover:rotate-[-410deg]"
                              src={Arrow1}
                            />
                          </div>
                        </span>
                        <div className="contact-us"></div>
                      </div>
                    </div>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <a href="/">
                  <img
                    src={Logo}
                    alt="image160I2026"
                    style={{ height: 25, width: "100%" }}
                  />
                </a>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: searchOpen ? "flex-end" : "space-between",
                    width: searchOpen ? "80%" : "20%",
                    alignItems: "center",
                  }}
                >
                  {/* <Select
              labelId="language-select-label"
              id="language-select"
              value={10}
              disableUnderline
              IconComponent={DropdownArrow}
              variant="standard"
              sx={{
                fontSize: 13,
                textTransform: "capitalize",
                borderRadius: 0,
                fontWeight: 500,
                ml: 2,
              }}
            >
                              <MenuItem value={10}>ENG</MenuItem>
            </Select> */}
                  {searchOpen ? (
                    <>
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search..."
                        sx={{
                          display: { xs: "flex", sm: "none" },
                          width: searchOpen ? 150 : 86,
                          height: 27,
                          marginRight: searchOpen ? "10px" : 0,
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleSearchBarClick}
                                value={searchValue}
                                onChange={(newValue) =>
                                  setSearchValue(newValue)
                                }
                              >
                                <SearchIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        onClick={handleSearchBarClick}
                        value={searchValue}
                        onChange={(newValue) =>
                          setSearchValue(newValue)
                        }
                        autoFocus
                      />
                      {isMenuVisible && (
                        <div
                        ref={menuRef}
                          style={{
                            position: "absolute",
                            backgroundColor: "white",
                            border: "1px solid #ccc",
                            width: 223,
                            marginTop: 390,
                            zIndex: 1000,
                            maxHeight: "300px",
                            overflowY: "scroll",
                          }}
                        >
                          {filteredCards.map((item) => (
                            <div
                              key={item.id}
                              style={{
                                padding: "8px 12px",
                                cursor: "pointer",
                                fontSize: 12,
                              }}
                              onClick={() =>
                                handleMenuItemClick(
                                  item.type,
                                  item.slug,
                                  item.Title || item.title
                                )
                              }
                            >
                              {item.Title || item.title}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <IconButton
                      sx={{
                        display: { xs: "flex", sm: "none" },
                        width: 50,
                        height: 27,
                        marginLeft: searchOpen ? 0 : 0,
                      }}
                      onClick={handleSearchClick}
                    >
                      <SearchIcon />
                    </IconButton>
                  )}
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: "flex", sm: "none" } }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

          <nav>
            <Drawer
              className="container"
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              anchor="right"
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  background: "#fff",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  background: "#fff",
                }}
              >
                <IconButton onClick={handleDrawerToggle}>
                  <CloseIcon
                    sx={{ marginRight: "20px", transform: "scale(1.3)", mt: 2 }}
                  />
                </IconButton>
              </Box>

              {drawer}
            </Drawer>
          </nav>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            BackdropProps={{
              sx: {
                top: 60,
              },
            }}
            PaperProps={{
              sx: {
                backgroundColor: "white !important", // Background color
                boxShadow: 3, // Add shadow for depth
                // borderRadius: 2,
                width: "25%", // Rounded corners
                p: 2,
                marginTop: 1,
                top: "-28px !important", // Padding
              },
              onMouseEnter: () => setAnchorEl(anchorEl), // Keep open when interacting
              onMouseLeave: handleClose, // Close when mouse leaves the popover
            }}
            sx={{
              "& .css-1i0e6f3-MuiModal-root-MuiPopover-root": {
                top: 60,
              },
            }}
            disableEnforceFocus // Disable enforcing focus to allow clicks outside
            disableAutoFocus
            disablePortal // Prevents popover from being rendered outside the DOM hierarchy
            disableScrollLock // Avoids locking the scroll behavior of the page
            disableRestoreFocus // Prevents restoring focus to the anchor element
            //onPointerLeave={handleClose} // Close when mouse leaves
            //onMouseOutCapture={handleClose}
          >
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/about-us#company" ? "#DB1F51" : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() => handlePopoverItemClick("/about-us#company")}
            >
              Our Company
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/about-us#csr" ? "#DB1F51" : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() => handlePopoverItemClick("/about-us#csr")}
            >
              CSR
            </Typography>

            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/about-us#services"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() => handlePopoverItemClick("/about-us#services")}
            >
              Our Manufacturing Resources
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/about-us#rnd" ? "#DB1F51" : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() => handlePopoverItemClick("/about-us#rnd")}
            >
              Research, Development & Innovation
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                marginRight: 10,
                display: "flex",
                alignItems: "center",
                color:
                  // location.pathname == "/about-us/company-updates"
                  companyUpdatesOpen ? "#DB1F51" : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              // onClick={() => handlePopoverItemClick("/about-us/company-updates")}
              onClick={handleCompanyUpdatesClick} // Open the dropdown on click
            >
              Company Updates{" "}
              <button>
                {" "}
                {companyUpdatesOpen ? (
                  <Icon
                    icon="iconamoon:arrow-up-2"
                    width={"25px"}
                    height={"25px"}
                  />
                ) : (
                  // <img style={{ height: 12, width: 12, marginLeft: 10 }} src={Up} />
                  <Icon
                    icon="iconamoon:arrow-down-2"
                    width={"25px"}
                    height={"25px"}
                  />
                )}
              </button>
            </Typography>
            {/* Nested Dropdown */}
            {companyUpdatesOpen && (
              <Box
                sx={{
                  ml: 2, // Add margin for nested items
                }}
              >
                <Typography
                  sx={{
                    p: 1,
                    fontSize: 13,
                    color: "#000",
                    ":hover": { color: "#DB1F51", cursor: "pointer" },
                    ":before": {
                      content: "'• '", // Adding bullet point
                    },
                  }}
                  onClick={() =>
                    handlePopoverItemClick("/about-us/company-updates")
                  }
                >
                  Corporate Announcements
                </Typography>

                <Typography
                  sx={{
                    p: 1,
                    fontSize: 13,
                    color: "#000",
                    ":hover": { color: "#DB1F51", cursor: "pointer" },
                    ":before": {
                      content: "'• '", // Adding bullet point
                    },
                  }}
                >
                  <a
                    className="hover-link"
                    style={{
                      color: "#000",
                      ":hover": { color: "#DB1F51", cursor: "pointer" },
                    }}
                    href="https://uniklinger.com/Achema#partnerWithUs"
                  >
                    Achema Microsite
                  </a>
                </Typography>
              </Box>
            )}
          </Popover>
          <Popover
            id={id}
            open={open1}
            anchorE2={anchorE2}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            BackdropProps={{
              sx: {
                top: 60,
              },
            }}
            PaperProps={{
              sx: {
                backgroundColor: "white !important", // Background color
                boxShadow: 3, // Add shadow for depth
                // borderRadius: 2,
                width: "25%", // Rounded corners
                p: 2,
                marginTop: 1,
                top: "-28px !important", // Padding
                marginLeft: "180px",
              },
              onMouseEnter: () => setAnchorE2(anchorE2), // Keep open when interacting
              onMouseLeave: handleClose, // Close when mouse leaves the popover
            }}
            sx={{
              "& .css-1i0e6f3-MuiModal-root-MuiPopover-root": {
                top: 60,
              },
            }}
            disableEnforceFocus // Disable enforcing focus to allow clicks outside
            disableAutoFocus
            disablePortal // Prevents popover from being rendered outside the DOM hierarchy
            disableScrollLock // Avoids locking the scroll behavior of the page
            disableRestoreFocus // Prevents restoring focus to the anchor element
            //onPointerLeave={handleClose} // Close when mouse leaves
            //onMouseOutCapture={handleClose}
          >
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/main/products/fluid-control-division"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick1("/main/products/fluid-control-division")
              }
            >
              Piston Valves & Bellow Seal Valves
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname ==
                  "/main/products/fluid-control-division/steam-traps"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick1(
                  "/main/products/fluid-control-division/steam-traps"
                )
              }
            >
              Steam Trapping & Condensate Recovery Solutions
            </Typography>

            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/main/products/fluid-sealing-division"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick1("/main/products/fluid-sealing-division")
              }
            >
              Jointing Sheets & Gaskets
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname ==
                  "/main/products/safety-valve-and-control-valve-division"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick1(
                  "/main/products/safety-valve-and-control-valve-division"
                )
              }
            >
              Safety And Control Valves
            </Typography>
            {/* <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color: location.pathname == "/products" ? "#DB1F51" : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() => handlePopoverItemClick1("/products")}
            >
              Steam Engineering Services
            </Typography> */}
          </Popover>
          <Popover
            id={id}
            open={open2}
            anchorE3={anchorE3}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            BackdropProps={{
              sx: {
                top: 60,
              },
            }}
            PaperProps={{
              sx: {
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
                backgroundColor: "white !important", // Background color
                boxShadow: 3, // Add shadow for depth
                // borderRadius: 2,
                width: "35%", // Rounded corners
                p: 2,
                marginTop: 1,
                top: "-28px !important", // Padding
                marginLeft: "280px",
              },
              onMouseEnter: () => setAnchorE3(anchorE3), // Keep open when interacting
              onMouseLeave: handleClose, // Close when mouse leaves the popover
            }}
            sx={{
              "& .css-1i0e6f3-MuiModal-root-MuiPopover-root": {
                top: 60,
              },
            }}
            disableEnforceFocus // Disable enforcing focus to allow clicks outside
            disableAutoFocus
            disablePortal // Prevents popover from being rendered outside the DOM hierarchy
            disableScrollLock // Avoids locking the scroll behavior of the page
            disableRestoreFocus // Prevents restoring focus to the anchor element
            //onPointerLeave={handleClose} // Close when mouse leaves
            //onMouseOutCapture={handleClose}
          >
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "industry/pharma-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/pharma-industry")
              }
            >
              Pharma Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname ==
                  "/industry/chemical-petrochemical-plants-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2(
                  "/industry/chemical-petrochemical-plants-industry"
                )
              }
            >
              Chemical Industry
            </Typography>

            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/textiles-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/textiles-industry")
              }
            >
              Textile Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/tyre-manufacturing-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/tyre-manufacturing-industry")
              }
            >
              Tyre Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/aerated-block-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/aerated-block-industry")
              }
            >
              Aerated Concrete Block
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/brewery-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/brewery-industry")
              }
            >
              Brewery Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/rice-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() => handlePopoverItemClick2("/industry/rice-industry")}
            >
              Rice Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/captive-cogen-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/captive-cogen-industry")
              }
            >
              Captive Cogen Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/rubber-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/rubber-industry")
              }
            >
              Rubber Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/soap-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() => handlePopoverItemClick2("/industry/soap-industry")}
            >
              Soap Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/dairy-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/dairy-industry")
              }
            >
              Dairy Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/sugar-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/sugar-industry")
              }
            >
              Sugar Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/edible-oil-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/edible-oil-industry")
              }
            >
              Edible Oil Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/fertilizer-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/fertilizer-industry")
              }
            >
              Fertilizer Industry
            </Typography>
            <Typography
              sx={{
                p: 1,
                fontSize: 14,
                color:
                  location.pathname == "/industry/hotel-industry"
                    ? "#DB1F51"
                    : "#000",
                ":hover": {
                  color: "#DB1F51",
                  cursor: "pointer",
                },
              }}
              onClick={() =>
                handlePopoverItemClick2("/industry/hotel-industry")
              }
            >
              Hotel Industry
            </Typography>
          </Popover>
        </Box>
      )}
    </>
  );
}
DrawerAppBar.propTypes = {
  window: PropTypes.func,
};
export default DrawerAppBar;
