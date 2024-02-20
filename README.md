# Posts CMS Backend

This is the backend application for the Posts CMS project. It provides API endpoints for user authentication and fetching user data.

## Technologies Used

- Express.js
- Axios
- JSON Web Tokens (JWT)
- dotenv

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

   ```
   git clone <repository-url>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   SECRET_KEY=<your-secret-key>
   ```

   Replace `<your-secret-key>` with a secret key of your choice.

4. Start the server:

   ```
   npm start
   ```

5. The server will start running on port 8080 by default.

## API Endpoints

- **POST /api/login**: Authenticates the user and generates a JWT token.

## Contributors

- Shubham Pandey <shubhampandeyhaihum@gmail.com>

Feel free to customize the content according to your project's specifics. Let me know if you need further assistance!
