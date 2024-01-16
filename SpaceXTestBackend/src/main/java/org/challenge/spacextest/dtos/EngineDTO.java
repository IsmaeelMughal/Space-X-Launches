package org.challenge.spacextest.dtos;

import lombok.Data;

@Data
public class EngineDTO {
        private int number;
        private String type;
        private String version;
        private String layout;
        private IspDto isp;
        private int engineLossMax;
        private String propellant1;
        private String propellant2;
        private ThrustDto thrustSeaLevel;
        private ThrustDto thrustVacuum;
        private int thrustToWeight;

    @Data
    static
    class IspDto {
        private int seaLevel;
        private int vacuum;
    }

}
