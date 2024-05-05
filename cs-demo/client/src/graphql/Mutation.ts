import gql from "graphql-tag";

export const CREATE_USER = gql`
    mutation CreateUser(
        $name: String!, 
        $username: String!, 
        $password: String!, 
        $yearsInPractice: Int!, 
        $influence: String!
        ) {
        createUser(
            name: $name,
            username: $username,
            password: $password,
            yearsInPractice: $yearsInPractice,
            influence: $influence
        ){
            id
            name
            username
            yearsInPractice
            influence
        }
    }
`;

export const DELETE_USER = gql`
    mutation DeleteUser(
        $id: ID!
        ) {
        deleteUser(
            id: $id
        ){
            message
        }
    }
`;