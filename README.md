# 🌟 Full Stack Social Media Dashboard 🌟

Welcome to the **Full Stack Social Media Dashboard**! This project is a complete web application with both front-end and back-end integration. It allows users to register, log in, and interact with a robust and modern social media-like interface. Built using **React.js**, **Python Flask**, and **MySQL**, this dashboard is a showcase of cutting-edge web technologies. 🌐✨

![Dashboard Animation](https://media.giphy.com/media/3o7TKsQnPO7EwlsGdy/giphy.gif)

---

## 🖥️ Features

✔️ **User Authentication:**
- `Register`: Allows new users to sign up.
- `Login`: Existing users can log in using their credentials.

✔️ **Validation & Alerts:**
- Detects invalid email format and weak passwords.
- Alerts users when login credentials are incorrect.

✔️ **Database Integration:**
- User data is securely stored and managed using **MySQL**.
- Database interactions are handled via **Flask SQLAlchemy**.

✔️ **Frontend Features:**
- Responsive and interactive user interface built with **React.js**.

✔️ **Backend Features:**
- API routes implemented using **Flask** for smooth client-server communication.

✔️ **Modern Web Development Practices:**
- Complete separation of frontend and backend.
- RESTful APIs for efficient data handling.

---

## 🛠️ Tech Stack

| Technology          | Purpose                          |
|---------------------|----------------------------------|
| React.js            | Frontend development            |
| Python Flask        | Backend development             |
| MySQL               | Database management             |
| Flask SQLAlchemy    | ORM for database interactions   |
| HTML, CSS, JavaScript | Supporting frontend technologies |

---

## 🚀 How to Set Up and Run

### 1️⃣ Clone this Repository
```bash
git clone https://github.com/your-username/fullstack-social-media-dashboard.git
```

### 2️⃣ Set Up Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate   # For Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure the database in `config.py`:
   ```python
   SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://username:password@localhost/social_dashboard'
   ```
5. Run the backend server:
   ```bash
   flask run
   ```

### 3️⃣ Set Up Frontend
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🔒 User Flow

### 🔑 **Sign Up**
1. Enter details in the registration form (e.g., name, email, password).
2. Ensure that the email follows the correct format (e.g., `user@example.com`).
3. Password must contain uppercase, lowercase, numbers, and special characters.
4. On successful registration, a confirmation message is displayed.

### 🚪 **Login**
1. Enter your registered email and password.
2. If credentials are invalid, an error message is shown. ⚠️
3. On successful login, you are redirected to the dashboard.

![User Flow](https://via.placeholder.com/800x400?text=Flowchart+of+User+Login+and+Signup)

---

## 🖼️ Screenshots

### Login Page
![Login Page](https://via.placeholder.com/600x300?text=Login+Page+Screenshot)

### Register Page
![Register Page](https://via.placeholder.com/600x300?text=Register+Page+Screenshot)

### Dashboard
![Dashboard](https://via.placeholder.com/600x300?text=Dashboard+Screenshot)

---

## 📂 Project Structure

### Frontend (`frontend/`):
- **`src/components/`**: React components for UI.
- **`src/pages/`**: Pages like Login, Register, and Dashboard.
- **`src/services/`**: API calls and data fetching utilities.

### Backend (`backend/`):
- **`app.py`**: Main Flask application.
- **`models.py`**: Database models using Flask SQLAlchemy.
- **`routes/`**: API endpoints for authentication and user management.
- **`config.py`**: Configuration settings.

---

## 🤝 Contributing

Contributions are welcome! 🎉 Here's how you can help:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

Special thanks to everyone who contributed to this project and made it a success. 🌟

---

## 📧 Contact

Have questions or feedback? Feel free to reach out!

📩 **Email:** your-email@example.com  
🌐 **GitHub:** [your-username](https://github.com/your-username)  

---

### ⭐ If you like this project, don't forget to give it a star! ⭐

![Thank You](https://media.giphy.com/media/d31w24psGYeekCZy/giphy.gif)
