# Rentify

Rentify is a full-stack web application designed to streamline the rental process. Built using the MERN stack (MongoDB, Express.js, React, Node.js), Rentify provides an efficient platform for property owners to list rentals and for potential renters to find their next home.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization
- Property listing and management for owners
- Property search and browsing for renters
- Detailed property pages with images and descriptions
- Booking and reservation management
- User profiles with booking history

## Demo

Check out the live demo of Rentify [here](https://rentify-p5aa.onrender.com).

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node package manager)
- MongoDB

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/AryaGupta01/Rentify.git
   cd Rentify
   ```

2. Install backend dependencies:

   ```bash
   cd server
   npm install
   ```

3. Create a `.env` file in the `server` directory and add your MongoDB URI and other environment variables:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Open a new terminal and navigate to the project directory:

   ```bash
   cd client
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

Once the application is running, you can:

- Register as a new user
- Log in as an existing user
- Browse available rental properties
- List a new property for rent (for property owners)
- Book a property (for renters)
- View and manage your profile and bookings

## Technologies Used

- **Frontend**: React, Redux, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Arya Gupta - [LinkedIn](https://www.linkedin.com/in/arya-gupta/) - arya.gupta@example.com

Project Link: [https://github.com/AryaGupta01/Rentify](https://github.com/AryaGupta01/Rentify)
