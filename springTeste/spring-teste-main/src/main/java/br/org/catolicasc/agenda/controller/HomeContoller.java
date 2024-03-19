package br.org.catolicasc.agenda.controller;

import br.org.catolicasc.agenda.dto.AgendaDTO;
import br.org.catolicasc.agenda.entity.AgendaEntity;
import br.org.catolicasc.agenda.repository.AgendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("home")
public class HomeContoller {

    @Autowired
    private AgendaRepository agendaRepository;
    @PostMapping
    public void postHome(@RequestBody AgendaDTO agendaDto) {
        agendaRepository.save( new AgendaEntity(null, agendaDto.titulo(), agendaDto.local()));
    }
}
