import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Form.css';

const UpdateLeave = () => {
    const { id } = useParams();
    const [leaveDays, setLeaveDays] = useState(''); // Parametrenin adı leaveDays olarak değiştirildi
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/employees/${id}/update-leave-days`, null, {
                params: { leaveDays }
            });
            alert('Leave Days Updated');
            navigate('/employees');
        } catch (error) {
            console.error('Error updating leave days:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Update Leave Days</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Remaining Leave Days"
                    value={leaveDays}
                    onChange={(e) => setLeaveDays(e.target.value)}
                />
                <button type="submit">Update Leave</button>
                <button type="button" onClick={() => navigate('/admin-dashboard')}>Back</button>
            </form>
        </div>
    );
};

export default UpdateLeave;
