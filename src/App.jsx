import React, {useState} from 'react';
import './index.css';
import {ToDoListItem} from './ToDoListItem';
const App=()=>{
    const [listItem,setListItem]=useState("");
    const [list,setList]=useState([]);
    const onInputTyped=(e)=>{
        setListItem(e.target.value);
    }

    const createList=()=>{
        setList((oldList)=>{
            return([...oldList,listItem]);
        });
        setListItem('');
    }

    const onDeleteItem=(id)=>{
        console.log('delete itme is clicked');
        setList((oldList)=>{
            return oldList.filter((itme,index)=>
            {
                return index!==id;
            }
            );
        });
    }

    return(
        <>

            <div className="container">
                 <div className="box">
                    <br></br>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" id="input" placeholder="Add A item" onChange={onInputTyped} value={listItem}></input>
                    <button id="btn" onClick={createList}>+</button>
                    <ul className="list">
                      {  list.map((val,index)=>{
                           return <ToDoListItem key={index} text={val} id={index} onDelete={onDeleteItem}/>;
                        })
                    }
                    </ul>
                 </div>
            </div>
        </>

    );
}

export {App}