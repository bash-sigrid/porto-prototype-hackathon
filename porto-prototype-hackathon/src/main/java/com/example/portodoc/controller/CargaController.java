package com.example.portodoc.controller;

import com.example.portodoc.model.Carga;
import com.example.portodoc.repository.CargaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;
import java.util.Random;

@RestController
@RequestMapping("/api/cargas")
public class CargaController {

    private final CargaRepository repository;

    public CargaController(CargaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Carga> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Carga salvar(@RequestBody Carga carga) {
        return repository.save(carga);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}



