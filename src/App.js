import React, { useState } from "react";
import List from "./List";
import "./App.css"


const App = () => {
    const [items, setItems] = useState([{item:"",name:""}]);
    const [newItem, setNewItem] = useState("");
    const [newName, setNewName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setItems([...items,{item: newItem, name: newName}]);
    }
    return (

        <body className="color">
            <div className="app" >
                <h1>Feedback Fish</h1>
                <br /><br /><br />
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label htmlFor="new-item">REQUEST A FEATURE
                            <br />
                            <input onChange={(ev)=>setNewItem(ev.target.value)} id="new-item" value={newItem} label="What's on your mind" />
                            
                        </label>
                   </div>
                   <div>
                        <label htmlFor="new-item">REQUEST BY
                            <br />
                            <input onChange={(ev)=>setNewName(ev.target.value)} id="new-item" value={newName} label="Kean" />
                            &nbsp;&nbsp;&nbsp;
                        </label>
                    </div>
                    <br />
                    <input className="button" type="submit" value="Add"/>
                </form><br /><br /><br />

                <List listItems={items}/>
                {/* <ul>{name}</ul> */}
            </div>
        </body>
    );
};
export default App;
