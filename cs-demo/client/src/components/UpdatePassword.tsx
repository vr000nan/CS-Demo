import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_PASSWORD } from "../graphql/Mutation";

export default function UpdatePassword() {
    const [username, setUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

    if (error) {
        console.error("Error updating password:", error);
    }

    return (
        <div className="formContainer">
            <input
                className="inputField"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className="inputField"
                type="password"
                placeholder="Current Password"
                onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
                className="inputField"
                type="password"
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
                className="updateButton"
                onClick={() => {
                    updatePassword({
                        variables: { username, oldPassword: currentPassword, newPassword }
                    });
                }}
            >
                Update Password
            </button>
        </div>
    );
}
