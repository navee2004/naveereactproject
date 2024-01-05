import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./footer.styles.css";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";

const Footer = () => {
  const form = useRef();
  const serviceId = "service_44botzw";
  const templateId = "template_mz08lnq";
  const publicKey = "uCrsPEyakNRLUAnci";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((response) => {
        console.log(response.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section className="footer-container">
      <Button size="large" color="warning" variant="contained">
        <Link style={{"color" : "white", "textDecoration":"none"}} to="/contact">
          Contact Us
        </Link>
      </Button>
    </section>
  );
};

export default Footer;
