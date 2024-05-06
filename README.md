# User Management System

This User Management System allows clients to create, delete, and update users directly from the front-end interface. It's built using Node.js, TypeScript, MySQL, and GraphQL, offering a robust backend with a GraphQL API and a reactive front-end experience.

## Features

- **Create Users**: Add new users with details such as name, username, password, years in practice, and notable achievements.
- **Delete Users**: Remove existing users from the system.
- **Update Password**: Users can update their passwords.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js
- MySQL
- npm or yarn

## Installation

Follow these steps to install the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-project-name.git
   cd your-project-name

2. Install the dependencies:
   npm install (or yarn install)

## Configuration

Set up your MySQL database and note the credentials.

Create a .env file in the project root and fill in the following environment variables:
   makefile
   Copy code
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASS=your_mysql_password
   DB_NAME=your_database_name

## Running the Application
   To run the application, execute:
   npm start (or yarn start)

## Using the Application
   Navigate to http://localhost:3000 (or whichever port you have configured) to view the interface. You  can:

   Add a user by filling out the form and clicking the "Create User" button.
   Update a user's password by entering the username, current password, and new password, then clicking  the "Update Password" button.
   Delete a user by clicking the "Delete User" button next to the user's details.

## API Endpoints
   GraphQL endpoints (typically accessed via POST requests):

   /graphql - Endpoint for all GraphQL queries and mutations.
   Contributing
   Contributions to the project are welcome. Please follow these steps to contribute:

   Fork the repository.
   Create a branch (git checkout -b feature/YourFeature).
   Commit your changes (git commit -am 'Add some feature').
   Push to the branch (git push origin feature/YourFeature).
   Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
If you have any questions, please contact Nan Wroblewski at vr000nan@gmail.com.
