import TodoInput from './TodoInput';
import { useState } from 'react';
import TodoList from './TodoList';

let nextID = 2;

function TodoContainer() {

    const [todos, setTodos] = useState([
        {
            id: 0,
            todo: "Revise React",
            isCompleted: false,
            isEditing: false,
            editText: "",
        },
        {
            id: 1,
            todo: "Make Projects",
            isCompleted: false,
            isEditing: false,
            editText: "",
        }
    ])

    const onAddClick = (inputText, setInputText) => {
        setTodos([
            ...todos,
            {
                id: nextID++,
                todo: inputText,
            }
        ])
        setInputText("")
    }

    const onCheckboxClick = (id) => {
        const completedTasks = todos.map( 
            t => t.id === id ? 
            {...t, isCompleted: !t.isCompleted} : t
        )
        setTodos(completedTasks)
    }

    const onEditToggleClick = (id) => {   
        const editedTask = todos.map(
            t => t.id === id ? 
            {...t, isEditing: !t.isEditing} : t
        )
        setTodos(editedTask)
    }

    const onEditTextClick = (id, e) => {
        const newText = todos.map( 
            t => t.id === id ?
            {...t, editText: e.target.value} : t
        )
        setTodos(newText)
    }

    const onEditSaveClick = (id) => {
        const updatedText = todos.map(
            t => t.id === id ? {...t, todo: t.editText, isEditing: false} : t
        )
        setTodos(updatedText)
    }

    const onDeleteClick = (id) => {
        const undeletedText = todos.filter(
            t => t.id !== id)
        setTodos(undeletedText)
    }

  return (
    <div className='bg-violet-300 min-h-screen w-[90%] md:w-[50%] m-auto mt-5 rounded-md'>
        <TodoInput 
            handleAddClick={onAddClick}
        />
        <TodoList 
            todos={todos}
            handleCheckboxClick={onCheckboxClick}
            handleEditToggleClick={onEditToggleClick}
            handleEditTextClick={onEditTextClick}
            handleEditSaveClick={onEditSaveClick}
            handleDeleteClick={onDeleteClick}
        />
    </div>
  )
}

export default TodoContainer
