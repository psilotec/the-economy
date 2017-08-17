import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ExpenseInput extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const expenseNameError =
      isFieldTouched('expenseName') && getFieldError('expenseName');
    const expenseCostError =
      isFieldTouched('expenseCost') && getFieldError('expenseCost');

    return (
      <div className="expense-input">
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={expenseNameError ? 'error' : ''}
            help={expenseNameError || ''}
          >
            {getFieldDecorator('expenseName', {
              rules: [{ required: true, message: 'Please input expense name' }],
            })(
              <Input
                prefix={<Icon type="idcard" style={{ fontSize: 13 }} />}
                placeholder="Expense name"
              />
            )}
          </FormItem>

          <FormItem
            validateStatus={expenseCostError ? 'error' : ''}
            help={expenseCostError || ''}
          >
            {getFieldDecorator('expenseCost', {
              rules: [{ required: true, message: 'Please input expense cost' }],
            })(
              <Input
                prefix={<Icon type="wallet" style={{ fontSize: 13 }} />}
                type="number"
                placeholder="Expense cost"
              />
            )}
          </FormItem>

          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedExpenseInput = Form.create()(ExpenseInput);

export default WrappedExpenseInput;
