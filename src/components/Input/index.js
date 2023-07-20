import React, {useEffect, useState} from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {addToList, cancelEditMode, editInList} from "../../state/todo";

function Input(props) {
     const {editText, editMode, editIndex} = useSelector(state => state.todoSlice)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState( '')
    const handleTextChange = (ev) => {
        setInputValue(ev.target.value)
    }

    const handleClick = () => {
        if (inputValue) {
            if(editMode){
                dispatch(editInList({text:inputValue, index:+editIndex}))
                dispatch(cancelEditMode())
                setInputValue('')
            }else {
                dispatch(addToList({checked: false, text: inputValue}))
                setInputValue('')
            }

        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick()
        }
    }

    const handleCancel = () => {
        dispatch(cancelEditMode())
    }


    useEffect(()=>{
        setInputValue(editText)
    },[editText])


    return (
        <div className='inputContainer'>
            {
                editMode &&   <button onClick={handleCancel}>Cancel</button>
            }
            <input type={"text"} value={inputValue} onChange={handleTextChange} placeholder='Add a task'
                   onKeyDown={handleKeyDown}/>
            <button className='addBtn' onClick={handleClick}>{editMode? 'Изменить': 'Добавить'}</button>
        </div>
    );
}

export default Input;
