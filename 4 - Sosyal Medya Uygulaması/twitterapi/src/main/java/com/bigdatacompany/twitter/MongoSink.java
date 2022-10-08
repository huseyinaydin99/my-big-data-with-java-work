package com.bigdatacompany.twitter;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import twitter4j.*;
import twitter4j.conf.ConfigurationBuilder;

import java.util.ArrayList;

public class MongoSink {
    public static void main(String[] args) {

        MongoClient mongoClient = new MongoClient(Constants.MONGO_HOST, Constants.MONGO_PORT);

        MongoDatabase twitterDB = mongoClient.getDatabase("twitterDB");
        MongoCollection<Document> searchCollection = twitterDB.getCollection("search");

        ConfigurationBuilder cb = ConfigurationTwitter.getConfig();

        Twitter twitter = new TwitterFactory(cb.build()).getInstance();

        ArrayList<Status> tweets = ConfigurationTwitter.getAdvancedSearch(twitter);

        for (int i = 0; i < tweets.size(); i++) {
            Status st = (Status) tweets.get(i);

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("screen_name", st.getUser().getScreenName());
            jsonObject.put("twit", st.getText());
            jsonObject.put("create_date", st.getCreatedAt().getTime());
            jsonObject.put("followers_count", st.getUser().getFollowersCount());
            jsonObject.put("friends_count", st.getUser().getFriendsCount());
            jsonObject.put("description", st.getUser().getDescription());
            jsonObject.put("favorite_count", st.getFavoriteCount());
            jsonObject.put("retweet_count", st.getRetweetCount());
            String email = st.getUser().getEmail();
            if (email != null)
                jsonObject.put("email", email);
            System.out.println(jsonObject.toString());
            searchCollection.insertOne(Document.parse(jsonObject.toString()));
        }
    }
}
