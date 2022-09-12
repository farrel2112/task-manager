import React from 'react';

import './css/list.css'


function List(props){

    let task = props.task;
    const setTask =props.setTask;
    let affichage = props.store;  
    affichage = localStorage.getItem('taches') ? JSON.parse(localStorage.getItem('taches')) : [];

    const deleteTask = (event) =>{
        let array = Array.from(props.task);
        const index = array.indexOf(event.target.value);
        array.splice(index,1);
        setTask({task : array})
        console.log(array)
    }
    const modify = () =>{
        console.log('Modifié')
    }
    const display = () =>{
        console.log('Afficher')
    }
   
    return(
        <div className = "list">
            <h2>Liste des tâches</h2>
            <table>
                <thead>
                    <tr>
                        <th>A REALISER</th>
                        <th>EN COURS</th>
                        <th>ACHEVEES</th>
                    </tr>
                </thead>
                <tbody id="body">
                </tbody>
            </table>


            {affichage.map(item =>
            <li>
                <span>{item.name}</span>  
                <button id="delete" onClick={deleteTask}>Supprimer</button>
                <button id="modify" onClick={modify}>Modifier</button>
                <button id="edit" onClick={display}>Afficher</button>
            </li>)}
  
        </div>
    )
}
export default List;