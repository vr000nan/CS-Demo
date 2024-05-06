import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";
import { UserType } from "../type-definitions/user";
import { Users } from '../../entities/users'

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}

export const GET_USER_BY_ID = {
    type: UserType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    async resolve(parent: any, args: any) {
        const { id } = args;
        const user = await Users.findOneBy({ id: id });
        if (!user) {
            throw new Error("User not found!");
        }
        return user;
    }
}