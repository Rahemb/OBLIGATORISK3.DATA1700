// BillettController.java
package com.example.obligatorisk3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillettContoller {

    @Autowired
    private BillettRepository rep;

    @PostMapping("/Lagre")
    public void lagreBillett(Billett innBillett) {
        rep.lagreBillett(innBillett);
    }

    @GetMapping("/HentAlle")
    public List<Billett> hentAlle() {
        return rep.hentAlleBilletter();
    }

    @GetMapping("/SlettAlle")
    public void slettAlle() {
        rep.slettAlleBilletter();
    }

}
