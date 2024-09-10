import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/EmployeeEdit.css';


const EmployeeEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: ''
    });

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/employees/${id}`);
                setEmployee(response.data);
            } catch (error) {
                console.error('Error fetching employee data:', error);
            }
        };

        fetchEmployee();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/employees/${id}`, employee);
            alert('Employee Edited');
            navigate('/employees');
        } catch (error) {
            console.error('Error updating employee data:', error);
        }
    };

    return (
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
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => navigate('/admin-dashboard')}>Back</button>
        </form>
    );
};

export default EmployeeEdit;
