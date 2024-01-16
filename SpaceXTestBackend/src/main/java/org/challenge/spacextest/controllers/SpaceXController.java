package org.challenge.spacextest.controllers;

import lombok.RequiredArgsConstructor;
import org.challenge.spacextest.dtos.LaunchDTO;
import org.challenge.spacextest.dtos.RocketDTO;
import org.challenge.spacextest.services.SpaceXService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class SpaceXController {
    private final SpaceXService spaceXService;

    @GetMapping("/launches")
    public List<LaunchDTO> getLaunches() {
        return spaceXService.getLaunches();
    }

    @GetMapping("/rockets")
    public List<RocketDTO> getRockets() {
        return spaceXService.getRockets();
    }

    @GetMapping("/launches/{rocketId}")
    public List<LaunchDTO> getLaunchesByRocketId(@PathVariable("rocketId") String rocketId){
        return spaceXService.getLaunchesByRocketId(rocketId);
    }

    @GetMapping("/rockets/sort/{order}")
    public List<RocketDTO> getSortedRockets(@PathVariable("order") String order){

        return spaceXService.getSortedRockets(order);
    }
}
