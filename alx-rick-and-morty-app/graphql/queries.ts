import { gql } from "@apollo/client";

export const GET_EPISODES = gql `
query getEpisodes($page: Int, $filter: FilterEpisodes) {
    episodes(page: $page, filter: $filter) {
        info {
            pages
            next
            prev
            count
        }
            results {
            id
            name
            air_date
            episodes
        }
    }
}
    `;