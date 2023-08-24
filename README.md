# My blog

Welcome to my personal blog, where you can learn more about me and explore various features related to user registration, profile management, and interacting with blog posts through comments.

Behold, the demo video of my application! This video showcases the remarkable features and functionalities that make my app stand out. Watch as we navigate through its intuitive interface, demonstrating how it simplifies complex tasks and enhances user experiences.

https://drive.google.com/file/d/1dTA6yNfwTXCtJ9qGYucjPytCO9JTMYqu/view?usp=sharing

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
- Create an environment file (e.g., .env) and configure the following variables:
     - DB_CONNECTION: The URL of your MongoDB database.
     - PORT: The desired port number for the server.
     - SECRET: The desired secret key for the JWT (JSON Web Token) signing process to work securely.
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
- PATCH /comment/:id : Allows users to edit comments.
- DELETE /comment/:id : Allows users to delete comments.
- PATCH /comment/:id/like: Allows users to like and dislike comments.

## Final Looks
<img width="719" alt="Screenshot 2023-08-24 at 20 42 42" src="https://github.com/doheelee0328/personal-Blog/assets/112406576/197a46b6-505b-49c0-a202-5281f0d4f3ee">
<img width="725" alt="Screenshot 2023-08-24 at 20 42 51" src="https://github.com/doheelee0328/personal-Blog/assets/112406576/986f10c0-af61-49dc-b0a8-6c8f85c9ecf5">
<img width="725" alt="Screenshot 2023-08-24 at 20 43 01" src="https://github.com/doheelee0328/personal-Blog/assets/112406576/53de1a88-cff9-446f-803c-65d463a532a1">
<img width="725" alt="Screenshot 2023-08-24 at 20 43 18" src="https://github.com/doheelee0328/personal-Blog/assets/112406576/4424b364-1cad-4d87-aafc-f9494e0b5a14">
<img width="725" alt="Screenshot 2023-08-24 at 20 43 18" src="https://github.com/doheelee0328/personal-Blog/assets/112406576/c4a2cb45-3233-4cc3-9940-5e9bbad3e55e">
<img width="725" alt="Screenshot 2023-08-24 at 20 43 18" src="https://github.com/doheelee0328/personal-Blog/assets/112406576/a12cbc07-3c2e-43ef-aedf-2f687b9e9724)">



