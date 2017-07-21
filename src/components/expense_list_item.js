import React from 'react';

const ExpenseListItem = ({ name, date, cost}) => {
    return (
        <div className="expense-list-item">
            <p>{name}</p>
            <p>{date}</p>
            <p>{cost}</p>
        </div>
    );
}

export default ExpenseListItem;