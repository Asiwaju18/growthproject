

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* LEFT COLUMN */}
                <div className="footer-section left-column">
                    <div className="logo-img">
                        <img src="/assets/duvic-01 1.png" alt="Duvic Drop" />
                    </div>

                    <p className="address">
                        <img src="/assets/duo-icons_location.png" alt="" />
                        Duvic Drop Ltd, 123 High Street <br />
                        London, UK SW1A 1AA
                    </p>

                    <a href="mailto:support@duvicdrop.co.uk" className="email-link">
                        <img src="/assets/ic_twotone-email.png" alt="" />
                        support@duvicdrop.co.uk
                    </a>

                    <p className="phone">
                        <span>📞</span> +44 20 7946 0123
                    </p>

                    <div className="social-links">
                        <img src="/assets/skill-icons_linkedin.png" alt="LinkedIn" />
                        <img src="/assets/pajamas_twitter.png" alt="Twitter" />
                        <img src="/assets/logos_facebook.png" alt="Facebook" />
                        <img src="/assets/skill-icons_instagram.png" alt="Instagram" />
                    </div>
                </div>

                {/* LINKS COLUMN 1 */}
                <div className="footer-section links-column">
                    <a href="#" className="footer-link">About us</a>
                    <a href="#" className="footer-link">Join us</a>
                    <a href="#" className="footer-link">Blog</a>
                    <a href="#" className="footer-link">FAQ</a>
                </div>

                {/* LINKS COLUMN 2 */}
                <div className="footer-section links-column1">
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Terms & Conditions</a>
                </div>

                {/* NEWSLETTER */}
                <div className="footer-section newsletter-section">
                    <h4>Subscribe to our Newsletter</h4>

                    <div className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="email-input"
                        />
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                    <div className="app-download-section">
                        <div className="app-badges">
                            <button className="app-badge">
                                <img src="/assets/logos_google-play-icon.png" alt="Google Play" />
                                <div className="">
                                    <small>GET IT ON</small>
                                    <br />
                                    <strong>Google Play</strong>
                                </div>
                            </button>

                            <button className="app-badge">
                                <img src="/assets/Vector.png" alt="App Store" />
                                <div>
                                    <small>Download on the</small>
                                    <br />
                                    <strong>App Store</strong>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                © 2025 Duvic Drop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
