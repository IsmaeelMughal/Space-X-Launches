package org.challenge.spacextest.dtos;

import lombok.Data;

@Data
public class CoreDTO {
    private String core;
    private int flight;
    private Boolean gridfins;
    private Boolean legs;
    private Boolean reused;
    private Boolean landingAttempt;
    private Boolean landingSuccess;
    private String landingType;
    private String landpad;
}