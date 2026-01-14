

const HowItWorks = () => {
    return (
        <section className="howitworks">
            <div className="howitworks-container">


                <div className="phone-wrapper">
                    <div className="circle-bg"></div>
                    <img src="/assets/Nokia XR21.png" alt="App preview" className="phone-img" />
                </div>


                <div className="content">
                    <h2>How it works</h2>

                    <h3>Browse</h3>
                    <p>
                        Discover groceries, fresh produce, and meals from trusted
                        supermarkets, markets, and restaurants near you, all in one <br /> app.
                    </p>

                    <button className="browse-btn">Browse Now</button>
                </div>


                <button className="arrow">
                    <img src="/assets/Group 20.png" alt="next" />
                </button>

            </div>
        </section>
    );
};

export default HowItWorks;
