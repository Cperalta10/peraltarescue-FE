import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const AdoptionForm = () => {
  const location = useLocation();
  const { catName } = location.state;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    catsName: "",
    occupation: "",
    email: "",
    homeAddress: "",
    city: "",
    state: "",
    zipCode: "",
    allergies: "No",
    asthma: "No",
    catCare: "Yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        Cat's Name:
        <input
          type="text"
          name="catsName"
          value={formData.catsName}
          onChange={handleChange}
        />
      </label>

      <label>
        Occupation:
        <input
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Home Address:
        <input
          type="text"
          name="homeAddress"
          value={formData.homeAddress}
          onChange={handleChange}
        />
      </label>

      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>

      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </label>

      <label>
        Zip Code:
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </label>

      <label>
        Do you or anyone else in your house have allergies?
        <select
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      <label>
        Do you or anyone else in your house have asthma?
        <select name="asthma" value={formData.asthma} onChange={handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      <label>
        Are you prepared to care for this cat for 15–20 years?
        <select name="catCare" value={formData.catCare} onChange={handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
    </form>
  );
};

export default AdoptionForm;
