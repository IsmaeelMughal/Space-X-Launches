package org.challenge.spacextest.dtos;

import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListResponse<T> {
    private List<T> docs;
    private int totalDocs;
    private int offset;
    private int limit;
    private int totalPages;
    private int page;
    private int pagingCounter;
    private boolean hasPrevPage;
    private boolean hasNextPage;
    private Object prevPage;
    private Object nextPage;
}
