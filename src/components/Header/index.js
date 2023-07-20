import React from 'react';
import './style.css'
import Input from "../Input";
import DropDown from "../DropDown";
import Theme from "../Theme";

function Header(props) {



    return (
        <div className='header'>

            <DropDown/>
            <Input/>
            <Theme/>
        </div>
    );
}

export default Header;
