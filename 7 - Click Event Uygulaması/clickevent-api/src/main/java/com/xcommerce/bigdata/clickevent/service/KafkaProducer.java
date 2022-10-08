package com.xcommerce.bigdata.clickevent.service;

import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Properties;

@Component
public class KafkaProducer {

    Producer producer;

    @PostConstruct
    public void init(){
        Properties config = new Properties();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG,"167.172.61.77:9092");
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,new StringSerializer().getClass().getName());
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,new StringSerializer().getClass().getName());

        producer= new org.apache.kafka.clients.producer.KafkaProducer(config);
    }

    public void send(String data){
        ProducerRecord<String,String> rec = new ProducerRecord<String,String>("clickevent",data);
        producer.send(rec);
    }

    public void close(){
        producer.close();
    }
}
