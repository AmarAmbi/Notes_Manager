package com.web.javafullstack.repository;

import com.web.javafullstack.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
