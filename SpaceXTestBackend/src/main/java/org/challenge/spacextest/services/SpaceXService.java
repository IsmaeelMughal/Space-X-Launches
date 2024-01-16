package org.challenge.spacextest.services;

import lombok.RequiredArgsConstructor;
import org.challenge.spacextest.dtos.LaunchDTO;
import org.challenge.spacextest.dtos.ListResponse;
import org.challenge.spacextest.dtos.RocketDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class SpaceXService {

    @Value("${spacex.api.url}")
    private String spacexApiUrl;

    private final RestTemplate restTemplate;

    public List<LaunchDTO> getLaunches() {
        String url = spacexApiUrl + "/launches";
        return restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<LaunchDTO>>() {}
        ).getBody();
    }

    public List<LaunchDTO> getLaunchesByRocketId(String rocketId) {
        String url = spacexApiUrl + "/launches/query";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");

        String requestBody = "{ \"query\": { \"rocket\": \"" + rocketId + "\" }, \"options\": {} }";

        HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);

        ListResponse<LaunchDTO> response = restTemplate.exchange(
                url,
                HttpMethod.POST,
                requestEntity,
                ListResponse.class
        ).getBody();


        return response.getDocs();
    }

    public List<RocketDTO> getRockets() {
        String url = spacexApiUrl + "/rockets";
        return restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<RocketDTO>>() {}
        ).getBody();
    }

    public List<RocketDTO> getSortedRockets(String order) {
        String apiUrl = spacexApiUrl + "/rockets/query";

        Map<String, Object> requestBody = Map.of(
                "query", new HashMap<>(),
                "options", Map.of(
                        "sort", Map.of("name", order)
                )
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);

        ListResponse<RocketDTO> response = restTemplate.exchange(
                apiUrl,
                HttpMethod.POST,
                requestEntity,
                ListResponse.class
        ).getBody();

        return response.getDocs();
    }
}
