import React, { useState } from "react";
import StickyNotes from "./Components/StickyNotes";
function App() {
  const [notes, setNotes] = useState([]);

  const addNewNote = () => {
    setNotes([
      ...notes,
      { id: notes.length + 1, content: "", position: { top: 100, left: 200 } },
    ]);
  };

  const handleContentChange = (id, newContent) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, content: newContent } : note
      )
    );
  };

  return (
    <div>
      <button onClick={addNewNote} className="add-note-button">
        Add New Note
      </button>
      {notes.map((note) => (
        <StickyNotes
          key={note.id}
          content={note.content}
          onContentChange={(newContent) =>
            handleContentChange(note.id, newContent)
          }
          position={note.position}
        />
      ))}
    </div>
  );
}

export default App;
