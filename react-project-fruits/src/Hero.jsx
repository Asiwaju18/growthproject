const Hero = () => {
    return (
        <section className="hero">
            <div>
                <h1>From meals to markets, <span>all in one platform!</span></h1>
                <p>
                    Duvic Drop is your all-in-one grocery and food ordering solution for
                    <br /> UK residents. Shop via our mobile app or website where you can <br /> browse nearby stores and restaurants, place and track your <br /> orders and get them delivered quickly.
                </p>
                <div className="hero-buttons">
                    <button className="google-play-button">
                        <img src="/assets/logos_google-play-icon.png" alt="Google Play" />
                        <div className="text-container">
                            <div className="top-text">GET IN ON</div>
                            <div className="bottom-text">Google Play</div>
                        </div>
                    </button>
                    <button className="google-play-button">
                        <img src="/assets/Vector.png" alt="App Store" />
                        <div className="text-container">
                            <div className="top-text">Download on the</div>
                            <div className="bottom-text1">App Store</div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="hero-image">
                {/* <img src="/assets/image-Photoroom.png" alt="groceries" className="hero-image1" /> c v nvhh  */}
                <img src="/assets/image-Photoroom 1.png" alt="groceries" />
            </div>
        </section>
    );
};

export default Hero;
