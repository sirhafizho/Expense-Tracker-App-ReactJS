import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    function onSaveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }


    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={onSaveExpenseDataHandler} />}
    </div>
};

export default NewExpense;