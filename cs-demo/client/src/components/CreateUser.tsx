import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER } from "../graphql/Mutation";
import { GET_ALL_USERS } from "../graphql/Queries"; 

export default function CreateUser() {
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [yearsInPractice, setYearsInPractice] = useState<number>(0);
    const [isYearsInPracticeFocused, setIsYearsInPracticeFocused] = useState<boolean>(false);
    const [influence, setInfluence] = useState<string>('');
    const [message, setMessage] = useState<string>(''); 

    const resetForm = () => {
        setName("");
        setUsername("");
        setPassword("");
        setYearsInPractice(0);
        setIsYearsInPracticeFocused(false);
        setInfluence("");
        setMessage("");
    };

    const [createUser, { error }] = useMutation(CREATE_USER, {
        onCompleted: () => {
            console.log("Mutation completed");
            setMessage("User successfully created!");
            resetForm();
        },
        onError: (error) => {
            console.error("Error creating user:", error);
            setMessage(error.message);
        },
        refetchQueries: [{ query: GET_ALL_USERS }],
    });
    

    const handleSubmit = () => {
        if (!name || !username || !password || yearsInPractice === 0 || !influence) {
            setMessage("Please fill in all fields before submitting.");
            return;
        }

        createUser({
            variables: { name, username, password, yearsInPractice, influence }
        });
    };

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
                value={isYearsInPracticeFocused ? yearsInPractice : yearsInPractice || ""}
                placeholder="Years in Practice"
                onFocus={() => setIsYearsInPracticeFocused(true)}
                onBlur={() => setIsYearsInPracticeFocused(false)}
                onChange={(e) => setYearsInPractice(Number(e.target.value))}
            />
            <input
                className="inputField"
                type="text"
                value={influence}
                placeholder="Achievements"
                onChange={(e) => setInfluence(e.target.value)}
            />
            {message}

            <button
                className="submitButton"
                onClick={handleSubmit}
            >
                Create User
            </button>
        </div>
    );
}
