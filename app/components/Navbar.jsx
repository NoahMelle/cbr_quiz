import React from "react";
import styles from './styles/navbar.module.css'
import Image from "next/image";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_wrapper">
                <ul className="navbar_links_list nav_list">
                    <li className="nav_list_item">
                        <a href="#" className="navbar_link">
                            Leren
                        </a>
                    </li>
                    <li className="nav_list_item">
                        <a href="#" className="navbar_link">
                            Oefenen
                        </a>
                    </li>
                    <li className="nav_list_item">
                        <a href="#" className="navbar_link">
                            Examen
                        </a>
                    </li>
                </ul>
                <ul className="nav_link right">
                    <li className="nav_list_item">Rijbewijs B</li>
                    <li className="nav_list_item">
                    <Image  
                    src={require("../../public/assets/img/profiles/67212832.png")}
                    className="profile_icon"
                    />
                    </li>
                </ul>
                <NavbarButton />
            </div>
        </nav>
    );
}
