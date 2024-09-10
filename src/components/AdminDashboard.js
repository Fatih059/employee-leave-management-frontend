import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Geri gitmeyi engellemek için
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = function () {
            window.history.go(1);
        };
    }, []);

    const handleLogout = () => {
        // Kullanıcı bilgilerini ve oturum bilgilerini temizle
        localStorage.clear();

        // Kullanıcıyı login sayfasına yönlendir
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            <h2>Admin Dashboard</h2>
            <button onClick={() => navigate('/employees')}>View Employees</button>
            <button onClick={() => navigate('/add-employee')}>Add Employee</button>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
};

export default AdminDashboard;
