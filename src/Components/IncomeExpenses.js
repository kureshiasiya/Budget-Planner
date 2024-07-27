// src/components/IncomeExpenses.js

import React from "react";
import "./IncomeExpenses.css";

const IncomeExpenses = ({
  formData,
  handleChange,
  handleExpenseChange,
  addExpense,
  removeExpense,
}) => {
  return (
    <div className="income-expenses-container">
      <h2>Income and Expenses</h2>
      <form>
        <div className="form-group">
          <label>Monthly Income:</label>
          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleChange}
            placeholder="Enter your monthly income"
            className="form-input"
          />
        </div>
        <div>
          <h3>Expenses:</h3>
          {formData.expenses.map((expense, index) => (
            <div key={index} className="expense-item">
              <input
                type="text"
                placeholder="Expense Name"
                name={`expenseName${index}`}
                value={expense.name}
                onChange={(e) =>
                  handleExpenseChange(index, "name", e.target.value)
                }
                className="form-input"
              />
              <input
                type="number"
                placeholder="Expense Amount"
                name={`expenseAmount${index}`}
                value={expense.amount}
                onChange={(e) =>
                  handleExpenseChange(index, "amount", e.target.value)
                }
                className="form-input"
              />
              <button type="button" onClick={() => removeExpense(index)}>
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addExpense}
            className="add-expense-button"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default IncomeExpenses;
