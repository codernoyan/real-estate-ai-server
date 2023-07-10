# Real Estate Genius AI Server

Welcome to the Real Estate AI Server Backend repository - Empowering the real estate industry with accurate valuations, image processing, social media posters, and PDF reports.

## Description

The Real Estate AI Server is a backend server application that empowers users in the real estate industry by providing accurate valuations, enhancing property images, creating social media posters, and generating PDF reports. Whether you are a real estate agent, investor, or homeowner, this server can streamline and simplify your property-related processes.

This repository contains the server-side codebase for the Real Estate AI project. It handles data processing, model training, and API endpoints to serve predictions and recommendations.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Documentation](#api-documentation)

## Live Links

> LIVE SITE : **[Real Estate Genius Live Site](https://realestategenius.netlify.app/)**

> API URL : **[Real Estate Genius Server](https://real-estate-sji.onrender.com)**

## Repositories

> **[Frontend Repository](https://github.com/jharnakhatun2/real-estate-ai)**

> **[Backend Repository](https://github.com/codernoyan/real-estate-ai-server)**

## Instruction Video

> **[Video Link](https://vimeo.com/manage/videos/843961242)**

## Features

The Real Estate AI Server is a powerful backend application designed to cater to the needs of users in the real estate industry. With this server, users can input property data and receive accurate property valuations along with property images. Additionally, the server offers the functionality to create social media posters for properties and download PDF versions of property valuations.

Key Features:

1. Property Valuation: Users can leverage the Real Estate AI Server to obtain property valuations based on inputted property data. The server utilizes advanced machine learning algorithms to provide accurate and reliable valuations.

2. Property Image Processing: In addition to property valuations, users can upload property images, which are processed and associated with the corresponding valuation. This feature enhances the presentation and visual representation of the property.

3. Social Media Posters: The Real Estate AI Server enables users to generate eye-catching social media posters for properties. With a few simple steps, users can create attractive promotional material to share on various social media platforms.

4. PDF Valuation Reports: Users have the option to download comprehensive PDF reports containing detailed property valuations. These reports serve as professional documentation for further analysis, presentations, or sharing with clients.

## Technologies Used

The Real Estate AI Server is built using a combination of powerful technologies and packages. These technologies and packages ensure robust functionality and efficient development.

- **Node.js**: The server-side JavaScript runtime environment that powers the Real Estate AI Server. Node.js allows for scalable and high-performance server applications.

- **Express.js**: A fast and minimalist web application framework for Node.js. Express.js simplifies the development of server applications by providing a robust set of features and middleware.

- **MongoDB**: A popular and flexible NoSQL database used for storing and managing data in the Real Estate AI Server. MongoDB's scalability and ease of use make it a reliable choice for data storage.

- **OpenAI**: Cutting-edge artificial intelligence models and technologies from OpenAI are utilized for advanced property valuation and image processing capabilities.

## Notable Packages

The Real Estate AI Server incorporates several notable packages to enhance its functionality and streamline development:

- **axios**: A popular package for making HTTP requests, used in the Real Estate AI Server to interact with external APIs and services.

- **imgbb**: A package that integrates with the ImgBB image hosting service, providing seamless image upload and management capabilities.

- **morgan**: A middleware package used for logging HTTP requests in the Real Estate AI Server, facilitating debugging and monitoring.

- **sharp**: A powerful image processing package that enables the Real Estate AI Server to manipulate and enhance property images, optimizing them for various purposes.

These technologies and packages work together to create a robust and efficient backend server application for the Real Estate AI Server.

## API Documentation

The Real Estate Server exposes the following API routes:

> API URL: **[Real Estate Genius Server](https://real-estate-sji.onrender.com)**

- `POST /opeani/generateTextAndImage`: Perform property valuation by sending property data in the request body. Returns a property valuation estimate.

- `POST /openai/generateSocialMediaPoster`: Generate a social media poster for a specific property by sending the property ID in the request body. Returns the generated social media poster.

- `POST /openai/generateText`: Generate property description texts by sending property details in the request body. Returns a set of generated texts suitable for property listings, marketing materials, or other purposes.

- `POST /openai/generateImage`: Generate property images by sending property details in the request body. Returns an enhanced image representation of the property, ready for use in marketing materials or online listings.

- `POST /properties`: Post generated property valuation information to the database by sending property data and valuation details in the request body. Stores the valuation information in the database for future reference or analysis.

- `GET /properties`: Get all properties. Returns a list of all properties stored in the database. This route is useful for retrieving a comprehensive list of properties available in the system.

- `GET /properties/:id`: Get a specific property by ID. Requires the property ID as a parameter. This route allows you to retrieve detailed information about a particular property based on its unique ID.

- `GET /properties/user?email=:email`: Get properties by user email. Requires the user's email as a query parameter. Returns a list of properties associated with the specified user's email address.

- `PUT /properties/:id`: Update a specific property by ID. Requires the property ID as a parameter. Use this route to modify the data of an existing property in the database.

- `DELETE /properties/:id`: Delete a specific property by ID. Requires the property ID as a parameter. Use this route to remove a property from the database.

### Thank you for choosing Real Estate Genius Server! 🏡✨

We appreciate your support and trust in our powerful backend application. We are dedicated to empowering your real estate endeavors with features such as property valuation, image processing, social media promotion, and report generation.

Feel free to explore the Real Estate Genius Server API and revolutionize your property management workflows.

For any inquiries or assistance, please contact us at airealestate90@gmail.com.
