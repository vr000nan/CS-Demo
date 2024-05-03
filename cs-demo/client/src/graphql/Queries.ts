import gql from "graphql-tag";

export const GET_ALL_USERS = gql`
query getAllUsers {
    users {
        name
        username
        password
        yearsInPractice
        influence
    }
}
`;
