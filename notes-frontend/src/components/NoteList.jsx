function NoteList({ notes, onSelect, onDelete, onPin }) {
  return (
    <div className="list">
      <h2>All Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong>
            {note.pinned && <span className="pin-icon">📌</span>}
            <button onClick={() => onSelect(note)}>View</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
            <button onClick={() => onPin(note.id)}>
              {note.pinned ? "Unpin" : "Pin"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
