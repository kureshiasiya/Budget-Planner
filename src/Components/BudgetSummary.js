// src/components/BudgetSummary.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BudgetSummary.css";

const BudgetSummary = ({ formData }) => {
  const [conversionRate, setConversionRate] = useState(1);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${formData.currency}`
        );
        setConversionRate(response.data.rates["USD"]);
      } catch (error) {
        console.error("Error fetching conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, [formData.currency]);

  useEffect(() => {
    setTotalIncome(formData.income * conversionRate);
    setTotalExpenses(
      formData.expenses.reduce(
        (sum, expense) => sum + (expense.amount || 0),
        0
      ) * conversionRate
    );
  }, [formData, conversionRate]);

  const remainingBudget = totalIncome - totalExpenses;

  return (
    <div className="budget-summary-container">
      <h2>Budget Summary</h2>
      <h3>
        Total Income:{" "}
        {formData.currency === "INR"
          ? `₹${totalIncome.toFixed(2)}`
          : `$${totalIncome.toFixed(2)}`}
      </h3>
      <h3>
        Total Expenses:{" "}
        {formData.currency === "INR"
          ? `₹${totalExpenses.toFixed(2)}`
          : `$${totalExpenses.toFixed(2)}`}
      </h3>
      <h3>
        Remaining Budget:{" "}
        {formData.currency === "INR"
          ? `₹${remainingBudget.toFixed(2)}`
          : `$${remainingBudget.toFixed(2)}`}
      </h3>
    </div>
  );
};

export default BudgetSummary;
