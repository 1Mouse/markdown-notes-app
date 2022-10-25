import React from "react";

export default function Sidebar(props) {
    const getSummary = (note) => {
        return note.body.split(/\r?\n/)[0];
    };

    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div

                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                    }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{getSummary(note)}</h4>
                <button
                    className="delete-btn"
                    onClick={(event) => props.deleteNote(event, note.id)}                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ));

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    );
}
