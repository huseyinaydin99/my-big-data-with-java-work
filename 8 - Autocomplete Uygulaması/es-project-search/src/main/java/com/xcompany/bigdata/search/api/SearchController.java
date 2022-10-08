package com.xcompany.bigdata.search.api;

import com.xcompany.bigdata.search.model.AutocompleteResponse;
import com.xcompany.bigdata.search.service.AutocompleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class SearchController {

    @Autowired
    AutocompleteService autocompleteService;

    @GetMapping("/autocomplete")
    public AutocompleteResponse autocomplete(@RequestParam String term) throws IOException {
        AutocompleteResponse response = autocompleteService.search(term);
        return response;
    }
}
