import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_PASSWORD } from "../graphql/Mutation";

export default function UpdatePassword() {
    const [username, setUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const resetForm = () => {
        setUsername("");
        setCurrentPassword("");
        setNewPassword("");
    };

    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD, {
        onCompleted: resetForm,
        onError: (error) => console.error("Error updating password:", error)
    });

    return (
        <div className="formContainer">
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
                value={currentPassword}
                placeholder="Current Password"
                onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
                className="inputField"
                type="password"
                value={newPassword}
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
                className="submitButton"
                onClick={() => {
                    updatePassword({
                        variables: {
                            username: username,
                            oldPassword: currentPassword,
                            newPassword: newPassword
                        }
                    });
                }}
            >
                Update Password
            </button>
        </div>
    );
}
