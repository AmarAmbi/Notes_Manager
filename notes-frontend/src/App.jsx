import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import NoteDetail from "./components/NoteDetail";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error(err));
  }, []);

  const addNote = (note) => {
    fetch("http://localhost:8080/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    })
      .then((res) => res.json())
      .then((newNote) => setNotes([...notes, { ...newNote, pinned: false }]));
  };

  const updateNote = (id, updatedNote) => {
    fetch(`http://localhost:8080/api/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedNote),
    })
      .then((res) => res.json())
      .then((data) =>
        setNotes(notes.map((note) => (note.id === id ? { ...data, pinned: note.pinned } : note)))
      );
  };

  const deleteNote = (id) => {
    fetch(`http://localhost:8080/api/notes/${id}`, { method: "DELETE" })
      .then(() => setNotes(notes.filter((note) => note.id !== id)));
  };

  const togglePin = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  };

  // Filter + sort notes
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedNotes = [...filteredNotes].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  return (
    <div className="app">
      <h1 className="title">✨ Notes Manager ✨</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <NoteForm onSubmit={addNote} />
      <NoteList notes={sortedNotes} onSelect={setSelectedNote} onDelete={deleteNote} onPin={togglePin} />
      {selectedNote && (
        <NoteDetail
          note={selectedNote}
          onUpdate={updateNote}
          onClose={() => setSelectedNote(null)}
        />
      )}
    </div>
  );
}

export default App;
