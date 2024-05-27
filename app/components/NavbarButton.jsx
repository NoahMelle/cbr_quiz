'use client';

import React from "react";
import styles from './styles/navbar.module.css'

export default function NavbarButton() {
    function toggleNavbar(e) {
        const navbar = document.querySelector(".navbar_wrapper");
        navbar.classList.toggle("active");
        const hamburger = document.querySelector(".hamburger_icon");
        hamburger.classList.toggle("active");
    }

    return (
        <div className="hamburger_icon" onClick={toggleNavbar}>
            <span className="hamburger_span"></span>
        </div>
    );
}