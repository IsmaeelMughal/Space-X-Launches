package org.challenge.spacextest.dtos;

import lombok.Data;

import java.util.List;

@Data
public class FairingsDTO {
    private Boolean reused;
    private Boolean recoveryAttempt;
    private Boolean recovered;
    private List<String> ships;
}