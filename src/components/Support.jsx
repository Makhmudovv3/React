import React from 'react';
import "./Support.css"
import foodImage from '../assets/foodimage.png';



function SupportSection() {
    return (
        <div className="support-wrapper">
            <div className="support-card">

                {/* Chap taraf: Rasm qismi */}
                <div className="support-image-side">
                    <img src={foodImage} alt="Local food" className="side-img" />
                </div>

            
                <div className="support-text-side">
                    <div className="text-content">
                        <h2 className="support-heading">
                            Support <span className="white-text">good food</span> <br />
                            and local business.
                        </h2>
                        <button className="order-btn">Order Now</button>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default SupportSection;