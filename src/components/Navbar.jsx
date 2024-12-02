import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';


export default function Navbar() {
    const location = useLocation();
    const [buttonText, setButtonText] = useState('SOS');
    const [buttonRoute, setButtonRoute] = useState('/Networks');

    useEffect(() => {
        if (location.pathname === "/Networks") {
            setButtonText("Return");
            setButtonRoute("/");
        } else {
            setButtonText("SOS");
            setButtonRoute("/Networks");
        }
    }, [location]);

    return (
        <nav className="navbar">
            <NavLink to="/" className="logo">PureThoughts.</NavLink>
            <NavLink
                to={buttonRoute}
                className={`help--btn ${buttonText === "Return" ? "back-btn" : ""}`}
            >
                {buttonText}
            </NavLink>
        </nav>
    );
}