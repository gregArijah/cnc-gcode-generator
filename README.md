# Javatrol - Conversational CNC Programming

 Javatrol is conversational CNC programming web application, which allows machinists to quickly generate g-code for a various machining operations.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [License](#license)

## Introduction

A brief introduction to the project.



## Features

- **Conversational Interface:** Javatrol's browser-based conversational interface allows users to generate toolpaths and create CNC programs without the need for manual coding. The intuitive commands make it easy for hobbyists, machinists, and engineers to use.

- **Cloud Storage:** Javatrol enables users to save their work in the cloud, eliminating the need for local file management. This allows for easy access to projects from anywhere with an internet connection.

- **G-code Output:** Javatrol generates ISO-standard G-code, compatible with a wide range of CNC machines, ensuring seamless integration with existing machining setups.

- **Time and Cost Savings:** By providing on-the-spot toolpath generation on the shop floor, Javatrol saves time by reducing the reliance on a separate programming office. Additionally, it eliminates the need for expensive software licenses, resulting in cost savings for businesses.

- **MERN Stack:** Javatrol is built using the MERN (MongoDB, Express.js, React, Node.js) stack, leveraging the power of JavaScript and its ecosystem to deliver a robust and scalable web application.


## Installation

To use the app please visit the deployed link at [javatrol.herokuapp.com](javatrol.herokuapp.com).

To run on your local system follow these steps:

1. Clone the repository:
    ```
    git clone https://github.com/gregArijah/javatrol.git
    ```

2. Install the required client and server dependencies:
    ```
    npm install
    ```

3. Configure the environment and development variables   
    - **.env** : set JWT_SECRET(for json web tokens) and MONGODB_URI(for mongo connection string) 
    - **client/src/utils/api.js** : set baseURL to desired address
    - **client/vit.config.js** : set server.proxy.target to desired address
    - **server/config/connection.js** : set to connection string for your database  

4. Start the development server:
    ```
    npm run dev
    ```

5. Access the application by visiting `http://127.0.0.1:5173/` in your web browser.


## License

This project is licensed under the terms of the [MIT License](https://choosealicense.com/licenses/mit/).


