import React, { Component } from 'react';
import ExpenseListItem from './expense_list_item';

const expenses = [
    {id: 0, name: "first", date: "05/21/17", cost: "$16"},
    {id: 1, name: "Second", date: "05/21/17", cost: "$1632"},
    {id: 2, name: "Third thing that's really long let's see", date: "05/21/17", cost: "$136"},
    {id: 3, name: "Fourth", date: "05/21/17", cost: "$1446"},
    {id: 4, name: "Fifth", date: "05/21/17", cost: "$12"},
];

class ExpenseList extends Component {
    mapExpenses = () => {
        return expenses.map((expense) => {
            return(
            <div key={expense.id}>
                <ExpenseListItem name={expense.name} date={expense.date} cost={expense.cost} />
            </div>
            );
        });
    }

    render() {
        return (
            <div className="expense-list">
                {this.mapExpenses()}
            </div>
        );
    }
}

export default ExpenseList;