import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { UserType } from "../type-definitions/user";
import { MessageType } from "../type-definitions/messages";
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

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },

    async resolve(parent: any, args: any) {
        const { username, oldPassword, newPassword } = args;
        const user = await Users.findOneBy({ username: username });

        if (!user) {
            throw new Error("Username does not exist!");
        }

        const userPassword = user?.password;

        if (oldPassword === userPassword) {
            await Users.update({ username: username }, { password: newPassword });

            return { successful: true, message: "Successfully updated password!" };
        } else {
            throw new Error("Passwords do not match!");
        }
    }
}


export const DELETE_USER = {
    type: MessageType,
    args: { id: { type: GraphQLID } },

    async resolve(parent: any, args: any) {
        const id = args.id;
        Users.delete(id);

        return { successful: true, message: "Successfully deleted user!"}
    }
}