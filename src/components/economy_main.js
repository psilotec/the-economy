import React, { Component } from 'react';
import ExpenseList from './expense_list';
import EconomyTotal from './economy_total';
import ExpenseInput from './expense_input';

class EconomyMain extends Component {
  render() {
    return (
      <div>
        <ExpenseInput />
        <EconomyTotal />
        <ExpenseList />
      </div>
    );
  }
}

export default EconomyMain;
