const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {

    }
    type Query {
        # User
        getUser : User
    }
`;

module.exports = typeDefs;
