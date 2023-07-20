import './App.css';

import {useSelector} from "react-redux";
import Header from "./components/Header";
import Item from "./components/Item";
import {isEmpty, uniqueId} from "lodash";
import {useMemo} from "react";



function App() {
    const {todoList, dropDownActive} = useSelector(state => state.todoSlice)



    const filteredData = useMemo(() => {
        if (dropDownActive === '1') {
            return todoList
        } else if (dropDownActive === '2') {
            return todoList.filter(i => i.checked === true)
        } else {
            return todoList.filter(i => i.checked === false)
        }
    }, [dropDownActive, todoList])


    return (
        <div className="App">
            <Header/>
            <div className='contentContainer'>
                {!isEmpty(filteredData) && filteredData.map((i, index) => {
                    return <Item {...i} key={uniqueId('item')} index={index}/>
                })}
            </div>
        </div>
    );
}

export default App;
