import React, {useState} from "react";

function CreateArea(props) {
    const {onAddNote} = props;
    const [newNote, setNewNote] = useState({
        "title" : "",
        "content": ""
    });

    function handleChange(event){
        const {value, name} = event.target;
        setNewNote(prev => {
            return {
                ...prev,
                [name] : value
            }
        });
    }

    function handleAddClick(event){
        event.preventDefault();
        onAddNote(newNote);
        setNewNote({
            "title" : "",
            "content": ""
        });
        
    }

    return (
        <div>
        <form>
            <input name="title" placeholder="Title" onChange={handleChange} value={newNote.title} />
            <textarea name="content" placeholder="Take a note..." rows="3"
                onChange={handleChange} value={newNote.content} />
            <button onClick={handleAddClick}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
