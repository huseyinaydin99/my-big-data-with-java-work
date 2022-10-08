package com.xcommerce.bigdata.clickevent.consumer;

import org.apache.http.HttpHost;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.xcontent.XContent;
import org.elasticsearch.common.xcontent.XContentType;

import java.io.IOException;
import java.time.Duration;
import java.util.Arrays;
import java.util.Properties;

public class ConsumerApp {
    public static void main(String[] args) throws IOException {
        RestHighLevelClient client=new RestHighLevelClient(
                RestClient.builder(new HttpHost("167.172.61.77",9200)));

        IndexRequest request=new IndexRequest("clickevent");
        Properties config = new Properties();
        config.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,"167.172.61.77:9092");
        config.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,new StringDeserializer().getClass().getName());
        config.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,new StringDeserializer().getClass().getName());
        config.put(ConsumerConfig.GROUP_ID_CONFIG,"xcommerce01");
        config.put(ConsumerConfig.CLIENT_ID_CONFIG,"xcommercecl01");

        KafkaConsumer<String,String> kafkaConsumer = new KafkaConsumer<String, String>(config);

        kafkaConsumer.subscribe(Arrays.asList("clickevent"));

        while (true){
            ConsumerRecords<String,String> records = kafkaConsumer.poll(Duration.ZERO);

            for(ConsumerRecord<String,String> rec : records){
                request.source(rec.value(), XContentType.JSON);
                IndexResponse response = client.index(request, RequestOptions.DEFAULT);
                System.out.println(response.getId());
            }
        }
    }
}
