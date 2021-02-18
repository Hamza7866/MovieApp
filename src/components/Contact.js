import React from "react";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <button className="btn-contact" type="submit">
            Submit
          </button>
        </form>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
