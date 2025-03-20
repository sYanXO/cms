# Course Selling App

This project is a course selling application built using Node.js and Express. It includes authentication for users and admins, course management, and purchasing functionality.

## Features
- User authentication (login & signup)
- Admin authentication (login & signup)
- Course creation, deletion, and content management (Admin only)
- Course purchase functionality (Users)
- Middleware for authentication
- MongoDB for database storage
- Express routing for structured API design
- Frontend integration (to be developed)

## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/course-selling-app.git
   cd course-selling-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the MongoDB connection string and JWT secret key

4. Start the server:
   ```sh
   node index.js
   ```

## Project Structure
```
course-selling-app/
│── index.js
│── routes/
│   ├── user.js
│   ├── admin.js
│   ├── course.js
│── models/
│   ├── User.js
│   ├── Admin.js
│   ├── Course.js
│   ├── Purchase.js
│── middlewares/
│── config/
│── .env
│── package.json
│── README.md
```

## API Endpoints

### User Routes
- `POST /user/signup` - User signup
- `POST /user/login` - User login
- `GET /user/courses` - View available courses
- `POST /user/purchase` - Purchase a course

### Admin Routes
- `POST /admin/signup` - Admin signup
- `POST /admin/login` - Admin login
- `POST /admin/course` - Create a new course
- `DELETE /admin/course/:id` - Delete a course
- `PUT /admin/course/:id` - Update course content

## Future Enhancements
- Implement frontend for the application
- Improve user experience with better UI/UX
- Add payment gateway integration
- Extend admin functionalities

## License
This project is licensed under the MIT License.

