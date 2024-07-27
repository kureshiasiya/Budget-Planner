// src/components/ReviewSave.js

import React from "react";
import "./ReviewSave.css";
const ReviewSave = ({ formData, handleEdit }) => {
  const handleSave = () => {
    localStorage.setItem("budgetData", JSON.stringify(formData));
  };

  // Function to determine the currency symbol
  const getCurrencySymbol = (currency) => {
    switch (currency) {
      case "INR":
        return "₹";
      case "USD":
        return "$";
      // Add other currencies as needed
      default:
        return "";
    }
  };

  return (
    <div className="review-save-container">
      <h2>Review and Save</h2>
      <div>
        <h3>User Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Preferred Currency: {formData.currency}</p>
      </div>
      <div>
        <h3>Income and Expenses</h3>
        <p>
          Monthly Income: {getCurrencySymbol(formData.currency)}
          {formData.income}
        </p>
        <h4>Expenses:</h4>
        <ul>
          {formData.expenses.map((expense, index) => (
            <li key={index}>
              {expense.name}: {getCurrencySymbol(formData.currency)}
              {expense.amount}
            </li>
          ))}
        </ul>
      </div>
      <div className="button-container">
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ReviewSave;
