import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPDATE_PASSWORD } from "../graphql/Mutation";

export default function UpdatePassword() {
    const [userId, setUserId] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const [updatePassword] = useMutation(UPDATE_PASSWORD, {
        onCompleted: (data) => {
            setMessage(data.updatePassword.message); // Display success message from server
            resetForm();
        },
        onError: (error) => {
            console.error("Error updating password:", error);
            setMessage(error.message); // Display error message based on server response
        }
    });

    const resetForm = () => {
        setUserId("");
        setCurrentPassword("");
        setNewPassword("");
        setMessage("");
    };

    const handleSubmit = () => {
        if (!userId || !currentPassword || !newPassword) {
            setMessage("All fields must be filled out.");
            return;
        }
        updatePassword({
            variables: { id: userId, oldPassword: currentPassword, newPassword: newPassword }
        });
            alert("Password Changed Successfully!");
            resetForm();
    };

    return (
        <div className="formContainer">
            <input
                className="inputField"
                type="text"
                value={userId}
                placeholder="ID"
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
                onClick={handleSubmit}
            >
                Update Password
            </button>
        </div>
    );
}
