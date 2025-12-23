import React from 'react';
import './FoodDash.css';
import phone from "../assets/phone.png";    


function FoodDash() {
    return (
       <div className='Food_con'>

                <div>
                    <img src={phone} alt="" />
                </div>
                <div className="text-content">
                    <h1>Order online with <br /> <span>our simple checkout.</span></h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                    </p>
                    <button className="faq-button">See our FAQ</button>
                </div>

            </div>
    );
}

export default FoodDash;