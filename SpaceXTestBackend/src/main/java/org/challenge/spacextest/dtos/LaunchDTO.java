package org.challenge.spacextest.dtos;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LaunchDTO implements Serializable {
    private String id;
    @JsonProperty("flight_number")
    private int flightNumber;
    private String name;
    @JsonProperty("date_utc")
    private String dateUtc;
    @JsonProperty("date_unix")
    private long dateUnix;
    @JsonProperty("date_local")
    private String dateLocal;
    @JsonProperty("date_precision")
    private String datePrecision;
    @JsonProperty("static_fire_date_utc")
    private String staticFireDateUtc;
    @JsonProperty("static_fire_date_unix")
    private long staticFireDateUnix;
    private boolean tdb;
    private boolean net;
    private int window;
    private String rocket;
    private Boolean success;
    private List<FailureDTO> failures;
    private boolean upcoming;
    private String details;
    private FairingsDTO fairings;
    private List<String> crew;
    private List<String> ships;
    private List<String> capsules;
    private List<String> payloads;
    private String launchpad;
    private List<CoreDTO> cores;
    private LinksDTO links;
    @JsonProperty("auto_update")
    private boolean autoUpdate;
}