package com.xcompany.bigdata.search.service;

import com.google.gson.Gson;
import com.xcompany.bigdata.search.model.AutocompleteDetail;
import com.xcompany.bigdata.search.model.AutocompleteResponse;
import org.apache.http.HttpHost;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static com.xcompany.bigdata.search.model.Constants.*;

@Service
public class AutocompleteServiceImpl implements AutocompleteService {

    RestHighLevelClient client;
    SearchSourceBuilder builder;
    SearchRequest request;
    Gson gson;

    @PostConstruct
    public void init(){
        client=new RestHighLevelClient(RestClient.builder(new HttpHost(ES_HOSTNAME,ES_PORT)));
        builder = new SearchSourceBuilder();
        gson=new Gson();
    }
    @Override
    public AutocompleteResponse search(String term) throws IOException {
        List<AutocompleteDetail> data = new ArrayList<>();

        builder.from(0);
        builder.size(10);
        builder.query(QueryBuilders.matchQuery(ES_AUTOCOMPLETE_FIELD,term).fuzziness(1));

        request=new SearchRequest(ES_INDEX).source(builder);
        SearchResponse response = client.search(request, RequestOptions.DEFAULT);

        SearchHits hits = response.getHits();
        SearchHit[] hitsDetail = hits.getHits();
        for(int i=0; i<hitsDetail.length; i++){
            String responseDetail = hitsDetail[i].getSourceAsString();
            AutocompleteDetail detail = gson.fromJson(responseDetail, AutocompleteDetail.class);
            data.add(detail);
        }
        return new AutocompleteResponse(data);
    }

}
