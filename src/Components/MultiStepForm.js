// src/components/MultiStepForm.js

import React, { useState } from "react";
import UserInfo from "./UserInfo";
import IncomeExpenses from "./IncomeExpenses";
import BudgetSummary from "./BudgetSummary";
import ReviewSave from "./ReviewSave";
import "./MultiStepForm.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currency: "USD",
    income: 0,
    expenses: [{ name: "", amount: 0 }],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleExpenseChange = (index, field, value) => {
    const newExpenses = [...formData.expenses];
    newExpenses[index][field] = value;
    setFormData({ ...formData, expenses: newExpenses });
  };

  const addExpense = () => {
    setFormData({
      ...formData,
      expenses: [...formData.expenses, { name: "", amount: 0 }],
    });
  };

  const removeExpense = (index) => {
    const newExpenses = formData.expenses.filter((_, i) => i !== index);
    setFormData({ ...formData, expenses: newExpenses });
  };

  const handleEdit = () => {
    setStep(1);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <UserInfo formData={formData} handleChange={handleChange} />;
      case 2:
        return (
          <IncomeExpenses
            formData={formData}
            handleChange={handleChange}
            handleExpenseChange={handleExpenseChange}
            addExpense={addExpense}
            removeExpense={removeExpense}
          />
        );
      case 3:
        return <BudgetSummary formData={formData} />;
      case 4:
        return (
          <ReviewSave
            formData={formData}
            handleEdit={handleEdit}
            handleSave={() => {
              localStorage.setItem("budgetData", JSON.stringify(formData));
            }}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default MultiStepForm;
