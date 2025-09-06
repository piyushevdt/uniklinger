import React, { useRef, useEffect, useState } from "react";
import Image1 from "../assets/images/careers-banner-1.png";
import Image2 from "../assets/images/careers-banner-2.png";
import Image3 from "../assets/images/careers-banner-3.png";
import Image4 from "../assets/images/careers-banner-4.png";
import Image5 from "../assets/images/careers-banner-5.png";
import Image6 from "../assets/images/careers-banner-7.png";
import Image7 from "../assets/images/careers-banner-8.png";
import Image8 from "../assets/images/careers-banner-9.png";
import New1 from "../assets/images/careers-new-1.jpg";
import New2 from "../assets/images/careers-new-2.jpg";
import New3 from "../assets/images/careers-new-3.jpg";
import Progress from "../assets/images/card-image.png";
import DownArrow1 from "../assets/images/downArrow.png";
import SelectArrow from "../assets/images/down-arrow.svg";
import ButtonArrow from "../assets/images/button-arrow.svg";
import SearchIcon from "../assets/images/searchIcon.svg";
import TextField from "@mui/material/TextField";
import "../components/careers.css";
import Location1 from "../assets/images/location1.svg";
import User from "../assets/images/experience-icon.svg";
import Briefcase from "../assets/images/briefcase.svg";
import RightArrow from "../assets/images/rightArrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, CircularProgress } from "@mui/material";
import { Helmet } from "react-helmet-async";
import * as yup from "yup";

const Careers = () => {
  const data = [
    {
      title: "Empowerment for global impact",
      description: `At our company, we empower individuals to define and achieve success on their own terms. Here, you're not just an employee; you're the architect of your own future. Together, we're driving global ambitions`,
    },
    {
      title: "Powerful Teams Efficient Together",
      description: `At the core of our organization's strength lies the synergy of our teams. You'll have the opportunity to collaborate with diverse talent and explore limitless learning possibilities. Together, we transcend mere efficiency; we become an unstoppable force`,
    },

    {
      title: "Personalized Growth, Tailored for Success",
      description: `You're not just part of the crowd; you're essential to our success. We are dedicated to your personal and professional growth, providing individualized attention and opportunities to help you achieve your highest potential.`,
    },
  ];

  const uploadInputRef = useRef(null);

  const [screenWidth, setScreenWidth] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    resume: null,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const validationSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email ID is required"),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]+$/, "Phone Number must be numeric")
      .required("Phone Number is required"),
    resume: yup.mixed().required("Resume is required"),
    message: yup.string().required("Message is required"),
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const fieldValue = files ? files[0] : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });

    validationSchema
      .validateAt(name, { [name]: fieldValue })
      .then(() => {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      })
      .catch((err) => {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        console.log(formData);
      })
      .catch((err) => {
        const newErrors = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(newErrors);
      });

    const form = new FormData();

    // Wrapping form data inside `data`
    const formBody = {
      data: {
        full_name: formData.fullName,
        email_id: formData.email,
        phone_number: formData.phoneNumber,
        message: formData.message,
        resume: formData.resume,
      },
    };

    // Append each field inside the form as stringified JSON
    form.append("data", JSON.stringify(formBody.data));

    // Adding resume file separately
    if (formData.resume) {
      form.append("files.resume", formData.resume); // Strapi expects file fields with 'files'
    }

    try {
      // Send form data to the API using fetch (adjust URL accordingly)
      const response = await fetch(
        "https://ukladmin.3mindsdigital.com/api/career-forms",
        {
          method: "POST",
          body: form,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const responseData = await response.json();
      console.log("Form submitted successfully", responseData);
      alert("Application submitted successfully!");
      setFormData(null);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit the form. Please try again later.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(
      debounce((entries) => {
        for (let entry of entries) {
          setScreenWidth(entry.contentRect.width);
        }
      }, 200)
    );

    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, []);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 2000); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Helmet>
        <title>Careers</title>
        <link rel="canonical" href="https://uniklinger.com/careers" />
      </Helmet>
      <div className="container" style={{ background: "white" }}>
        <div
          className="section-title fluid-container "
          style={
            screenWidth <= 820
              ? { fontSize: "32px", paddingTop: "100px" }
              : { paddingTop: "100px" }
          }
          itemScope
          itemType="http://schema.org/Organization"
        >
          <div
            itemProp="name"
            style={{ fontSize: screenWidth >= 820 ? "30px" : "40px" }}
          >
            Igniting Change, Together
          </div>
        </div>
        <div
          className="section-subtitle fluid-container "
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <div itemProp="description">
              And we're embarking on a transformation journey targeted to enable
              plants globally to be safe,
              <br /> efficient, and sustainable. It’s a big moment for all of us
              – and we all have our part to play. <br />
              Are you ready?
            </div>
          </div>
        </div>
        <div className="image-container-wrapper">
          <div className="pt-40 image-container scroller" data-speed="slow">
            <div className="images-wrapper ">
              {[
                New1,
                New2,
                New3,
                Image5,
                Image6,
                Image7,
                Image8,
                Image1,
                Image2,
                Image3,
                Image4,
              ].map((img, index) => (
                <img
                  src={img}
                  alt="career-banner"
                  itemProp="image"
                  className="career-banner"
                  style={{
                    border: "6px solid white",
                    borderRadius: "6px",
                    width: 390,
                    height: 350,
                  }}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>

        <Box sx={{ overflow: "hidden", display: "block" }}>
          <div
            style={screenWidth <= 820 ? { display: "none" } : {}}
            className="h-500px mb-20 container"
          >
            <div
              className="section-title poppins-regular"
              style={{ marginBottom: "60px" }}
            >
              <span className="poppins-semibold">Why</span>
              <span> UKL</span>
            </div>
            <div className="flex" style={{overflow: "hidden"}}>
              <div className="left-side">
                <div style={{ fontSize: 12, textAlign: "center" }}>
                  Keep <br /> Swiping
                </div>
                <div
                  style={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}
                >
                  <img
                    src={DownArrow1}
                    alt="banner"
                    style={{ width: 50, height: 50 }}
                  />
                </div>
                <div style={{ fontSize: 12, textAlign: "center" }}>
                  To Explore <br /> Services
                </div>
              </div>
              <div className="right-side">
                <div className="why-us-carousel">
                  { data.map((item, index) => (
                    <div key={index} className="carousel-content">
                      <div className="content-wrapper">
                        <div className="why-us-card-title">{item.title}</div>
                        <div className="why-us-card-description">
                          {item.description}
                        </div>
                      </div>
                      <div className="items-center">
                        <img
                          src={Progress}
                          alt="banner"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  )) }
                </div>
              </div>
            </div>
          </div>
        </Box>
        <div
          className="section"
          style={
            screenWidth <= 820 ? { display: "block" } : { display: "none" }
          }
        >
          <div
            className="section-title poppins-regular"
            style={{ marginBottom: "30px" }}
          >
            <span className="poppins-semibold">Why</span>
            <span> UKL</span>
          </div>

          {/* Scrollable Container */}
           <div
           style={{
             display: "flex",
             overflowX: "auto",
             padding: "10px",
             scrollbarWidth: "auto", // For Firefox
             msOverflowStyle: "auto", // For Internet Explorer/Edge
           }}
         >
           <style jsx>{`
             /* For WebKit browsers (Chrome, Safari) */
             div::-webkit-scrollbar {
               width: 8px;
               height: 8px;
             }
             div::-webkit-scrollbar-thumb {
               background-color: #0F5BA5; /* Customize scrollbar color */
               border-radius: 4px;
             }
             div::-webkit-scrollbar-track {
               background-color: #f0f0f0;
             }
           `}</style>
            <div className="card" style={{ marginLeft: "10px", flexShrink: 0 }}>
              <div
                className="card-body"
                style={{
                  width: 318,
                  backgroundColor: "#EEF2F7",
                  height: 530,
                  marginRight: 20,
                }}
              >
                <h5 className="card-title">Empowerment for global impact</h5>
                <p className="card-text">
                  At our company, we empower individuals to define and achieve
                  success on their own terms. Here, you're not just an employee;
                  you're the architect of your own future. Together, we're
                  driving global ambitions
                </p>
                <div className="items-center">
                  <img src={Progress} alt="banner" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            <div className="card" style={{ flexShrink: 0 }}>
              <div
                className="card-body"
                style={{
                  width: 318,
                  backgroundColor: "#EEF2F7",
                  height: 530,
                  marginRight: 20,
                }}
              >
                <h5 className="card-title">
                  Powerful Teams Efficient Together
                </h5>
                <p className="card-text">
                  You're not just part of the crowd; you're essential to our
                  success. We are dedicated to your personal and professional
                  growth, providing individualized attention and opportunities
                  to help you achieve your highest potential.
                </p>
                <div className="items-center">
                  <img src={Progress} alt="banner" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            <div className="card" style={{ flexShrink: 0 }}>
              <div
                className="card-body"
                style={{
                  width: 318,
                  backgroundColor: "#EEF2F7",
                  height: 530,
                  marginRight: 20,
                }}
              >
                <h5 className="card-title">
                  Personalized Growth, Tailored for Success
                </h5>
                <p className="card-text">
                  At the core of our organization's strength lies the synergy of
                  our teams. You'll have the opportunity to collaborate with
                  diverse talent and explore limitless learning possibilities.
                  Together, we transcend mere efficiency; we become an
                  unstoppable force.
                </p>
                <div className="items-center">
                  <img src={Progress} alt="banner" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="text-center">
          <div className="find-big-bold poppins-semibold">
            Find <span className="font-light">Your Next Role</span>
          </div>
          <div className="flex flex-row gap-10 pt-30 shuffle-mobile">
            <TextField
              fullWidth
              id="fullWidth"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              style={{
                width: "40%",
                border: "1px solid #0B3255",
                outline: "none",
                paddingLeft: 10,
                fontSize: 20,
                fontWeight: 400,
                height: 61,
                "&placeholder": {
                  color: "#000000",
                  fontSize: 11,
                },
                "& fieldset": { background: "#000", height: 61 },
              }}
              placeholder="Search"
              InputProps={{
                style: {
                  height: 61,
                  color: "#AFAFAF",
                  fontSize: 14,
                },
                classes: {
                  input: {
                    height: 200,
                    "&::placeholder": {
                      color: "#AFAFAF",
                      fontSize: 11,
                    },
                  },
                },
                disableUnderline: true,

                startAdornment: (
                  <InputAdornment position="start">
                    <img src={SearchIcon} className="Search-Icon" />{" "}
                  </InputAdornment>
                ),
              }}
              className=" ml-10"
            />

        <select
              className="dropdown-text px-5"
              style={{ backgroundImage: `url(${SelectArrow})` }}
            >
              <option>Function</option>
              <option>Function</option>
              <option>Function</option>
            </select>
            <select
              placeholder="Sort By"
              className="dropdown-text px-5"
              style={{ backgroundImage: `url(${SelectArrow})` }}
            >
              <option>Location</option>
              <option>Location</option>
              <option>Location</option>
            </select>
            <select
              placeholder="Sort By"
              className="dropdown-text px-5"
              style={{ backgroundImage: `url(${SelectArrow})` }}
            >
              <option>Sort By</option>
              <option>Sort By</option>
              <option>Sort By</option>
            </select>
          </div>
        </div>  */}
        {/* <div className=" w-full  flex gap-10 pt-40">
          <div className="w-1/2 job-list-container">
            <div className="flex flex-col gap-9 job-list">
              <div className="flex justify-between p-8 Senior-manager-container">
                <div className="text-center d-flex justify-between flex-col">
                  <div
                    className="job-title"
                    style={
                      screenWidth < 820
                        ? { fontSize: "24px", paddingTop: "0px !important" }
                        : {}
                    }
                  >
                    Senior Manager
                  </div>
                  <div className="flex  gap-20  Senior-manager-container-text">
                    <div className="flex gap-2">
                      <span>
                        <img src={Location1} />
                      </span>
                      Pune
                    </div>
                    <div className="flex gap-2">
                      <span>
                        {" "}
                        <img src={User} />
                      </span>
                      10+Years Experience
                    </div>
                    <div className="flex gap-2">
                      {" "}
                      <span>
                        {" "}
                        <img src={Briefcase} />
                      </span>
                      Full Time
                    </div>
                  </div>
                </div>
                <div className="rounded-full right-arrow">
                  <img style={{ padding: 22 }} src={RightArrow} />
                </div>
              </div>
              <div
                className="flex justify-between p-8 Senior-manager-container"
                style={{
                  border: "1px solid #CFCCC4",
                  boxShadow: "0px 4px 26px 0px #A9886921",
                }}
              >
                <div className="text-center d-flex justify-between flex-col">
                  <div
                    className="job-title"
                    style={
                      screenWidth < 820
                        ? { fontSize: "24px", paddingTop: "0px !important" }
                        : {}
                    }
                  >
                    Senior Manager
                  </div>
                  <div className="flex  gap-20  Senior-manager-container-text">
                    <div className="flex gap-2">
                      <span>
                        <img src={Location1} />
                      </span>
                      Pune
                    </div>
                    <div className="flex gap-2">
                      <span>
                        {" "}
                        <img src={User} />
                      </span>
                      10+Years Experience
                    </div>
                    <div className="flex gap-2">
                      {" "}
                      <span>
                        {" "}
                        <img src={Briefcase} />
                      </span>
                      Full Time
                    </div>
                  </div>
                </div>
                <div className="rounded-full right-arrow">
                  <img style={{ padding: 22 }} src={RightArrow} />
                </div>
              </div>
              <div className="flex justify-between p-8 Senior-manager-container">
                <div className="text-center d-flex justify-between flex-col">
                  <div
                    className="job-title"
                    style={
                      screenWidth < 820
                        ? { fontSize: "24px", paddingTop: "0px !important" }
                        : {}
                    }
                  >
                    Senior Manager
                  </div>
                  <div className="flex gap-20  Senior-manager-container-text">
                    <div className="flex gap-2">
                      <span>
                        <img src={Location1} />
                      </span>
                      Pune
                    </div>
                    <div className="flex gap-2">
                      <span>
                        {" "}
                        <img src={User} />
                      </span>
                      10+Years Experience
                    </div>
                    <div className="flex gap-2">
                      {" "}
                      <span>
                        {" "}
                        <img src={Briefcase} />
                      </span>
                      Full Time
                    </div>
                  </div>
                </div>
        <div className="rounded-full right-arrow">
                  <img style={{ padding: 22 }} src={RightArrow} />
                </div>
              </div>
              <div className="flex justify-between p-8 Senior-manager-container">
                <div className="text-center d-flex justify-between flex-col">
                  <div
                    className="job-title"
                    style={
                      screenWidth < 820
                        ? { fontSize: "24px", paddingTop: "0px !important" }
                        : {}
                    }
                  >
                    Senior Manager
                  </div>
                  <div className="flex gap-20  Senior-manager-container-text">
                    <div className="flex gap-2">
                      <span>
                        <img src={Location1} />
                      </span>
                      Pune
                    </div>
                    <div className="flex gap-2">
                      <span>
                        {" "}
                        <img src={User} />
                      </span>
                      10+Years Experience
                    </div>
                    <div className="flex gap-2">
                      {" "}
                      <span>
                        {" "}
                        <img src={Briefcase} />
                      </span>
                      Full Time
                    </div>
                  </div>
                </div>
                <div className="rounded-full right-arrow">
                  <img style={{ padding: 22 }} src={RightArrow} />
                </div>
              </div>
            </div>
          </div>
         <div className="w-1/2 job-description-container p-8 d-flex flex-col justify-between">
            <div>
              <div className="job-description ">Job Description</div>
              <div className="Senior-manager-container-text pt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation .<br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation .
              </div>

              <div className="job-description pt-12">Requirements</div>
              <div className="Senior-manager-container-text pt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                <br />
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                className="apply-button-class d-flex"
                style={{ borderRadius: "0 !important" }}
              >
                <span className="pr-10">Apply Now</span>
                <span>
                  <img src={ButtonArrow} alt="arrow" className="mt-8" />
                </span>
              </button>
            </div>
          </div>
        </div>  */}
        <div
          className="text-center pt-[-10px] md:pt-0 container"
          style={
            screenWidth <= 820
              ? { paddingLeft: "25px", paddingRight: "25px" }
              : {}
          }
        >
          <div className="find-big-bold">
            Want To Apply
            <span className="font-light">
              {" "}
              But Don’t See An <br />
              Opportunity Listed?
              {/* in building a sustainable <br /> world together! */}
            </span>
          </div>
          <div
            className="font-16 font-regular pt-20 poppins"
            style={screenWidth <= 820 ? { paddingTop: "10px" } : {}}
          >
            Apply here to grow your future with us
          </div>
          <div className="pt-30">
            <div className="flex justify-center gap-10 input-container">
              <div className="pb-30 w-2/5 input-field">
                <TextField
                  name="fullName"
                  label="Full Name"
                  variant="standard"
                  size="normal"
                  className="w-100"
                  value={formData?.fullName}
                  onChange={handleChange}
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                  InputProps={{ style: { fontSize: "16px" } }}
                  InputLabelProps={{
                    style: {
                      fontSize: "16px",
                      position: "absolute",
                      color: "#182023",
                      top: "-10px",
                      opacity: 0.5,
                    },
                  }}
                />
              </div>
              <div className="pb-30 w-2/5 input-field">
                <TextField
                  name="email"
                  label="Email ID"
                  variant="standard"
                  className="w-100"
                  type="email"
                  value={formData?.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{ style: { fontSize: "16px" } }}
                  InputLabelProps={{
                    style: {
                      fontSize: "16px",
                      position: "absolute",
                      color: "#182023",
                      top: "-10px",
                      opacity: 0.5,
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center gap-10 input-container">
              <div className="w-2/5 input-field">
                <TextField
                  name="phoneNumber"
                  label="Phone Number"
                  variant="standard"
                  className="w-100"
                  itemProp="telephone"
                  value={formData?.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  InputProps={{ style: { fontSize: "16px" } }}
                  InputLabelProps={{
                    style: {
                      fontSize: "16px",
                      position: "absolute",
                      color: "#182023",
                      top: "-10px",
                      opacity: 0.5,
                    },
                  }}
                />
              </div>
              <div className="pb-30 w-2/5 relative input-field">
                <TextField
                  label="Upload Resume"
                  variant="standard"
                  className="w-100"
                  onClick={() =>
                    uploadInputRef.current && uploadInputRef.current.click()
                  }
                  value={formData?.resume?.name || ""}
                  placeholder="Select a file"
                  error={!!errors.resume}
                  helperText={errors.resume}
                  InputProps={{ style: { fontSize: "16px" } }}
                  InputLabelProps={{
                    shrink: !!formData?.resume?.name,
                    style: {
                      fontSize: "16px",
                      position: "absolute",
                      color: "#182023",
                      top: "-10px",
                      opacity: 0.5,
                    },
                  }}
                />

                <input
                  type="file"
                  name="resume"
                  ref={uploadInputRef}
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div
              className="pb-30 final-input"
              style={{ paddingLeft: "9%", paddingRight: "9%" }}
            >
              <TextField
                name="message"
                label="Your Message"
                variant="standard"
                size="normal"
                className="w-100 justify-center"
                value={formData?.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                InputProps={{ style: { fontSize: "16px" } }}
                InputLabelProps={{
                  style: {
                    fontSize: "16px",
                    position: "absolute",
                    color: "#182023",
                    top: "-10px",
                    opacity: 0.5,
                  },
                }}
              />
            </div>
          </div>
          <Box sx={{ pb: 3 }}>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              itemProp="application"
              className="submit-button"
            >
              <span className="pr-2 md:text-[20px] text-[16px]">Submit</span>
              <span>
                <img src={ButtonArrow} alt="arrow" description="arrow" />
              </span>
            </button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Careers;
