
import React from 'react';

function Form(props) {
    
    const setInputs = props.setTask;
    let inputs = props.task;
    let tableau = props.store;
    tableau = localStorage.getItem('taches') ? JSON.parse(localStorage.getItem('taches')) : [];

    const submitHandler = e =>{
        e.preventDefault()
        localStorage.setItem('taches',JSON.stringify(tableau))
        setInputs({
            name : "",
            description : "",
            debut : "",
            fin : "",
            toDo : ""
        })
             
    }

    return (
        <div className = "form" >
            <form className = "form-group" onSubmit = {submitHandler}>
                <div className="form-control">
                    <label htmlFor= "task">Tâche</label><br/>
                    <input
                        type ="text"
                        value = {inputs.name}
                        onChange ={event =>setInputs({...inputs,name:event.target.value})}
                        id ="inputs"
                        required />
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label><br/>
                    <textarea
                        type ="text"
                        id ="description"
                        value = {inputs.description}
                        onChange = {event =>setInputs({...inputs,description: event.target.value})}
                        required />
                </div>
                <div className="form-control">
                    <label htmlFor="debut">Date de début</label><br/>
                    <input
                        type ="date"
                        id ="debut"
                        value = {inputs.debut}
                        onChange = {event =>setInputs({...inputs,debut: event.target.value})}
                        required />
                </div>
                <div className="form-control">
                    <label>Date de fin</label><br/>
                    <input
                        type ="date"
                        id ="fin"
                        value = {inputs.fin}
                        onChange = {event =>setInputs({...inputs,fin: event.target.value})}
                        required />
                </div>
                <div className="form-control">
                    <label>A réaliser</label><br/>
                    <input
                        type ="text"
                        id ="statut"
                        value = {inputs.toDo}
                        onChange =  {event =>setInputs({...inputs,toDo: event.target.value})}
                        required />
                </div>
                <div className="form-control">
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
}

export default Form;