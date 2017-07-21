import React from 'react';
import { Button } from 'antd';

const ExpenseInput = () => {
    return (
        <div>
            <p>Expense name:</p>
            <p>Expense amount:</p>
            <Button type="primary">Submit</Button>
        </div>
    );
}

export default ExpenseInput;