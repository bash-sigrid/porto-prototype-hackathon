package com.example.portodoc.controller;

public class Carga {
    private String codigo;
    private String descricao;
    private String navio;
    private String dataChegada;

    public Carga(String codigo, String descricao, String navio, String dataChegada) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.navio = navio;
        this.dataChegada = dataChegada;
    }

    // getters e setters
    public String getCodigo() { return codigo; }
    public String getDescricao() { return descricao; }
    public String getNavio() { return navio; }
    public String getDataChegada() { return dataChegada; }
}


