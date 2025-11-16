# 📝 Blog Project

A full-stack blog application built with Node.js and Express, featuring user authentication, blog creation, editing, and management capabilities with a clean and intuitive user interface.

## 🎯 Features

- **User Authentication**: Secure user registration and login with bcrypt password hashing
- **Blog Management**: Create, read, update, and delete blog posts
- **User Dashboard**: View and manage your personal blogs
- **Image Upload**: Upload images for blog posts using Multer
- **Responsive UI**: Built with EJS templating and Bootstrap styling
- **Admin Panel**: Administrative controls for managing blogs and users
- **Database**: MongoDB integration with Mongoose ODM
- **Cookie-based Sessions**: Secure session management with cookie-parser

## 🛠️ Tech Stack

- **Backend**: Node.js with Express 5.1
- **Database**: MongoDB with Mongoose
- **Templating**: EJS
- **Authentication**: Bcrypt for password hashing
- **File Upload**: Multer
- **Frontend**: HTML, CSS, JavaScript with Bootstrap
- **Dev Tools**: Nodemon for development

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or Atlas connection string)
- npm or yarn

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PR-7-BlogProject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/blog-project
   ```
   
   > For MongoDB Atlas, use: `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database-name>`

4. **Start the server**
   
   **Development mode** (with hot reload):
   ```bash
   npm run dev
   ```
   
   **Production mode**:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3001`

## 📁 Project Structure

```
PR-7-BlogProject/
├── index.js                 # Application entry point
├── package.json             # Project dependencies
├── configs/
│   ├── config.js           # Environment configuration
│   └── db.js               # Database connection setup
├── controllers/
│   ├── blogctl.js          # Blog operations controller
│   └── adminctl.js         # Admin operations controller
├── middlewares/
│   ├── imageUpload.js      # Multer image upload configuration
│   └── userAuth.js         # Authentication middleware
├── models/
│   ├── blogmodel.js        # Blog schema and model
│   └── usermodel.js        # User schema and model
├── router/
│   ├── blogroute.js        # Blog routes
│   ├── adminrouter.js      # Admin routes
│   └── Rout.js             # Main router
├── views/
│   ├── index.ejs           # Homepage
│   ├── pages/
│   │   ├── addBlog.ejs     # Add new blog page
│   │   ├── editblog.ejs    # Edit blog page
│   │   ├── getallblogs.ejs # View all blogs page
│   │   ├── login.ejs       # Login page
│   │   ├── myblogs.ejs     # User's blogs dashboard
│   │   ├── signup.ejs      # Registration page
│   │   └── tables.ejs      # Admin tables
│   └── partials/
│       ├── header.ejs      # Header component
│       └── footer.ejs      # Footer component
├── public/
│   ├── assets/             # CSS, images, and libraries
│   └── libs/               # Bootstrap, jQuery, and plugins
├── uploads/                # User-uploaded images (generated)
└── readme.md              # This file
```

## 🔑 Key API Endpoints

### Authentication
- `POST /signup` - Register a new user
- `POST /login` - Login user
- `GET /logout` - Logout user

### Blogs
- `GET /` - View homepage
- `GET /all-blogs` - View all blogs
- `GET /my-blogs` - View user's blogs
- `GET /add-blog` - Blog creation form
- `POST /add-blog` - Create new blog
- `GET /edit-blog/:id` - Edit blog form
- `POST /edit-blog/:id` - Update blog
- `GET /delete-blog/:id` - Delete blog

### Admin
- Admin dashboard for managing users and blogs

## 🔒 Security Features

- **Password Hashing**: Bcrypt for secure password storage
- **Authentication Middleware**: Protects routes requiring authentication
- **Cookie Sessions**: Secure session management
- **CORS Ready**: Prepared for cross-origin requests

## 🎨 Frontend

The UI is built with Bootstrap and custom CSS with the following pages:

- **Homepage** (`index.ejs`) - Landing page with blog listings
- **Login** (`login.ejs`) - User authentication
- **Signup** (`signup.ejs`) - New user registration
- **All Blogs** (`getallblogs.ejs`) - Browse all published blogs
- **My Blogs** (`myblogs.ejs`) - Personal blog dashboard
- **Add Blog** (`addBlog.ejs`) - Create new blog post
- **Edit Blog** (`editblog.ejs`) - Modify existing blog post
- **Admin Tables** (`tables.ejs`) - Admin management interface

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.1.0 | Web framework |
| mongoose | ^8.19.2 | MongoDB ODM |
| bcrypt | ^6.0.0 | Password hashing |
| ejs | ^3.1.10 | Template engine |
| multer | ^2.0.2 | File upload handling |
| dotenv | ^17.2.3 | Environment variables |
| cookie-parser | ^1.4.7 | Cookie parsing |
| body-parser | ^2.2.0 | Body parsing middleware |

## 🛠️ Development

### Available Scripts

```bash
npm start       # Start production server
npm run dev     # Start development server with hot reload
npm test        # Run tests (not configured)
```

### Code Structure

- **Controllers**: Handle business logic for blogs and admin functions
- **Models**: Define MongoDB schemas for users and blogs
- **Middlewares**: Handle authentication and file uploads
- **Routes**: Define API endpoints and routing logic
- **Views**: EJS templates for rendering UI

## 📝 Database Models

### User Schema
- Email
- Password (hashed)
- Username
- Additional user information

### Blog Schema
- Title
- Description
- Category
- Image
- UserID (reference to User)
- Timestamps (created, updated)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the `package.json` file for details.

## 🆘 Support

For issues, questions, or suggestions, please open an issue in the repository or contact the project maintainer.

---

**Happy Blogging! ✍️**
