package org.challenge.spacextest.dtos;

import lombok.Data;

import java.util.List;

@Data
public class LinksDTO {
    private PatchDto patch;
    private RedditDto reddit;
    private FlickrDto flickr;
    private String presskit;
    private String webcast;
    private String youtubeId;
    private String article;
    private String wikipedia;
}

@Data
class PatchDto {
    private String small;
    private String large;
}

@Data
class RedditDto {
    private String campaign;
    private String launch;
    private String media;
    private String recovery;
}

@Data
class FlickrDto {
    private List<String> small;
    private List<String> original;
}