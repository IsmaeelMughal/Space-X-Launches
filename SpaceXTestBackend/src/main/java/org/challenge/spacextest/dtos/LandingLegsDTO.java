package org.challenge.spacextest.dtos;

import lombok.Data;

@Data
public class LandingLegsDTO {
    private int number;
    private String material;
}

@Data
class MaterialDto {
    String materialName;
}

