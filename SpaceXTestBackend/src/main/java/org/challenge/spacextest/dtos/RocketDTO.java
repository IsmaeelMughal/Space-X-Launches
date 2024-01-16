package org.challenge.spacextest.dtos;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RocketDTO {
    private String id;
    private String name;
    private String type;
    private boolean active;
    private int stages;
    private int boosters;
    @JsonProperty("cost_per_launch")
    private int costPerLaunch;
    @JsonProperty("success_rate_pct")
    private int successRatePct;
    @JsonProperty("first_flight")
    private String firstFlight;
    private String country;
    private String company;
    private HeightDTO height;
    private DiameterDTO diameter;
    private MassDTO mass;
    @JsonProperty("payload_weights")
    private List<PayloadWeightDTO> payloadWeights;
    @JsonProperty("first_stage")
    private FirstStageDTO firstStage;
    @JsonProperty("second_stage")
    private SecondStageDTO secondStage;
    private EngineDTO engines;
    @JsonProperty("landing_legs")
    private LandingLegsDTO landingLegs;
    @JsonProperty("flickr_images")
    private List<String> flickrImages;
    private String wikipedia;
    private String description;
}