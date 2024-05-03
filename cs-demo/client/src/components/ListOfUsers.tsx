import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../graphql/Queries";

export default function ListOfUsers() {
    const { data, error, loading } = useQuery(GET_ALL_USERS);

    if (loading) return <div>Loading...</div>;
    if (error) {
        console.error("Error fetching data: ", error);
        console.log("Full error details:", error.networkError, error.graphQLErrors);
        return <div>Error loading users.</div>;
    }
    if (data) {
        console.log("DATA: ", data);
        // render your data here
    }

    return <div>howdy</div>;
}
