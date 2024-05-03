import { GraphQLList } from "graphql";
import { UserType } from "../type-definitions/user";
import { Users } from '../../entities/users'

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}