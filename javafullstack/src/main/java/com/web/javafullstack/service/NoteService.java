package com.web.javafullstack.service;

import com.web.javafullstack.entity.Note;
import com.web.javafullstack.repository.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteService {
    private final NoteRepository repository;

    public NoteService(NoteRepository repository) {
        this.repository = repository;
    }

    public Note create(Note note) {
        return repository.save(note);
    }

    public List<Note> getAll() {
        return repository.findAll();
    }

    public Optional<Note> getById(Long id) {
        return repository.findById(id);
    }

    public Note update(Long id, Note updatedNote) {
        return repository.findById(id)
                .map(note -> {
                    note.setTitle(updatedNote.getTitle());
                    note.setContent(updatedNote.getContent());
                    return repository.save(note);
                })
                .orElseThrow(() -> new RuntimeException("Note not found"));
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
