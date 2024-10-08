// src/components/ScholarshipList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScholarshipList = () => {
    const [scholarships, setScholarships] = useState([]);

    useEffect(() => {
        const fetchScholarships = async () => {
            const response = await axios.get('http://localhost:5000/api/scholarships');
            setScholarships(response.data);
        };
        fetchScholarships();
    }, []);

    return (
        <div>
            <h2>Scholarship List</h2>
            <ul>
                {scholarships.map((scholarship) => (
                    <li key={scholarship.id}>
                        {scholarship.name} - {scholarship.amount} - {scholarship.application_deadline}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScholarshipList;
