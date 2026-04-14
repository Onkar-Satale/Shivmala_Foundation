# 🌟 Shivmala Foundation Platform

Welcome to the official repository for the **Shivmala Foundation** website! Our digital platform is dedicated to amplifying our social impact, showcasing our campaigns, organizing community projects, and seamlessly engaging with our supporters and volunteers.

## 🔗 Live Site
🌍 **Deployed Application:** [https://shivmalafoundation.vercel.app/](https://shivmalafoundation.vercel.app/)

## 📑 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Technology Stack](#️-technology-stack)
- [System Architecture & Folder Structure](#️-system-architecture--folder-structure)
- [Getting Started (Local Development)](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Design Philosophy](#-design-philosophy)
- [Contributing](#-contributing)
- [Author & Maintainer](#-author--maintainer)

## 📖 About the Project
The Shivmala Foundation website serves as the central hub for our NGO's digital presence. Built with modern web technologies, it aims to provide transparency about our ongoing social initiatives, share success stories through high-quality media, and provide an intuitive way for users to learn about and support our causes.

## ✨ Key Features

### Frontend Experience
- **🚀 Dynamic Hero Section & Carousel:** Engaging hero area with smooth zoom animations to instantly captivate visitors upon landing.
- **❤️ Campaign & Causes Showcase:** Highlighting active and past social campaigns. Uses modern, interactive cards to display goals, impact metrics, and stories.
- **📸 Categorized Media Gallery:** An immersive, automated media gallery featuring a custom full-screen lightbox for high-resolution photos and video content.
- **🗺️ Nested Projects Navigation:** Multi-level dropdowns and smooth accordions allow users to easily browse through various ongoing initiatives and volunteer opportunities without clutter.
- **📱 Fully Responsive & Cross-Browser:** Carefully optimized for all viewports, ensuring a seamless experience across mobile phones, tablets, and high-resolution desktop monitors.

### Interactive & Backend Features
- **🤖 Integrated AI Chatbot:** An interactive digital assistant to help visitors navigate the site, answer common questions about the NGO, and guide potential volunteers. Features graceful session handling and state management.
- **⚡ Fast Content Delivery:** Optimized asset loading and efficient routing ensure the site remains fast and accessible, even on slower connections.

## 🛠️ Technology Stack
This project leverages a robust MERN stack architecture to ensure scalability and performance:

### Frontend
- **Library:** React.js
- **Styling:** Vanilla CSS with modern aesthetic principles (Glassmorphism, CSS Variables, vibrant palettes)
- **Routing:** React Router DOM

### Backend / API
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose ODM)

### Deployment & Infrastructure
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Render

## 🗂️ System Architecture & Folder Structure
A high-level overview of how the repository is organized:

```plaintext
shivmala-foundation/
├── client/                 # React Frontend
│   ├── public/             # Static assets (images, icons)
│   ├── src/
│   │   ├── components/     # Reusable UI components (Navbar, Cards, Footer)
│   │   ├── pages/          # Page layouts (Home, About, Campaigns, Gallery)
│   │   ├── assets/         # Stylesheets and media
│   │   ├── context/        # React Context for global state (e.g., Chatbot state)
│   │   └── App.js          # Main application routing
│   └── package.json
│
├── server/                 # Node/Express Backend
│   ├── controllers/        # Route logic and request handling
│   ├── models/             # MongoDB schemas
│   ├── routes/             # Express API routes
│   ├── config/             # Database connection and environment setup
│   ├── index.js            # Entry point for the backend server
│   └── package.json
│
└── README.md
```

## 💻 Getting Started
To run the project locally for development and testing, follow these steps:

### Prerequisites
Make sure you have the following installed on your local development machine:
- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas URI)
- Git

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/shivmala-foundation.git
   cd shivmala-foundation
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../client
   npm install
   ```

### Start the Development Servers
You will need two terminal windows to run the frontend and backend simultaneously.

**Terminal 1 (Backend):**
```bash
cd server
npm start
# Server will run on http://localhost:5000
```

**Terminal 2 (Frontend):**
```bash
cd client
npm start
# Application will open at http://localhost:3000
```

## 🔐 Environment Variables
To run this project, you will need to add environment variables to your `.env` files.

In the `server/` directory, create a `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
```

In the `client/` directory, create a `.env` file:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 🎨 Design Philosophy
Our interface is carefully crafted to reflect the compassion and professionalism of the Shivmala Foundation:

- **Rich Aesthetics:** We utilize modern CSS techniques like glassmorphism to create depth without distracting from the content.
- **Dynamic Micro-interactions:** Smooth transitions, hover effects on campaign cards, and interactive elements keep the user engaged.
- **Modern Typography & Colors:** Deliberate, harmonious color palettes are chosen over generic defaults to evoke trust and warmth.
- **Accessibility:** High contrast ratios and semantic HTML ensure our mission is accessible to everyone.

## 🤝 Contributing
We welcome contributions from the community! If you'd like to help us make a bigger impact, please follow these steps:

1. Fork the repository.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

*Note: Please ensure your code follows the existing style and folder structure. If adding new UI components, verify that they are fully responsive.*

## 👨‍💻 Author & Maintainer
Designed, developed, and maintained by **Onkar Kalyan Satale**.
For inquiries regarding the technical architecture or contributions, please open an issue in the repository.
