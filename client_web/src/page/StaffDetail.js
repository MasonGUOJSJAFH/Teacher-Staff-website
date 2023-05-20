import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function StaffDetail() {
    const { id } = useParams();
    const [staff, setStaff] = useState(null);
    const [research, setResearch] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/staff/${id}`)
            .then(response => {
                setStaff(response.data[0]);
            });
        axios.get(`http://localhost:3000/research/${id}`)
            .then(response => {
                setResearch(response.data);
            });
        axios.get(`http://localhost:3000/articles/${id}`)
            .then(response => {
                setArticles(response.data);
            });
    }, [id]);

    if (!staff) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{staff.name}</h1>
            <p>{staff.title}</p>
            <img src={staff.image_url} alt={staff.name} />
            <h2>Research</h2>
            {research.map(r => (
                <div key={r.id}>
                    <h3>{r.research_title}</h3>
                    <p>{r.research_summary}</p>
                </div>
            ))}
            <h2>Articles</h2>
            {articles.map(a => (
                <div key={a.id}>
                    <a href={a.article_url}>{a.article_title}</a>
                </div>
            ))}
        </div>
    );
}

export default StaffDetail;
