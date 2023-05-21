import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './StaffEdit.css'; // Assuming you have a StaffEdit.css file in the same folder

function StaffEdit() {
    const { id } = useParams();
    const [staff, setStaff] = useState({ name: '', title: '', image_url: '' });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/staff/${id}`)
            .then(response => {
                setStaff(response.data[0]);
            });
    }, [id]);

    const handleChange = (event) => {
        setStaff({ ...staff, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/staff/${id}`, staff)
            .then(() => {
                navigate('/staff/' + id);
            });
    }

    return (
        <div className="staff-container">
            <div className="staff-info">
                <h2>Staff Information</h2>
                <p>Name: {staff.name}</p>
                <p>Title: {staff.title}</p>
                <p><img src={staff.image_url} alt={staff.name} /></p>
            </div>
            <form onSubmit={handleSubmit} className="staff-form">
                <label>
                    Name:
                    <input type="text" name="name" value={staff.name} onChange={handleChange} />
                </label>
                <label>
                    Title:
                    <input type="text" name="title" value={staff.title} onChange={handleChange} />
                </label>
                <label>
                    Image URL:
                    <input type="text" name="image_url" value={staff.image_url} onChange={handleChange} />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default StaffEdit;
