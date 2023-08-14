# NextAuth.js Project

Welcome to the NextAuth.js project! This project showcases the implementation of user authentication using NextAuth.js, a powerful authentication library for Next.js applications. The project includes features such as email/password authentication, social media authentication with Google and GitHub, and more.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/vrroshni/next_auth.git
   ```

2.Navigate to the project directory:

```bash
cd next_auth
```

3.Install the dependencies:

```bash
npm install
```

### Configuration

1. Create a .env file in the root directory of the project.
2. Add the following environment variables to the .env file:

DATABASE_URL="mongodb+srv:// your-username:your-password@your-clustermongodbnet/your-database"
NODE_ENV="development"
SECRET="your-secret-key"
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"
GOOGLE_ID="your-google-id"
GOOGLE_SECRET="your-google-secret"

Replace the placeholders with your actual values.

3.Save the .env file.

### Usage

1. Run the development server:
```bash
   npm run dev
```
Open your web browser and navigate to http://localhost:3000 to access the project.

## Features

User Registration and Login: Seamlessly register and log in users with email and password, providing a streamlined authentication process.

Secure Password Hashing: Utilize bcrypt hashing to ensure user passwords are stored securely, protecting sensitive data.

Social Media Authentication: Allow users to log in using their Google or GitHub accounts, offering convenient sign-in options.

Profile Updates: Enable users to modify their profile details, enhancing personalization and control over their account.

Efficient Session Management: Implement NextAuth.js for efficient and secure session handling, ensuring a seamless user experience across the application.

```

```
