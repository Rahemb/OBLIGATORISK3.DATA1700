// BillettRepository.java
package com.example.obligatorisk3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett innBillett){
        String sql = "INSERT INTO Billett (film, antall_billetter) VALUES(?,?)";
        db.update(sql, innBillett.getFilm(), innBillett.getAntallBilletter());
    }

    public List<Billett> hentAlleBilletter(){
        String sql = "SELECT * FROM Billett";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter(){
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }


}
