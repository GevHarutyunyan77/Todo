import React from 'react';
import { Select, Space } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {handleDropDownActive} from "../../state/todo";



function DropDown(props) {

    const dispatch = useDispatch()
    const {dropDownActive} = useSelector(state => state.todoSlice)

    const handleChange = (value) => {
        dispatch(handleDropDownActive(value))
    };
    return (
        <Space wrap>
            <Select
                defaultValue={dropDownActive}
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={[
                    {
                        value: '1',
                        label: 'All',
                    },
                    {
                        value: '2',
                        label: 'Selected',
                    },
                    {
                        value: '3',
                        label: 'Unselected',
                    }
                ]}
            />
        </Space>
    );
}

export default DropDown;
