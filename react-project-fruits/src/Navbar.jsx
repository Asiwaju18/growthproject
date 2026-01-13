
const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="nav-logo">
                <img src="/assets/duvic-01 1.png" alt="Duvic Drop" />
            </div>


            <ul className="nav-links">
                <li>About us</li>
                <li>Contact us</li>
                <li>Blog</li>
            </ul>


            <div className="nav-actions">
                <button className="login-btn">Log in</button>
                <button className="signup-btn">Sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;
