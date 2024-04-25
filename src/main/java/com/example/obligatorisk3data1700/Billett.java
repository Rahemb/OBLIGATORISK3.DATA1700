// Bilett.java
package com.example.obligatorisk3data1700;

public class Billett {
    private String film;
    private String antallBilletter;

    public Billett(String film, String antallBilletter){
        this.film = film;
        this.antallBilletter = antallBilletter;
    }
    public void Bilett(){

    }

    public String getFilm() {return film;}
    public void setFilm(String film) {this.film = film;}
    public String getAntallBilletter(){return antallBilletter;}
    public void setAntallBilletter(String antallBilletter) {this.antallBilletter = antallBilletter;}
}
