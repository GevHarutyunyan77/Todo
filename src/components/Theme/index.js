import React from 'react';
import { Radio } from 'antd';

import {useTheme} from "../../hooks/use-theme";

function Theme(props) {
    const {setTheme} = useTheme()

    const handleChange = (val)=>{
        setTheme(val)
    }


    return (
        <Radio.Group defaultValue="light" size="large" onChange={(ev)=>handleChange(ev.target.value)}>
            <Radio.Button value="light">Light</Radio.Button>
            <Radio.Button value="dark">Dark</Radio.Button>
        </Radio.Group>
    );
}

export default Theme;
