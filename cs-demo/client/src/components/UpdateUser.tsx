import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../graphql/Mutation';
import { GET_ALL_USERS } from '../graphql/Queries';

interface UpdateUserProps {}

const UpdateUser: React.FC<UpdateUserProps> = () => {
    const [id, setId] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [yearsInPractice, setYearsInPractice] = useState<number>(0);
    const [isYearsInPracticeFocused, setIsYearsInPracticeFocused] = useState<boolean>(false);
    const [influence, setInfluence] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>(''); 

    const resetForm = () => {
        setName("");
        setUsername("");
        setYearsInPractice(0);
        setIsYearsInPracticeFocused(false);
        setInfluence("");
        setErrorMessage(""); 
    };

    const [updateUser, { error }] = useMutation(UPDATE_USER, {
        onCompleted: () => resetForm(),
        onError: (err) => {
            console.error("Error updating user:", err);
            setErrorMessage(err.message || "An error occurred while updating the user."); 
        },
        refetchQueries: [{ query: GET_ALL_USERS }],
    });

    return (
        <div className="formContainer">
            <input
                className="inputField"
                type="text"
                value={id}
                placeholder="ID"
                onChange={(e) => setId(e.target.value)}
            />
            <input
                className="inputField"
                type="text"
                value={name}
                placeholder="New Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="inputField"
                type="text"
                value={username}
                placeholder="New Username"
                onChange={(e) => setUsername(e.target.value)}
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
                placeholder="Influence"
                onChange={(e) => setInfluence(e.target.value)}
            />
            {errorMessage}
            <button
                className="submitButton"
                onClick={() => {
                    updateUser({
                        variables: { id, name, username, yearsInPractice, influence }
                    });
                }}
            >
                Update User
            </button>
        </div>
    );
};

export default UpdateUser;
