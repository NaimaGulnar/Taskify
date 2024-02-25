/* eslint-disable react/prop-types */

// Importing required hooks and icons 
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react"

// This component is called inside the "TodoContainer" component
// It renders input field for adding new tasks
// And receives handleAddClick function as props to handle adding tasks
function TodoInput({ handleAddClick }) {

  // inputText: State to store the text input value
  // setInputText: Function to update the inputText state
  const [inputText, setInputText] = useState("")  // Initializing inputText state with an empty string

  // Function to handle input text change event
  function handleInputTextChange(e) {
    setInputText(e.target.value); // Updating inputText state with the value entered in the input field
  }


  // Rendering JSX for TodoInput component
  return (
    <div className="shadow-violet-400 shadow-md mb-5 md:mb-10 rounded-md flex justify-between items-center px-3 py-2 md:px-10 md:py-5">
      {/* Input field for entering task text */}
      <input
        type="text"
        placeholder="Add Your Tasks Here..."
        value={inputText}
        onChange={handleInputTextChange}
        className="w-[90%] bg-transparent text-black border-none outline-none text-sm md:text-lg placeholder:text-gray-800 placeholder:italic" />
      {/* Render AddIcon if inputText is not empty */}
      {
        inputText &&
        <AddIcon
          className='cursor-pointer'
          // This event handler calls the handleAddClick function passed as a prop to the TodoInput component
          // It passes two arguments: inputText and setInputText
          onClick={() => handleAddClick(inputText, setInputText)}   // Handling click event to add a todo item
        />
      }
    </div>
  )
}

export default TodoInput
