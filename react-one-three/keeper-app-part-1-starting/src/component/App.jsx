import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prev=> {
            return [...prev, newNote];
        });
    };

    function deleteNote(id){
        setNotes(prev => {
            return notes.filter((item, index) => {
                return index !== id;
            });          
        })
    };

    return (<div>
        <Header />
        <CreateArea onAddNote={addNote}/>
        {
            notes.map((items, index)=>{
               return <Note key={index} id={index} title={items.title} content={items.content} onDeleteNote={deleteNote} />
            })
        }
        <Footer />
    </div>)
}

export default App;