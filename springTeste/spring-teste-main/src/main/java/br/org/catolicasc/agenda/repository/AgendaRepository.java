package br.org.catolicasc.agenda.repository;

import br.org.catolicasc.agenda.entity.AgendaEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AgendaRepository extends JpaRepository<AgendaEntity, Long> {
}
