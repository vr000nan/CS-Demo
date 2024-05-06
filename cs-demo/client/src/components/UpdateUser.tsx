import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { UPDATE_USER } from '../graphql/Mutation';

interface UserData {
  name: string;
  username: string;
  yearsInPractice: number;
  influence: string;
}

interface UpdateUserProps {
  id: string; // `id` is required
}

const UpdateUser: React.FC<UpdateUserProps> = ({ id }) => {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    username: '',
    yearsInPractice: 0,
    influence: ''
  });

  const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER, {
    onCompleted: () => console.log("Update successful!"),
    onError: (error) => console.error("Error updating user:", error.message)
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: name === 'yearsInPractice' ? parseInt(value, 10) : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form behavior
    updateUser({
      variables: {
        id, // Use the static or prop ID here
        ...userData
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="number"
        name="yearsInPractice"
        value={userData.yearsInPractice.toString()}
        onChange={handleChange}
        placeholder="Years in Practice"
      />
      <input
        type="text"
        name="influence"
        value={userData.influence}
        onChange={handleChange}
        placeholder="Influence"
      />
      <button type="submit">Update User</button>
      {data && data.updateUser && <p>{data.updateUser.message}</p>}
    </form>
  );
};

export default UpdateUser;
