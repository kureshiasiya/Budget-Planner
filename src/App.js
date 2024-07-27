// src/App.js

import React, { useState } from "react";
import NavigationButtons from "./Components/NavigationButtons";
import UserInfo from "./Components/UserInfo";
import IncomeExpenses from "./Components/IncomeExpenses";
import BudgetSummary from "./Components/BudgetSummary";
import ReviewAndSave from "./Components/ReviewSave";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    currency: "USD",
    income: "",
    expenses: [{ name: "", amount: "" }],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExpenseChange = (index, field, value) => {
    const newExpenses = formData.expenses.map((expense, i) =>
      i === index ? { ...expense, [field]: value } : expense
    );
    setFormData({ ...formData, expenses: newExpenses });
  };

  const addExpense = () => {
    setFormData({
      ...formData,
      expenses: [...formData.expenses, { name: "", amount: "" }],
    });
  };

  const removeExpense = (index) => {
    setFormData({
      ...formData,
      expenses: formData.expenses.filter((_, i) => i !== index),
    });
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  return (
    <div className="app">
      {step === 1 && (
        <UserInfo formData={formData} handleChange={handleChange} />
      )}
      {step === 2 && (
        <IncomeExpenses
          formData={formData}
          handleChange={handleChange}
          handleExpenseChange={handleExpenseChange}
          addExpense={addExpense}
          removeExpense={removeExpense}
        />
      )}
      {step === 3 && <BudgetSummary formData={formData} />}
      {step === 4 && <ReviewAndSave formData={formData} />}
      <NavigationButtons
        step={step}
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </div>
  );
};

export default App;
