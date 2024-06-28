# Appointments Application

This is a full-stack application built with Django for the backend and React with Tailwind CSS for the frontend. The application allows users to manage appointments.

## Prerequisites

- [Python](https://www.python.org/) (for the backend)
- [pip](https://pip.pypa.io/en/stable/) (Python package installer)

## Setup Instructions

### Backend (Django)

1. **Clone the repository**:

    ```sh
    git clone https://github.com/Vinny02/appointment_app.git
    ```

2. **Navigate to main folder**:

    ```sh
    ../appointment_app/patient_management
    ```

3. **Run database migrations**:

    ```sh
    python manage.py migrate
    ```

4. **Start the backend server**:

    ```sh
    python manage.py runserver
    ```

    The backend server should now be running at `http://127.0.0.1:8000/`.

### Frontend (React)

1. **Navigate to the frontend directory**:

    ```sh
    cd ../appointment_app/patient_management/frontend
    ```

2. **Install the frontend dependencies**:

    ```sh
    npm install
    ```

3. **Start the frontend development server**:

    ```sh
    npm start
    ```

    The frontend server should now be running at `http://localhost:3000/`.

## Running the Application

1. **Start the backend server**:

    Follow the instructions in the Backend section to activate the virtual environment and start the Django server.

2. **Start the frontend server**:

    Follow the instructions in the Frontend section to navigate to the frontend directory and start the React development server.

3. **Access the Application**:

    Open your web browser and go to `http://localhost:3000/` to access the application.


