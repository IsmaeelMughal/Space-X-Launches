package org.challenge.spacextest.dtos;

import lombok.Data;

@Data
public class SecondStageDTO {
    private Boolean reusable;
    private int engines;
    private double fuelAmountTons;
    private int burnTimeSec;
    private ThrustDto thrust;
    private PayloadsDto payloads;
}

@Data
class PayloadsDto {
    private String option_1;
    private CompositeFairingDto compositeFairing;
}

@Data
class CompositeFairingDto {
    private HeightDTO height;
    private DiameterDTO diameter;
}