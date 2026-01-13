

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2 className="title">Our Testimonies</h2>

            <div className="testimonial-container">
                {/* LEFT CARD */}
                <div className="testimonial-card">
                    <div className="avatar">
                        <img src="/assets/Ellipse 49.png" alt="User" />
                    </div>

                    <h3>Sarah, London</h3>
                    <div className="quote-img">
                        <img src="/assets/Vector (1).png" alt="quote" />
                    </div>

                    <p>
                        Duvic Drop makes grocery <br /> shopping so easy! I can order <br />fresh
                        ingredients and meals in <br /> minutes.
                    </p>
                </div>

                {/* CENTER CARD */}
                <div className="testimonial-card active">
                    <div className="avatar">
                        <img src="/assets/Ellipse 49.png" alt="User" />
                    </div>

                    <h3>Sarah, London</h3>
                    <div className="quote-img">
                        <img src="/assets/Vector (1).png" alt="quote" />
                    </div>
                    <p>
                        Duvic Drop makes grocery <br /> shopping so easy! I can order <br />fresh
                        ingredients and meals in <br /> minutes.
                    </p>
                </div>

                {/* RIGHT CARD */}
                <div className="testimonial-card">
                    <div className="avatar">
                        <img src="/assets/Ellipse 49.png" alt="User" />
                    </div>

                    <h3>Sarah, London</h3>
                    <div className="quote-img">
                        <img src="/assets/Vector (1).png" alt="quote" />
                    </div>

                    <p>
                        Duvic Drop makes grocery <br /> shopping so easy! I can order <br />fresh
                        ingredients and meals in <br /> minutes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
