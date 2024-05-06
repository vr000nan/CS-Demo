import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
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
        id: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },

    async resolve(parent: any, args: any) {
        const { id, oldPassword, newPassword } = args;
        const user = await Users.findOneBy({ id: id });

        if (!user) {
            throw new Error("User does not exist!");
        }

        const userPassword = user?.password;

        if (oldPassword === userPassword) {
            await Users.update({ id: id }, { password: newPassword });

            return { successful: true, message: "Successfully updated password!" };
        } else {
            throw new Error("Password is incorrect!");
        }
    }
}

export const UPDATE_USER = {
    type: MessageType, 
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },  
        name: { type: GraphQLString },  
        username: { type: GraphQLString },  
        yearsInPractice: { type: GraphQLInt },  
        influence: { type: GraphQLString } 
    },
    async resolve(parent: any, args: any) {
        const { id, name, username, yearsInPractice, influence } = args;
        const user = await Users.findOneBy({ id: id });

        if (!user) {
            throw new Error("User not found!");
        }

        name && (user.name = name);
        username && (user.username = username);
        yearsInPractice !== undefined && (user.yearsInPractice = yearsInPractice);
        influence && (user.influence = influence);

        await Users.save(user);

        return { successful: true, message: "Successfully updated user details!" };
    }
};


export const DELETE_USER = {
    type: MessageType,
    args: { id: { type: GraphQLID } },

    async resolve(parent: any, args: any) {
        const id = args.id;
        Users.delete(id);

        return { successful: true, message: "Successfully deleted user!"}
    }
}