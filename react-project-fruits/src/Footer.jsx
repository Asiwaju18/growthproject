const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo Section */}
                <div className="logo-section">
                    {/* Option 1: Text logo */}
                    <div className="logo-img">
                        <img src="/assets/duvic-01 1.png" alt="" />
                    </div>

                </div>

                <div className="footer-section company-info">

                    <p className="address">
                        <img src="/assets/duo-icons_location.png" alt="" />
                        Duvic Drop Ltd, 123 High <br />Street London, UK SW1A 1AA
                    </p>

                    <div className="contact-info">
                        <a href="mailto:support@duvicdrop.co.uk" className="email-link">
                            <img src="/assets/ic_twotone-email.png" alt="" />
                            support@duvicdrop.co.uk
                        </a>
                        <p className="phone">
                            <span className="phone-icon">📞</span> +44 20 7946 0123
                        </p>
                    </div>

                    <div className="social-links">
                        <img src="/assets/skill-icons_linkedin.png" alt="LinkedIn" />
                        <img src="/assets/pajamas_twitter.png" alt="Twitter" />
                        <img src="/assets/logos_facebook.png" alt="Facebook" />
                        <img src="/assets/skill-icons_instagram.png" alt="Instagram" />
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="footer-section links-section">
                    <div className="links-column">
                        {/* <h4 className="links-heading">Company</h4> */}
                        <a href="#" className="footer-link">About us</a>
                        <a href="#" className="footer-link">Join us</a>
                        <a href="#" className="footer-link">Blog</a>
                        <a href="#" className="footer-link">FAQ</a>
                    </div>

                    <div className="links-column">
                        {/* <h4 className="links-heading">Legal</h4> */}
                        <a href="#" className="footer-link">Privacy Policy</a>
                        <a href="#" className="footer-link">Terms & Conditions</a>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="footer-section newsletter-section">
                    <h4 className="newsletter-heading">Subscribe to our Newsletter</h4>
                    <div className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="email-input"
                        />
                        <button className="subscribe-btn">Subscribe</button>
                    </div>

                    <div className="app-badges">
                        <button className="app-badge google-play">
                            <img src="/assets/logos_google-play-icon.png" alt="Google Play" />
                            <div className="text-container">
                                <div className="top-text">GET IN ON</div>
                                <div className="bottom-text">Google Play</div>
                            </div>
                        </button>
                        <button className="app-badge app-store">
                            <img src="/assets/Vector.png" alt="App Store" />
                            <div className="text-container">
                                <div className="top-text">Download on the</div>
                                <div className="bottom-text">App Store</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p className="copyright">© 2025 Duvic Drop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;