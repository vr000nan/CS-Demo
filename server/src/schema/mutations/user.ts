import { GraphQLInt, GraphQLString } from "graphql";
import { UserType } from "../type-definitions/user";
import { Users } from '../../entities/users';

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        yearsInPractice: { type: GraphQLInt },
        influence: { type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args;
        Users.insert(args);
        return args;
    }
}