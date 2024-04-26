// BillettController.java
package com.example.obligatorisk3data1700;


// BillettController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class BillettContoller {

    @Autowired
    private BillettRepository rep;

    // Legg til en billett
    @PostMapping("/lagre")
    public void leggTilBillett(Billett billett) {
        rep.lagreBillett(billett);
    }

    // Hent alle billetter
    @GetMapping("/hentAlle")
    public List<Billett> hentAlleBilletter() {
        return rep.hentAlleKunder();
    }

    // Slett alle billetter
    @GetMapping("/slettAlle")
    public void slettAlleBilletter() {
        rep.slettAlleBilletter();
    }
}
