import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const UserDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <h2>User Dashboard</h2>
            <button onClick={() => navigate('/employees')}>View Employees</button>
            <button onClick={() => navigate('/')}>Log Out</button>
        </div>
    );
};

export default UserDashboard;
