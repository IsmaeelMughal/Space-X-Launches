package org.challenge.spacextest.dtos;

import lombok.Data;

@Data
public class FirstStageDTO {
    private Boolean reusable;
    private int engines;
    private double fuelAmountTons;
    private int burnTimeSec;
    private ThrustDto thrustSeaLevel;
    private ThrustDto thrustVacuum;
}

@Data
class ThrustDto {
    private int kN;
    private int lbf;
}