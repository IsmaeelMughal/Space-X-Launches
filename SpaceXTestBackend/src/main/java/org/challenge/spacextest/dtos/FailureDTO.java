package org.challenge.spacextest.dtos;

import lombok.Data;

@Data
public class FailureDTO {
    private int time;
    private Double altitude;
    private String reason;
}