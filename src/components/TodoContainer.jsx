// Importing necessary hooks and components
import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// Initializing a variable to track the ID of the next todo item (in this case, 2 todo items are already in the list with id "0" and "1")
let nextID = 2;

// This component is called inside the "TodoApp" component
// It is the main container for the Todo list app
function TodoContainer() {
    /* 
    todos: Array of todo objects containing todo item details 
        [
            {
                id: (Unique identifier for the todo item),
                todo: (Content of the todo item),
                isCompleted: (Indicates whether the todo item is completed),
                isEditing: (Indicates whether the todo item is being edited),
                editText: (Content of the todo item during editing)
            },
            {
                ...
            },
        ]
    */
    // setTodos: Function to update the todos state
    const [todos, setTodos] = useState([
        // 1st todo
        {
            id: 0,
            todo: "Revise React",
            isCompleted: false,
            isEditing: false,
            editText: "",
        },
        // 2nd todo
        {
            id: 1,
            todo: "Make Projects",
            isCompleted: false,
            isEditing: false,
            editText: "",
        }
        // more todo-items will be added using setTodos func....
    ])

    // Function to handle adding a new todo item (inputText and setInputText are coming from "TodoInput" component)
    const onAddClick = (inputText, setInputText) => {
        setTodos([
            ...todos,  // Spread operator to keep existing todo items
            {
                id: nextID++, // Assigning the nextID to the new todo item and incrementing it after it's assignment 
                todo: inputText, // Content of the new todo item (the content whatever user has typed into the inputText)
            }
        ])
        setInputText("") // Clearing the inputText field after adding todo
    }

    // Function to handle toggling the completion status (isCompleted -> T/F) of a todo item ("id" is the id of the todo on which the user has clicked to perform this action)
    const onCheckboxClick = (id) => {
        // Mapping over the array of todos
        const completedTasks = todos.map(
            // For each todo item (t) in the array, check if its id matches the id provided as an argument
            t => t.id === id ?
                // If the id matches, create a new object with the same properties as the current todo (spread operator), but toggle the value of isCompleted property (changing from true to false or vice versa)
                { ...t, isCompleted: !t.isCompleted } :
                // If the id doesn't match, return the current todo object without any modification
                t
        )
        setTodos(completedTasks) // Updating todos state with the modified array
    }

    // Function to handle toggling the editing status (isEditing -> T/F) of a todo item 
    // Same logic as that of onCheckboxCLick event handler
    const onEditToggleClick = (id) => {
        const editedTask = todos.map(
            t => t.id === id ?
                { ...t, isEditing: !t.isEditing } : t
        )
        setTodos(editedTask)

    }

    // Function to handle updating the edited text of a todo item ("e" is the event object that is passed as an argument to the event handler func)
    // Same logic as that of onCheckboxCLick event handler
    const onEditTextClick = (id, e) => {
        const newText = todos.map(
            t => t.id === id ?
                {
                    ...t,
                    // updating the editText property with the value from the event object (e.target.value)
                    editText: e.target.value
                } : t
        )
        setTodos(newText)
    }

    // Function to handle saving the edited text of a todo item
    // Same logic as that of onCheckboxCLick event handler 
    const onEditSaveClick = (id) => {
        const updatedText = todos.map(
            t => t.id === id ?
                {
                    ...t,
                    // update the todo property with the edited text (t.editText)
                    todo: t.editText,
                    // and set isEditing to false to indicate that editing mode is now turned off
                    isEditing: false
                } : t
        )
        setTodos(updatedText)
    }

    // Function to handle deleting a todo item
    const onDeleteClick = (id) => {
        // Filtering the array of todos
        const undeletedText = todos.filter(
            // For each todo item (t) in the array, keep only the items whose id does not match the id provided as an argument
            t => t.id !== id
        );
        setTodos(undeletedText); // Updating the todos state with the filtered array containing the remaining todo items (excluding the deleted one)
    }


    // Rendering JSX for TodoContainer component
    return (
        <div className='bg-violet-300 min-h-screen w-[90%] md:w-[50%] m-auto mt-5 rounded-md'>
            {/* Rendering TodoInput component */}
            <TodoInput
                handleAddClick={onAddClick} // Receives handleAddClick function as props to handle adding tasks
            />
            {/* Rendering TodoList component */}
            <TodoList
                todos={todos} // Passing the array of todo items
                handleCheckboxClick={onCheckboxClick} // Receives handleCheckboxClick function for toggling completion status
                handleEditToggleClick={onEditToggleClick} // Receives handleEditToggleClick function for toggling editing status
                handleEditTextClick={onEditTextClick} // Receives handleEditTextClick function for updating edited text
                handleEditSaveClick={onEditSaveClick} // Receives handleEditSaveClick function for saving edited text
                handleDeleteClick={onDeleteClick} // Receives handleDeleteClick function for deleting todo
            />
        </div>
    )
}

export default TodoContainer
