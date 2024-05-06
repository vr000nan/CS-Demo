import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER } from "../graphql/Mutation";
import { GET_ALL_USERS } from "../graphql/Queries"; 

export default function CreateUser() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [yearsInPractice, setYearsInPractice] = useState(0);
    const [influence, setInfluence] = useState("");

    const resetForm = () => {
        setName("");
        setUsername("");
        setPassword("");
        setYearsInPractice(0);
        setInfluence("");
    };

    const [createUser, { error }] = useMutation(CREATE_USER, {
        onCompleted: () => resetForm(),  
        refetchQueries: [{ query: GET_ALL_USERS }],  
        onError: (error) => console.error("Error creating user:", error)
    });

    return (
        <div className="formContainer">
            <input
                className="inputField"
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="inputField"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="inputField"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className="inputField"
                type="number"
                value={yearsInPractice}
                placeholder="Years in Practice"
                onChange={(e) => setYearsInPractice(Number(e.target.value))}
            />
            <input
                className="inputField"
                type="text"
                value={influence}
                placeholder="Achievements"
                onChange={(e) => setInfluence(e.target.value)}
            />
            <button
                className="submitButton"
                onClick={() => {
                    createUser({
                        variables: { name, username, password, yearsInPractice, influence }
                    });
                }}
            >
                Create User
            </button>
        </div>
    );
}
