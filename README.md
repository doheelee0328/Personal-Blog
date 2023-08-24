# My blog

Welcome to my personal blog, where you can learn more about me and explore various features related to user registration, profile management, and interacting with blog posts through comments.



## Client

### How to Run the Client 

To get started with the client, follow these steps:

- Run the command npm install to install the necessary dependencies.
- Once the dependencies are installed, run the command npm run start to start the client server.

### Features 

#### User Registration and Login:
- Users can register an account and log in.
####  Profile Management:
- Once logged in, users have the ability to edit their profiles, including changing their profile picture.
#### Blog Exploration:
- Users can explore various blog posts about me including my life, music, hobbies, fashion, food and how i got into Tech.
#### Comments:
- Users can interact with blog posts by leaving comments.
- Comment features include adding, editing, and deleting comments.
- Users can also like and dislike comments to express their opinions.


## Server

### How to Run the Server

To get started with the server, follow these steps:

- Run the command npm install to install the necessary dependencies.
- Create an environment file and store the MongoDB URL and the desired port number.
- Run the command npm run dev to start the server.

### API Endpoints 

#### User Authentication:
- POST /user/login: Allows users to log in.
- POST /user/register: Allows users to register.
####  Profile Management:
- PATCH /user/edit: Allows users to edit their profiles.
- DELETE /user/delete: Allows users to delete their profiles.
####  Comments:
- GET /comment: Retrieves all comments.
- POST /comment: Allows users to add comments.
- PATCH /comment/:id: Allows users to edit comments.
- DELETE /comment/:id: Allows users to delete comments.
- PATCH /comment/:id/like: Allows users to like and dislike comments.
