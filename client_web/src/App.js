import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import EditProfile from './page/EditProfile';
import StaffList from './page/StaffList';
import StaffDetail from './page/StaffDetail';

import './App.css';
import HomePage from './page/Home';

function App() {
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
          <Route path="/"  element={<StaffList/>} />
          <Route path="/edit/:id" element={<EditProfile/>} />
          <Route path="/staff/:id" element={<StaffDetail/>} />
          <Route path="/stafflist" element={<StaffList/>} />
        </Routes>
      </header>


    </div>
  );
}

export default App;
