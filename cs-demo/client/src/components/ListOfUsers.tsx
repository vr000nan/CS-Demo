import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../graphql/Queries";
import { DELETE_USER } from "../graphql/Mutation";

export default function ListOfUsers() {
    const { data, error: queryError, loading } = useQuery(GET_ALL_USERS);
    const [deleteUser, { error: mutationError }] = useMutation(DELETE_USER);

    if (loading) return <div>Loading...</div>;
    if (queryError) {
        console.error("Error fetching data: ", queryError);
        return <div>Error loading users.</div>;
    }

    if (mutationError) {
        console.error("Error executing mutation: ", mutationError);
    }

    if (!data) {
        return <div>No users found.</div>;
    }

    return (
        <div className="userContainer">
            {data.getAllUsers.map((user: any) => (
                <div className="userCard" key={user.id}>
                    <div>Name: {user.name}</div>
                    <div>Username: {user.username}</div>
                    <div>Years In Practice: {user.yearsInPractice}</div>
                    <div>Notable Achievements: {user.influence}</div>
                    <button className="button" onClick={() => deleteUser({ variables: { id: user.id } })}>
                        Delete User
                    </button>
                </div>
            ))}
        </div>
    );
}
