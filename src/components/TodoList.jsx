/* eslint-disable react/prop-types */

// Importing required icons from Material UI
import EditIcon from '@mui/icons-material/Edit';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

// This component is called inside the "TodoContainer" component
// It renders a list of todo items with interactive functionalities 
// And receives todos array and several handler functions as props to manage todo items
function TodoList({ todos, handleCheckboxClick, handleEditToggleClick, handleEditTextClick, handleEditSaveClick, handleDeleteClick }) {
    // Rendering JSX for TodoList component
    return (
        <div className=''>
            {/* Mapping over the todos array to render each todo item */}
            {todos.map(t =>
                <div key={t.id} className="flex items-center gap-3 px-2 md:px-5 text-black border-2 border-violet-500 mb-2 mx-1 md:mx-10 py-1 md:py-3 rounded-md ">
                    {
                        // Conditionally rendering input field and DoneIcon if todo item is being edited
                        t.isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={t.editText}
                                    // This event handler calls the handleEditTextClick function passed as a prop to the TodoList component
                                    // It passes two arguments: todo's id and event object
                                    onChange={() => handleEditTextClick(t.id, event)} // Handling input change event for editing todo text
                                    className='text-sm md:text-lg bg-transparent border-b-2 outline-none border-black w-[90%] px-2 ' />
                                {/* DoneIcon to save the edited text */}
                                <DoneOutlinedIcon
                                    // This event handler calls the... (same logic as that of handleEditTextClick event handler func)
                                    onClick={() => handleEditSaveClick(t.id)} // Handling click event to save edited text
                                    className='cursor-pointer'
                                />
                            </>
                        ) : (
                            // If todo item is not being edited 
                            <>
                                <div
                                    // This event handler calls the... (same logic as that of handleEditTextClick event handler func)
                                    onClick={() => handleCheckboxClick(t.id)} // Handling click event to toggle completion status
                                    className='cursor-pointer'>
                                    {
                                        // Rendering checkbox icon based on completion status 
                                        t.isCompleted ?
                                            <CheckBoxOutlinedIcon /> :
                                            <CheckBoxOutlineBlankOutlinedIcon />
                                    }
                                </div>
                                <p
                                    style={{ textDecoration: t.isCompleted ? "line-through" : "" }}  // Applying strikethrough style for completed todos
                                    className='text-black font-semibold text-sm md:text-lg ml-2 w-[90%]'>
                                    {t.todo}  {/* Rendering todo text */}
                                </p>
                                {/* Render EditIcon if todo item is not being edited */}
                                {
                                    !t.isEditing &&
                                    <EditIcon
                                        // This event handler calls the... (same logic as that of handleEditTextClick event handler func)
                                        onClick={() => handleEditToggleClick(t.id)} // Handling click event to toggle editing mode
                                        className='cursor-pointer'
                                    />
                                }
                                {/* Render DeleteIcon to delete the todo item */}
                                <DeleteIcon
                                    // This event handler calls the... (same logic as that of handleEditTextClick event handler func)
                                    onClick={() => handleDeleteClick(t.id)} // Handling click event to delete the todo item
                                    className='cursor-pointer'
                                />
                            </>
                        )
                    }
                </div>
            )}
        </div>
    )
}

export default TodoList
