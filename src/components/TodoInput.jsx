/* eslint-disable react/prop-types */
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react"


function TodoInput({ handleAddClick }) {

  const [inputText, setInputText] = useState("")

  function handleInputTextChange(e) {
    setInputText(e.target.value)
  }

  return (
    <div className="shadow-violet-400 shadow-md mb-5 md:mb-10 rounded-md flex justify-between items-center px-3 py-2 md:px-10 md:py-5">
      <input
        type="text"
        placeholder="Add Your Tasks Here..."
        value={inputText}
        onChange={handleInputTextChange}
        className="w-[90%] bg-transparent text-black border-none outline-none text-sm md:text-lg placeholder:text-gray-800 placeholder:italic" />
      {
        inputText &&
        <AddIcon
          className='cursor-pointer'
          onClick={() => handleAddClick(inputText, setInputText)}
        />
      }
    </div>
  )
}

export default TodoInput
























































// import { useState } from "react"

// function Input({onAdd}) {

//     const [inputText, setInputText] = useState("")

//   return (
//     <div>
//       <input
//       type="text"
//       value={inputText}
//       onChange={(e) => setInputText(e.target.value)}
//       className=""/>
//       <button
//       onClick={() => onAdd(inputText, setInputText)}
//       className="">
//         ADD
//       </button>
//     </div>
//   )
// }

// export default Input