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

export const UPDATE_PASSWORD = gql`
    mutation updatePassword(
        $id: String!, 
        $oldPassword: String!, 
        $newPassword: String!,
    ){
        updatePassword(
            id: $id,
            oldPassword: $oldPassword,
            newPassword: $newPassword
        ){
            message
        }
    }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!,
    $name: String,
    $username: String,
    $yearsInPractice: Int,
    $influence: String
  ) {
    updateUser(
      id: $id,
      name: $name,
      username: $username,
      yearsInPractice: $yearsInPractice,
      influence: $influence
    ) {
      successful
      message
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

