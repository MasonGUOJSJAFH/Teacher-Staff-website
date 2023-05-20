import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import StaffProfile from './page/StaffProfile';
import EditProfile from './page/EditProfile';
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";


import './App.css';
import HomePage from './page/Home';

function App() {
  const mockData = {
    name: 'John Doe',
    title: 'Professor',
    researchField: 'Computer Science',
    research: ['Research 1', 'Research 2'],
    papers: [
      { title: 'Paper 1', downloadLink: '#' },
      { title: 'Paper 2', downloadLink: '#' },
    ],
  };
  return (
    <div className="App">
      <header className="App-header">

        <nav
            style={{
              paddingBottom: "1rem",
            }}
          >
          {/* <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link> */}
        </nav>

        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/profile" element={<StaffProfile profile={mockData}/>} />
          <Route path="/edit" element={<EditProfile/>} />
        </Routes>
      </header>


    </div>
  );
}

export default App;
