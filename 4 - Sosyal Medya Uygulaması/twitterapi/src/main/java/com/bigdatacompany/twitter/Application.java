package com.bigdatacompany.twitter;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import twitter4j.*;
import twitter4j.conf.ConfigurationBuilder;

import java.util.List;

public class Application {
    public static void main(String[] args) throws TwitterException {

        MongoClient mongoClient=new MongoClient(Constants.MONGO_HOST,Constants.MONGO_PORT);

        MongoDatabase twitterDB = mongoClient.getDatabase("twitterDB");
        MongoCollection<Document> searchCollection = twitterDB.getCollection("search");

        ConfigurationBuilder cb = ConfigurationTwitter.getConfig();

        TwitterFactory tf=new TwitterFactory(cb.build());

        Twitter twitter = tf.getInstance();

        Query query=new Query();
        query.setQuery("Büyük Veri");
        query.setCount(100);
        QueryResult search = twitter.search(query);

        List<Status> responseList = search.getTweets();

        for(Status st : responseList){
            JSONObject jsonObject=new JSONObject();
            jsonObject.put("screen_name",st.getUser().getScreenName());
            jsonObject.put("twit",st.getText());
            jsonObject.put("create_date",st.getCreatedAt().getTime());
            jsonObject.put("followers_count",st.getUser().getFollowersCount());
            jsonObject.put("friends_count",st.getUser().getFriendsCount());
            jsonObject.put("description",st.getUser().getDescription());
            jsonObject.put("favorite_count",st.getFavoriteCount());
            jsonObject.put("retweet_count",st.getRetweetCount());
            String email = st.getUser().getEmail();
            if(email != null)
                jsonObject.put("email",email);
            System.out.println(jsonObject.toString());
            searchCollection.insertOne(Document.parse(jsonObject.toString()));
        }
    }
}
