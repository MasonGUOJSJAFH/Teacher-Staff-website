import React, { useState } from 'react';
import axios from 'axios';

const styles = {
  container: {
    margin: '0 auto',
    width: '50%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px'
  },
  input: {
    display: 'block',
    width: '100%',
    marginBottom: '10px',
    padding: '10px'
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
  // add more styles as you need
};

const EditProfile = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [researchField, setResearchField] = useState('');
  // ...

  const handleSubmit = async (event) => {
    event.preventDefault();
    const profile = {
      name,
      title,
      researchField,
      // ...
    };
    // Send a POST request to the server with the new profile
    const response = await axios.post('/api/profiles', profile);
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} />
      </label>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} style={styles.input} />
      </label>
      <label>
        Research Field:
        <input type="text" value={researchField} onChange={e => setResearchField(e.target.value)} style={styles.input} />
      </label>
      {/* Add more fields as necessary */}
      <input type="submit" value="Submit" style={styles.button} />
    </form>
  );
};

export default EditProfile;
