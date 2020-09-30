import React, { useState } from 'react';

function CreateArea(porps){

    const[note, setNote] = useState({
        title: "", //initial status empty
        content: ""
    });

    function handleChange(event){
        //destruction object
        const {name, value} = event.target;
       
        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event){
        event.preventDefault();
        //onAdd comes from app.jsx creatnote
        porps.onAdd(note);

        setNote({
            title: "",
            content: ""
        });
    }
 
    return <div>
        <form>
            <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
            <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}></textarea>
            <button onClick={submitNote}>Add</button>
        </form>
    </div>
}

export default CreateArea;