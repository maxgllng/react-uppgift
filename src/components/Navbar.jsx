import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="logo">PureThoughts.</NavLink>
            <NavLink to="Networks" className="help--btn">SOS</NavLink>
        </nav>
    )
}