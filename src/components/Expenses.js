import ExpenseItem from "./ExpenseItem.js";
import Card from "./card.js";
import "./Expenses.css"

const Expenses = (props) => {
    return(
        <Card ClassName="expenses">
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses