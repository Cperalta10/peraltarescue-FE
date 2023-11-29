import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", {
      firstName,
      lastName,
      phoneNumber,
      email,
      comment,
    });
  };

  return (
    <div className="form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Comment:
          <textarea
            className="commentInp"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
