import React from "react";
import './App.css';
import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    to="/">
                    Home
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    to="/projects">
                    Projects
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    to="/contact">
                    Contact
                </NavLink>
            </li>
        </ul>
    );
}
