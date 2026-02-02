package com.web.javafullstack.controller;

import com.web.javafullstack.entity.Note;
import com.web.javafullstack.service.NoteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:5173") // allow frontend calls
public class NoteController {
    private final NoteService service;

    public NoteController(NoteService service) {
        this.service = service;
    }

    // CREATE
    @PostMapping
    public ResponseEntity<Note> create(@RequestBody Note note) {
        Note created = service.create(note);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    // READ ALL
    @GetMapping
    public ResponseEntity<List<Note>> getAll() {
        List<Note> notes = service.getAll();
        return new ResponseEntity<>(notes, HttpStatus.OK);
    }

    // READ ONE
    @GetMapping("/{id}")
    public ResponseEntity<Note> getById(@PathVariable Long id) {
        return service.getById(id)
                .map(note -> new ResponseEntity<>(note, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<Note> update(@PathVariable Long id, @RequestBody Note note) {
        try {
            Note updated = service.update(id, note);
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        try {
            service.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
