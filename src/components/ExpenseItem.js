import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 5, 26);
  const expenseItem = 'Groceries';
  const expenseAmount = 500;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
