import React from "react";
import "./ReviewSave.css"; // Ensure CSS file is imported

const ReviewSave = ({ formData, handleEdit }) => {
  const handleSave = () => {
    localStorage.setItem("budgetData", JSON.stringify(formData));
  };

  return (
    <div className="review-save-container">
      <h2>Review and Save</h2>
      <div className="review-section">
        <h3>User Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Preferred Currency: {formData.currency}</p>
      </div>
      <div className="review-section">
        <h3>Income and Expenses</h3>
        <p>Monthly Income: ${formData.income}</p>
        <h4>Expenses:</h4>
        <ul>
          {formData.expenses.map((expense, index) => (
            <li key={index}>
              {expense.name}: ${expense.amount}
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
