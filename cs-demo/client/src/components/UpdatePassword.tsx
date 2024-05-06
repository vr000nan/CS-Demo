import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_PASSWORD } from "../graphql/Mutation";

export default function UpdatePassword() {
    const [userId, setUserId] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState(""); 

    const resetForm = () => {
        setUserId("");
        setCurrentPassword("");
        setNewPassword("");
        setMessage(""); 
    };

    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD, {
        onCompleted: (data) => {
            setMessage(data.updatePassword.message); 
            resetForm();
        },
        onError: (error) => {
            console.error("Error updating password:", error);
            setMessage(error.message); 
        }
    });

    return (
        <div className="formContainer">
            <input
                className="inputField"
                type="text"
                value={userId}
                placeholder="User ID"
                onChange={(e) => setUserId(e.target.value)}
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
            {message && <p>{message}</p>}
            <button
                className="submitButton"
                onClick={() => {
                    updatePassword({
                        variables: {
                            id: userId,
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
