import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({ firstName: '', lastName: '', email: '', department: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/employees', employee);
            alert('Employee Added');
            navigate('/employees');
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={employee.firstName}
                    onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={employee.lastName}
                    onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={employee.email}
                    onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={employee.department}
                    onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
                />
                <button type="submit">Add Employee</button>
                <button type="button" onClick={() => navigate('/admin-dashboard')}>Back</button>
            </form>
        </div>
    );
};

export default AddEmployee;
