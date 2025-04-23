import React from 'react';
import { FaTrash } from 'react-icons/fa';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.name} - ${expense.amount.toFixed(2)}
          <button onClick={() => deleteExpense(expense.id)}>
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;