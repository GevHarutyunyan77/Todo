import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    dropDownActive: '1',
    editMode: false,
    editText: '',
    editIndex: ''
};

export const todoSlice = createSlice({
        name: 'todo',
        initialState,
        reducers: {
            addToList: (state, {payload}) => {
                state.todoList = [...state.todoList, payload]
            },
            editInList: (state, {payload}) => {
                state.todoList[payload.index].text = payload.text

                     },


            editChecked: (state, {payload}) => {
                state.todoList[payload].checked = !state.todoList[payload].checked
            },
            deleteItem: (state, {payload}) => {
                const result = [...state.todoList]
                result.splice(+payload, 1)
                state.todoList = result
            },
            editItem: (state, {payload}) => {
                state.editMode = true
                state.editText = payload.text
                state.editIndex = payload.index
            },

            handleDropDownActive: (state, {payload}) => {
                state.dropDownActive = payload
            },
            cancelEditMode: (state, {payload}) => {
                state.editMode = false
                state.editText = ''
                state.editIndex = ''
            },

        },
    })
;

export const {addToList, editChecked, cancelEditMode, editInList, handleDropDownActive, deleteItem, editItem} = todoSlice.actions;
export default todoSlice.reducer;
