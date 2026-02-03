import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import NoteDetail from "./components/NoteDetail";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Success & error messages
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const showSuccess = (msg) => {
    setSuccessMsg(msg);
    setErrorMsg("");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const showError = (msg) => {
    setErrorMsg(msg);
    setSuccessMsg("");
    setTimeout(() => setErrorMsg(""), 3000);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch(() => showError("Failed to load notes"));
  }, []);

  const addNote = (note) => {
    fetch("http://localhost:8080/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((newNote) => {
        setNotes([...notes, { ...newNote, pinned: false }]);
        showSuccess("Note added successfully");
      })
      .catch(() => showError("Failed to add note"));
  };

  const updateNote = (id, updatedNote) => {
    fetch(`http://localhost:8080/api/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedNote),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setNotes(
          notes.map((note) =>
            note.id === id ? { ...data, pinned: note.pinned } : note
          )
        );
        showSuccess("Note updated successfully");
      })
      .catch(() => showError("Failed to update note"));
  };

  const deleteNote = (id) => {
    fetch(`http://localhost:8080/api/notes/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error();
        setNotes(notes.filter((note) => note.id !== id));
        showSuccess("Note deleted successfully");
      })
      .catch(() => showError("Failed to delete note"));
  };

  const togglePin = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
    showSuccess("Pin status toggled");
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedNotes = [...filteredNotes].sort(
    (a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)
  );

  return (
    <div className="app">
      <h1 className="title">✨ Notes Manager ✨</h1>

      {/* Success / Error messages */}
      {successMsg && <div className="success-msg">{successMsg}</div>}
      {errorMsg && <div className="error-msg">{errorMsg}</div>}

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <NoteForm onSubmit={addNote} />
      <NoteList
        notes={sortedNotes}
        onSelect={setSelectedNote}
        onDelete={deleteNote}
        onPin={togglePin}
      />
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
