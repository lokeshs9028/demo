package com.example.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "assignmentdata")
public class BlackCofferClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    int end_year, intensity, relevance, likelihood;
    String citylng, citylat, sector, topic, insight, swot, url, region, start_year, impact, added, published, city,
            country, pestle, source, title;

    public BlackCofferClass() {

    }

    public BlackCofferClass(int end_year, int intensity, int relevance, int likelihood, String citylng, String citylat,
            String sector, String topic, String insight, String swot, String url, String region, String start_year,
            String impact, String added, String published, String city, String country, String pestle, String source,
            String title) {
        this.end_year = end_year;
        this.intensity = intensity;
        this.region = region;
        this.relevance = relevance;
        this.likelihood = likelihood;
        this.citylng = citylng;
        this.citylat = citylat;
        this.sector = sector;
        this.topic = topic;
        this.insight = insight;
        this.swot = swot;
        this.url = url;
        this.start_year = start_year;
        this.impact = impact;
        this.added = added;
        this.published = published;
        this.city = city;
        this.country = country;
        this.pestle = pestle;
        this.source = source;
        this.title = title;
    }

    public long getId() {
        return id;
    }

    public int getintensity() {
        return intensity;
    }

    public int getrelevance() {
        return relevance;
    }

    public int getlikelihood() {
        return likelihood;
    }

    public String getcitylng() {
        return citylng;
    }

    public int getendYear() {
        return end_year;
    }

    public String getcitylat() {
        return citylat;
    }

    public String getsector() {
        return sector;
    }

    public String gettopic() {
        return topic;
    }

    public String getinsight() {
        return insight;
    }

    public String getswot() {
        return swot;
    }

    public String geturl() {
        return url;
    }

    public String getregion() {
        return region;
    }

    public String getstartYear() {
        return start_year;
    }

    public String getimpact() {
        return impact;
    }

    public String getadded() {
        return added;
    }

    public String getpublished() {
        return published;
    }

    public String getcity() {
        return city;
    }

    public String getcountry() {
        return country;
    }

    public String getpestle() {
        return pestle;
    }

    public String getsource() {
        return source;
    }

    public String gettitle() {
        return title;
    }

}
