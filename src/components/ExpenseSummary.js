import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <h2>Total Expenses: ${total.toFixed(2)}</h2>
  );
};

export default ExpenseSummary;