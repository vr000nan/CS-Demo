import { GraphQLList } from "graphql";
import { UserType } from "../type-definitions/user";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve(): string {
        return 'hey'
    }
}