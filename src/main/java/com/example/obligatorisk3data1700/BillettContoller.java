package com.example.obligatorisk3data1700;

// TicketController.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    @PostMapping("/kjopBillett")
    public void kjopBillett(@RequestBody Ticket ticket) {
        ticketRepository.save(ticket);
    }

    @GetMapping("/hentAlleBilletter")
    public List<Ticket> hentAlleBilletter() {
        return ticketRepository.findAll();
    }

    @GetMapping("/slettAlleBilletter")
    public void slettAlleBilletter() {
        ticketRepository.deleteAll();
    }
}
