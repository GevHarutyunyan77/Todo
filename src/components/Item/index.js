import React from 'react';
import './style.css'
import DeleteSVG from "../../assets/svg/deleteSVG";
import {useDispatch} from "react-redux";
import {deleteItem, editChecked, editItem} from "../../state/todo";
import EditSVG from "../../assets/svg/editSVG";

function Item({checked, text, index}) {
    const dispatch = useDispatch()
    const handleCheckedChange = () => {
        dispatch(editChecked(index))
    }
    const handleDelete = () => {
        dispatch(deleteItem(index))
    }
    const handleEdit = () => {
        dispatch(editItem({text, index}))
    }


    return (
        <div className='container' style={{borderColor: checked && 'blue'}}>
            <div>
                <input type={"checkbox"} checked={checked} onChange={handleCheckedChange}/>
                <span className='text'>{text}</span>
            </div>
            <div className='bigContainer'>
                <div className='svgContainer' onClick={handleDelete}>
                    <DeleteSVG fill={'red'}/>
                </div>
                <div className='svgContainer' onClick={handleEdit}>
                    <EditSVG fill={'white'}/>
                </div>
            </div>

        </div>
    );
}

export default Item;
