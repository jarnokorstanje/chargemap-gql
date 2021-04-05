import { gql } from 'apollo-server-express';

export default gql`
    type Station {
        id: ID
        Title: String
        AddressLine1: String
        Town: String
        StateOrProvince: String
        Postcode: String
        Location: Location
        Connections: [Connections]
    }
    type Location {
        type: String
        coordinates: [Float]
    }
    extend type Query {
        stations: [Station]
        station(id: ID!): Station
    }
`;