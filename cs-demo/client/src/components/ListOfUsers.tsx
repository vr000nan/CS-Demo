import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../graphql/Queries";
import { DELETE_USER } from "../graphql/Mutation";

export default function ListOfUsers() {
    const { data, error: queryError, loading } = useQuery(GET_ALL_USERS);
    const [deleteUser, { error: mutationError }] = useMutation(DELETE_USER);

    if (loading) return <div>Loading...</div>;
    if (queryError) {
        console.error("Error fetching data: ", queryError);
        console.log("Full error details:", queryError.networkError, queryError.graphQLErrors);
        return <div>Error loading users.</div>;
    }

    if (mutationError) {
        console.error("Error executing mutation: ", mutationError);
    }

    if (!data) {
        return <div>No users found.</div>;
    }

    return (
        <div>
            {data.getAllUsers.map((user: any) => (
                <div key={user.id}>
                    {user.name} {user.username} {user.yearsInPractice} {user.influence}
                    <button onClick={() => deleteUser({ variables: { id: user.id } })}>
                        Delete User
                    </button>
                </div>
            ))}
        </div>
    );
}
