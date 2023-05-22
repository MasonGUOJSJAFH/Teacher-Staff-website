import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import EditProfile from './page/EditProfile';
import StaffList from './page/StaffList';
import StaffDetail from './page/StaffDetail';
import Navbar from "./page/Navbar";
import ContactUs from "./page/ContactUs";

import './App.css';
import MainPage from "./page/MainPage";

function App() {
  return (
    <div className="App">
        <Navbar/>
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
          <Route path="/"  element={<MainPage/>} />
          <Route path="/edit/:id" element={<EditProfile/>} />
          <Route path="/staff/:id" element={<StaffDetail/>} />
          <Route path="/stafflist" element={<StaffList/>} />
            <Route path="contact" element={<ContactUs/>} />
        </Routes>
      </header>


    </div>
  );
}

export default App;
