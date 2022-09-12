import React, { useState} from 'react';

import './App.css';
import Form from './components/Form.js'
import List from './components/List.js'

function App() {
    let [task,setTask] = useState(
        {
            name : "",
            description : "",
            debut : "",
            fin : "",
            toDo : "",
            
        }
    )
    let store = [];
    
    return (
        <div className = "App" >
            <h1> Gestionnaire des tâches</h1>
            <Form task={task} setTask = {setTask} store ={store}/>
            {<List task={task} store = {store} setTask = {setTask}/>  }
        </div>
    );
}

export default App;

