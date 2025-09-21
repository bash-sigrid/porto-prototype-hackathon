package com.example.portodoc.controller;

import com.example.portodoc.repository.CargaRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontController {

    private final CargaRepository repository;

    public FrontController(CargaRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("cargas", repository.findAll());
        return "index"; // renderiza o arquivo index.html em templates
    }
}

