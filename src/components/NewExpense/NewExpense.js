import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const expenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveForm={expenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
