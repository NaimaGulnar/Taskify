/* eslint-disable react/prop-types */

import EditIcon from '@mui/icons-material/Edit';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

function TodoList({ todos, handleCheckboxClick, handleEditToggleClick, handleEditTextClick, handleEditSaveClick, handleDeleteClick }) {
    return (
        <div className=''>
            {todos.map(t =>
                <div key={t.id} className="flex items-center gap-3 px-2 md:px-5 text-black border-2 border-violet-500 mb-2 mx-1 md:mx-10 py-1 md:py-3 rounded-md ">
                    {
                        t.isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={t.editText}
                                    onChange={() => handleEditTextClick(t.id, event)} 
                                    className='text-sm md:text-lg bg-transparent border-b-2 outline-none border-black w-[90%] px-2 ' /> 
                                <DoneOutlinedIcon 
                                    onClick={() => handleEditSaveClick(t.id)}
                                    className='cursor-pointer'
                                />
                            </>
                        ) : (
                            <>
                                <div
                                onClick={() => handleCheckboxClick(t.id)}
                                className='cursor-pointer'>
                                {
                                    t.isCompleted ?
                                        <CheckBoxOutlinedIcon /> :
                                        <CheckBoxOutlineBlankOutlinedIcon />
                                }
                                </div>
                                <p
                                style={{ textDecoration: t.isCompleted ? "line-through" : "" }}
                                className='text-black font-semibold text-sm md:text-lg ml-2 w-[90%]'>
                                    {t.todo}
                                </p>
                                {
                                    !t.isEditing && 
                                    <EditIcon 
                                    onClick={() => handleEditToggleClick(t.id)}
                                    className='cursor-pointer'
                                    />
                                }
                                <DeleteIcon
                                    onClick={()=> handleDeleteClick(t.id)}
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
