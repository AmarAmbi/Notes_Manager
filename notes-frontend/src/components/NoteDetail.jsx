import { useState } from "react";

function NoteDetail({ note, onUpdate, onClose }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleUpdate = () => {
    onUpdate(note.id, { title, content });
    onClose();
  };

  return (
    <div className="detail">
      <h2>Note Detail</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default NoteDetail;
