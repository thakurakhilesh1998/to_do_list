import React from 'react';
import './index.css';
const App=()=>{
    return(
        <>

            <div className="container">
                 <div className="box">
                    <br></br>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" id="input" placeholder="Add A item"></input>
                    <button id="btn">+</button>
                 </div>
            </div>
        </>

    );
}

export {App}