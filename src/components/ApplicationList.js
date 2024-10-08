// src/components/ApplicationList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApplicationList = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            const response = await axios.get('http://localhost:5000/api/applications');
            setApplications(response.data);
        };
        fetchApplications();
    }, []);

    return (
        <div>
            <h2>Application List</h2>
            <ul>
                {applications.map((application) => (
                    <li key={application.id}>
                        {application.student_name} - Status: {application.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApplicationList;
