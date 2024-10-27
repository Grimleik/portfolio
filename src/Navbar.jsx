import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/tic-tac-toe">
                    Tic-tac-toe
                </NavLink>
            </li>
        </ul>
    );
}