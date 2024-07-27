// src/components/UserInfo.js

import React from "react";
import "./UserInfo.css"; // Ensure CSS file is imported

const UserInfo = ({ formData, handleChange }) => {
  return (
    <div className="form-container">
      <h2> User Information</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Preferred Currency:</label>
          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="form-input"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
