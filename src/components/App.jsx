import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";


function App(){

    //array containing the notes
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        //console.log(note);
        setNotes(prevNotes => {
            //pegar todos os elementos ja existentes no array e adicionando o novo
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id){
        console.log("foi");

        // retorna o array menos o elemento q tem o id igual ao index
        setNotes(prevNotes => 

             prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        
        );
    }

    return <div>
        <Header />
        <CreateArea  onAdd={addNote} />
        {notes.map((noteItem, index) =>{
            return <Note 
                key={index}
                id={index}
                //primeiro vem do Note.jsx e o segundo no notes.jsx
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
            />
        })}
        <Footer />
    </div>
}

export default App;

