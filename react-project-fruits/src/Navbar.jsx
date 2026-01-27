import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="nav-logo">
                <img src="/assets/duvic-01 1.png" alt="Duvic Drop" />
            </div>

            {/* Links */}
            <ul className="nav-links">
                <li>About us</li>



                <li>Contact us</li>
                <li>Blog</li>
            </ul>

            {/* Buttons */}
            <div className="nav-actions">
                <button className="login-btn">Log in</button>
                <button className="signup-btn">Sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;
