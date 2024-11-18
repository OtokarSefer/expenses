import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveexpenseDateHandeler = (enteredexpenseDate) => {
        const expenseDate = {
            ...enteredexpenseDate,
            id: Math.random().toString()
        };
        console.log(expenseDate)
        props.onAddExpense(expenseDate);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveexpenseDate={saveexpenseDateHandeler}/>
        </div>
    )
}

export default NewExpense;