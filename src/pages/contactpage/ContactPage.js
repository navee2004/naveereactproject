import React, { useRef } from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import "./ContactPage.styles.css";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";

function ContactPage() {
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
    <section className="contact-container">
      <Navbar darkText={true} />
      <div className="container">
        <h2>If you have any queries feel free to ask here.</h2>

        <form onSubmit={handleSubmit} ref={form} className="footer-form">
          <div className="form-group">
            <TextField
              type="text"
              className="form-input"
              style={{ marginTop: "1vh" }}
              size="medium"
              id="filled-basic"
              label="Enter Your Name"
              variant="filled"
            />
          </div>

          <div className="form-group">
          <TextField
              type="email"
              className="form-input"
              style={{ marginTop: "1vh" }}
              size="medium"
              id="filled-basic"
              label="Enter Your Email"
              variant="filled"
            />
          </div>

          <div className="form-group">
          <TextField
              type="textarea"
              className="form-input"
              style={{ marginTop: "1vh" }}
              size="medium"
              id="filled-basic"
              label="Enter Your Query"
              variant="filled"
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="form-submit" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
