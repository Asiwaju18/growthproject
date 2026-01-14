import React, { useState } from "react";

const FAQSection = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleFAQ = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="faq-section">
            <div className="faq-left">
                <h2 className="faq-title">
                    Frequently <br /> asked questions
                </h2>

                <div className="faq-list">
                    <div className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(1)}
                            aria-expanded={activeId === 1}
                        >
                            What if my order arrives late or incorrect?
                            <span className={`arrow ${activeId === 1 ? "open" : ""}`}>
                                &#x25BC;
                            </span>
                        </button>
                        {activeId === 1 && (
                            <p className="faq-answer">
                                We apologize for any inconvenience. Please contact our support
                                team immediately and we will work to resolve the issue.
                            </p>
                        )}
                    </div>

                    <div className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(2)}
                            aria-expanded={activeId === 2}
                        >
                            What payment methods are accepted?
                            <span className={`arrow ${activeId === 2 ? "open" : ""}`}>
                                &#x25BC;
                            </span>
                        </button>
                        {activeId === 2 && (
                            <p className="faq-answer">
                                We accept credit/debit cards, PayPal, and mobile money payments.
                            </p>
                        )}
                    </div>

                    <div className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(3)}
                            aria-expanded={activeId === 3}
                        >
                            How do I join as a store or restaurant?
                            <span className={`arrow ${activeId === 3 ? "open" : ""}`}>
                                &#x25BC;
                            </span>
                        </button>
                        {activeId === 3 && (
                            <p className="faq-answer">
                                You can join by registering through our partner portal and
                                submitting the required documents.
                            </p>
                        )}
                    </div>

                    <div className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(4)}
                            aria-expanded={activeId === 4}
                        >
                            Is there a cost to partner with Duvic Drop?
                            <span className={`arrow ${activeId === 4 ? "open" : ""}`}>
                                &#x25BC;
                            </span>
                        </button>
                        {activeId === 4 && (
                            <p className="faq-answer">
                                No, partnering with Duvic Drop is free. We charge a small
                                commission on completed orders.
                            </p>
                        )}
                    </div>
                </div>

                <div className="faq-question-mark-left">
                    <img src="/assets/image-Photoroom 5-1.png" alt="Question Mark" />
                </div>
            </div>

            <div className="faq-right">
                <div className="faq-form-container">
                    <h3>Still have questions?</h3>
                    <p>We’d love to help. Send us your question below.</p>
                    <form className="faq-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Question" rows="3" required></textarea>
                        <button type="submit">Ask us</button>
                    </form>
                </div>
                <div className="faq-question-mark-right">
                    <img src="/assets/image-Photoroom 6-1.png" alt="Question Mark" />

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
