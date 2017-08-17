import React from 'react';

const ExpenseListItem = ({ name, date, cost }) => {
  return (
    <div className="expense-list-item">
      <div className="expense-list-item-content">
        {name}
      </div>
      <div className="expense-list-item-content">
        {date}
      </div>
      <div className="expense-list-item-content">
        {cost}
      </div>
    </div>
  );
};

export default ExpenseListItem;
