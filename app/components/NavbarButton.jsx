'use client';
import React from "react";

export default function NavbarButton() {
    function toggleNavbar(e) {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("open");
        const hamburger = document.querySelector(".hamburger_icon");
        hamburger.classList.toggle("active");
    }

    return (
        <div className="hamburger_icon" onClick={toggleNavbar}>
            <span className="hamburger_span"></span>
        </div>
    );
}