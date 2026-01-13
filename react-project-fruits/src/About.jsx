
const AboutUs = () => {
    return (
        <section className="about-us-section">
            <div className="container">
                <div className="about-header">
                    <h2 className="section-title">About Us</h2>

                </div>

                <div className="about-content-wrapper">
                    {/* Left side - Image */}
                    <div className="about-image">
                        <img src="/assets/Group 42.png" alt="groceries" className="main-image" />
                        <div className="image-overlay"></div>
                    </div>

                    {/* Right side - Content Cards */}
                    <div className="about-content">
                        {/* Mission Section */}
                        <div className="about-card">
                            <div className="card-header">

                                <h3 className="card-title">Our Mission</h3>
                            </div>
                            <p className="card-text">
                                To make everyone and employees benefit, this event leads for US
                                sustainability. Proceeding, build those and restaurants across more
                                customers.
                            </p>
                        </div>

                        {/* Vision Section */}
                        <div className="about-card">
                            <div className="card-header">

                                <h3 className="card-title">Our Vision</h3>
                            </div>
                            <p className="card-text">
                                To help us focus on our systems, for specifics and needs, making
                                our own vision and business development opportunities from between
                                community and local businesses.
                            </p>
                        </div>

                        {/* Goal Section */}
                        <div className="about-card">
                            <div className="card-header">

                                <h3 className="card-title">Our Goal</h3>
                            </div>
                            <p className="card-text">
                                Our goal is to provide all stakeholders with both working and social
                                physical experiences, as well as to develop and improve relationships
                                from evolving, moving, integrating through our environment planning,
                                and developing a new and exciting environment that can be built in
                                everyone and grow their lives today.
                            </p>
                            <button className="explore-more-btn">Explore more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;