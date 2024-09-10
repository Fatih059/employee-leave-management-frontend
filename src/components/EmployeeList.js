import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/EmployeeList.css';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await axios.get('http://localhost:8080/api/employees');
        setEmployees(response.data);
    };

    const handleEdit = (id) => {
        navigate(`/edit-employee/${id}`);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8080/api/employees/${id}`);
        fetchEmployees();
    };

    const handleUpdateLeave = (id) => {
        navigate(`/update-leave/${id}`);
    };

    return (
        <div className="table-container">
            <h2>Employee List</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>DEPARTMENT</th>
                    <th>REMAINING LEAVE DAYS</th>
                    {role === 'admin' && <th>ACTIONS</th>}
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>{employee.department}</td>
                        <td>{employee.remainingLeaveDays}</td>
                        {role === 'admin' && (
                            <td>
                                <button onClick={() => handleEdit(employee.id)}>Edit</button>
                                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                                <button onClick={() => handleUpdateLeave(employee.id)}>Leave Days</button>
                            </td>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
            <button className="back-button" onClick={() => navigate(role === 'admin' ? '/admin-dashboard' : '/user-dashboard')}>
                Back
            </button>
        </div>
    );
};

export default EmployeeList;
