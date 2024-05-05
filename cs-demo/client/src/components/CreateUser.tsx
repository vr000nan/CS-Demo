import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER } from "../graphql/Mutation";

export default function CreateUser() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [yearsInPractice, setYearsInPractice] = useState(0);
    const [influence, setInfluence] = useState("");

    const [createUser, { error }] = useMutation(CREATE_USER);

    if (error) {
        console.error("Error creating user:", error);
    }

    return (
        <div className="formContainer">
            <input
                className="inputField"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="inputField"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="inputField"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className="inputField"
                type="number"
                placeholder="Years in Practice"
                onChange={(e) => setYearsInPractice(Number(e.target.value))}
            />
            <input
                className="inputField"
                type="text"
                placeholder="Influence"
                onChange={(e) => setInfluence(e.target.value)}
            />
            <button
                className="updateButton"
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
