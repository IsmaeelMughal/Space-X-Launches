package org.challenge.spacextest.dtos;

import lombok.Data;

@Data
public class PayloadWeightDTO {
    private String id;
    private String name;
    private int kg;
    private int lb;
}