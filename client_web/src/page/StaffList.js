import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StaffList() {
    const [staffList, setStaffList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/staff')
            .then(response => {
                setStaffList(response.data);
            });
    }, []);

    return (
        <div>
            <h1>Staff List</h1>
            {staffList.map(staff => (
                <div key={staff.id}>
                    <h2><Link to={`/staff/${staff.id}`}>{staff.name}</Link></h2>
                    <p>{staff.title}</p>
                    <img src={staff.image_url} alt={staff.name} />
                </div>
            ))}
        </div>
    );
}

export default StaffList;
