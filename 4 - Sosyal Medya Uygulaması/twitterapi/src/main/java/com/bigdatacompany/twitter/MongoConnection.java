package com.bigdatacompany.twitter;

import com.mongodb.MongoClient;

public class MongoConnection {
    private String host;
    private Integer port;
    private MongoClient client;

    public MongoConnection(String host, Integer port) {
        this.host = host;
        this.port = port;
        this.client=new MongoClient(host,port);
    }
}
