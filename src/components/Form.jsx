import React, { useState, useRef, useEffect } from "react";
import SmallMap from "../assets/images/small-map.png";
import WhitePhone from "../assets/images/white-phone.svg";
import WhiteMail from "../assets/images/white-mail.svg";
import TextField from "@mui/material/TextField";
import ButtonArrow from "../assets/images/button-arrow.svg";
import WhiteLocation from "../assets/images/white-location.svg";
import * as yup from "yup";
import { Box } from "@mui/material";

const Form = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    resume: null,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const uploadInputRef = useRef(null);

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

    const requestBody = {
      data: {
        full_name: formData.fullName,
        email_id: formData.email,
        phone_number: formData.phoneNumber,
        location: formData.location, // optional
        message: formData.message,
      },
    };

    try {
      const response = await fetch(
        "https://ukladmin.3mindsdigital.com/api/contact-forms",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Handle success, e.g., show a success message
        alert("Form submitted successfully!");
      } else {
        // Handle errors
        console.error("Error:", result);
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

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

  const isMobile = screenWidth <= 820;

  return (
    <div
      className="form-container flex-align-center  "
      id="unique-contact-form"
      style={{ paddingTop: "100px", padding: isMobile ? "0 20px" : "0px" }}
      itemScope
      itemType="http://schema.org/ContactPage"
    >
      <div class="w-100 flex-align-center flex form-wrapper">
        <div
          class="content-section"
          itemScope
          itemType="http://schema.org/Organization"
        >
          {/* <div className="form-content"> */}
          <div className="content-title">Partner With Us</div>
          <div
            className="content-headoffice"
            itemProp="location"
            itemScope
            itemType="http://schema.org/Place"
          >
            <span itemProp="name">UniKlinger Head Office</span>
            {/* </div> */}
          </div>
          <div class="pt-[15px] pb-[15px] d-flex">
            {/* <div className="pr-10">
              <img
                src={WhiteLocation}
                alt="locate-us"
                // style={screenWidth >= 820 ?{ width: "12px" } : { width: '40px' }}
                style={{
                  width: screenWidth <= 820 ? "20px" : "20px",
                  height: "17px",
                }}
                className="mt-5"
                description="locate-us"
                itemProp="image"
              />
              
            </div> */}

            <div
              className="poppins-regular addressText color-white"
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">
                Kohinoor Estate, SC 1, 5th Floor Opp. Bajaj Garden,
              </span>{" "}
              {isMobile ? " " : <br />}
              <span itemProp="addressLocality">
                Pune - Mumbai Road Khadki, Pune
              </span>{" "}
              - <span itemProp="postalCode">411003</span>
            </div>
          </div>
          <div
            style={{ height: isMobile ? "auto" : "145px", borderRadius: "4px" }}
          >
            {/* <img
              src={SmallMap}
              alt="small-map"
              className="banner-image pt-10 pb-10"
              description="map"
              itemProp="image"
              style={{ height: "inherit" }}
            /> */}
            <Box
              sx={{
                width: "100%",
                height: "100%"
              }}
            >
               <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6144195780653!2d73.85008497501387!3d18.54631848255214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c09a3effffff%3A0x4aabf3bec10d15b4!2sUni%20Klinger%20Limited!5e0!3m2!1sen!2sin!4v1732707489666!5m2!1sen!2sin"
              width="100%"
              height="180"
              allowFullScreen
            />
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6144195780653!2d73.85008497501387!3d18.54631848255214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c09a3effffff%3A0x4aabf3bec10d15b4!2sUni%20Klinger%20Limited!5e0!3m2!1sen!2sin!4v1732707489666!5m2!1sen!2sin"
                allowfullscreen
                loading="lazy"
              /> */}
            </Box>
          </div>
          <div className="d-flex flex-row flex-col justify-between  pt-20 md:pt-0">
            <div class=" pb-10 d-flex items-center" style={{paddingTop: isMobile? 0 : 40}}>
              <span className="pr-10">
                <img
                  style={{ width: 15, height: 15 }}
                  src={WhitePhone}
                  alt="call-us"
                  description="call-us"
                  itemProp="telephone"
                />
              </span>
              <span className="poppins-regular text-[14px] md:text-[16px]">
                <a
                  href="tel:+912041023000"
                  style={{ color: "white" }}
                  itemProp="telephone"
                  title="phone"
                >
                  +912041023000
                </a>
              </span>
            </div>
            <div class="pt-10 pb-10 d-flex items-center ">
              <span className="pr-10">
                <img
                  style={{ width: 15, height: 15 }}
                  src={WhiteMail}
                  alt="mail-to"
                  description="mail-to"
                />
              </span>
              <span className="poppins-regular text-[14px] md:text-[16px]">
                <a
                  href="mailto:salescal@uniklinger.com"
                  style={{ color: "white" }}
                  itemProp="email"
                  title="email"
                >
                  salescal@uniklinger.com
                </a>
              </span>
            </div>
          </div>
        </div>
        <form
          class="fields-section  md:p-20 "
          style={{
            height: "570px",
            width: "570px",
            backgroundColor: isMobile ? "#FFFFFF" : "#f9fbfc",
            border: isMobile ? "none" : "1px solid #e6e6e6",
            // padding: isMobile ? "0px 20px" : "0px"
          }}
          itemScope
          itemType="http://schema.org/ContactForm"
        >
          <div className="md:pb-[30px] md:pt-[50px] pb-[10px]" style={{paddingLeft: isMobile? "15px": 0, paddingRight: isMobile? "15px": 0}}>
            <TextField
              id="standard-size-normal"
              label="Full Name"
              variant="standard"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
              size="normal"
              className="w-100"
              InputProps={{
                style: { fontSize: "16px" },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "16px",
                  position: "absolute",
                  top: "-10px",
                  color: "#a3a6a7",
                },
              }}
              itemProp="name"
            />
          </div>
          <div className="md:pb-[30px] pb-[10px]" style={{paddingLeft: isMobile? "15px": 0, paddingRight: isMobile? "15px": 0}}>
            <TextField
              id="standard-size-normal"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              label="Email ID"
              variant="standard"
              className="w-100"
              InputProps={{
                style: { fontSize: "16px" },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "16px",
                  position: "absolute",
                  top: "-10px",
                  color: "#a3a6a7",
                },
              }}
              itemProp="email"
            />
          </div>
          <div className="md:pb-[30px] pb-[10px]" style={{paddingLeft: isMobile? "15px": 0, paddingRight: isMobile? "15px": 0}}>
            <TextField
              id="standard-size-normal"
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              variant="standard"
              className="w-100"
              InputProps={{
                style: { fontSize: "16px" },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "16px",
                  position: "absolute",
                  top: "-10px",
                  color: "#a3a6a7",
                },
              }}
              itemProp="telephone"
            />
          </div>
          <div className="md:pb-[30px] pb-[10px]" style={{paddingLeft: isMobile? "15px": 0, paddingRight: isMobile? "15px": 0}}>
            <TextField
              id="standard-size-normal"
              label="Your Location (optional)"
              variant="standard"
              className="w-100"
              InputProps={{
                style: { fontSize: "16px" },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "16px",
                  position: "absolute",
                  top: "-10px",
                  color: "#a3a6a7",
                },
              }}
              itemProp="address"
            />
          </div>
          <div className="md:pb-[30px]  pb-[10px]" style={{paddingLeft: isMobile? "15px": 0, paddingRight: isMobile? "15px": 0}}>
            <TextField
              id="standard-size-normal"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              label="Your Message"
              variant="standard"
              className="w-100"
              InputProps={{
                style: { fontSize: "16px" },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "16px",
                  position: "absolute",
                  top: "-10px",
                  color: "#a3a6a7",
                },
              }}
              itemProp="message"
            />
          </div>
          <div>
            <Box sx={{ py: { xs: 3, md: 0 },pl: {xs: 1.5, md: 0} }}>
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="button-class d-flex w-[126px] md:w-[180px] h-[40px] justify-center items-center mb-8 mt-8"
                itemProp="submit"
              >
                <span className="pr-10">Submit</span>
                <div>
                  <img src={ButtonArrow} alt="arrow" description="arrow" />
                </div>
              </button>
            </Box>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
