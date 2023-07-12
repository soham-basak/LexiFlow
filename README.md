# Lexiflow

Lexiflow is a full-stack blog web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a user-friendly interface for creating, updating, and deleting blog posts, as well as viewing posts created by other users. The application also incorporates an authentication system to ensure secure access to the platform.

## Features

- User Authentication: Users can sign up and log in to their accounts.

- Create Post: Logged-in users can create new blog posts by providing a title, content, and optional image. Posts are stored in a MongoDB database.

- Update Post: Users have the ability to edit and update their own posts, modifying the title, content, and image associated with each post.

- View Other Users' Posts: All users, whether logged in or not, can view blog posts created by other users.

- Delete Post: Logged-in users can delete their own posts, removing them from the platform.

- User-Friendly UI: Lexiflow features a user-friendly and intuitive interface for a seamless browsing and blogging experience.

## Getting Started

### Prerequisites

To run Lexiflow locally, you need to have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/en/download/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/VIRUS-XDD/LexiFlow.git

2. Navigate to the project client directory:   

   ```shell
      cd lexiflow
      cd client 

3. Install the dependencies for the client:
  
    ```shell
       npm i

4. Navigate to the project api directory:   

   ```shell
      cd lexiflow
      cd api

5. Install the dependencies for the api:
  
    ```shell
       npm i

6. Create a .env file in the root directory of the project and provide the following environment variables:
 
    ```shell
       # Server configuration
      PORT=5000
      MONGODB_URI=<your-mongodb-uri>

### Client configuration
REACT_APP_API_URL=http://localhost:5000/api

7. Start the server and the client concurrently:

   ```shell
      npm start

8. Access Lexiflow in your browser at http://localhost:3000.      


## Usage

- Register a new account or log in with your existing credentials.

- On the home page, you can view blog posts created by other users.

- Click on the "New Post" button to create a new blog post.

- Fill in the title and content fields and optionally upload an image for your post.

- Click on the "Publish" button to create your post.

- To edit or delete your own posts, navigate to the post and click on the "Edit" or "Delete" buttons respectively.

## Technologies Used

### Front-end:

- React.js: JavaScript library for building user interfaces.

- HTML and CSS: Markup and styling of the application.

- Axios: Promise-based HTTP client for making API requests.

### Back-end:

- Node.js: JavaScript runtime environment for running server-side code.

- Express.js: Web application framework for building RESTful APIs.

- MongoDB: NoSQL database for storing blog post data.

- Mongoose: Object Data Modeling (ODM) library for MongoDB.


## Contributing

Contributions to Lexiflow are always welcome. If you want to enhance existing features, add new features, or fix any issues, feel free to submit a pull request. However, before contributing, please make sure to follow the code of conduct.
