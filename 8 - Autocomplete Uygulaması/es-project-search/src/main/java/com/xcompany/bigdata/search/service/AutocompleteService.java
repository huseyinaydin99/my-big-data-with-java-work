package com.xcompany.bigdata.search.service;

import com.xcompany.bigdata.search.model.AutocompleteResponse;

import java.io.IOException;

public interface AutocompleteService {
    AutocompleteResponse search(String term) throws IOException;
}
