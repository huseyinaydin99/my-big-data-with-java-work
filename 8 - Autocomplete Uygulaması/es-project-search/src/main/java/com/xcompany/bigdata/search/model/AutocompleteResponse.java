package com.xcompany.bigdata.search.model;

import java.util.List;

public class AutocompleteResponse {
    private List<AutocompleteDetail> data;

    public AutocompleteResponse() {
    }

    public AutocompleteResponse(List<AutocompleteDetail> data) {
        this.data = data;
    }

    public List<AutocompleteDetail> getData() {
        return data;
    }

    public void setData(List<AutocompleteDetail> data) {
        this.data = data;
    }
}
