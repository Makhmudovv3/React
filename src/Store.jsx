
import './Store.css';

import storeimg from './assets/Storees.png'

function StoreSection(){
    return (
        <section className="store-container">
            <div className="store-content">

              
                <div className="store-text">
                    <h1 className="store-title">
                        Call our store and <br />
                        <span>takeaway when it suits you best.</span>
                    </h1>
                    <p className="store-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                    </p>
                    <button className="phone-button">
                        Ph. +61 233 2333
                    </button>
                </div>

              
                <div className="store-visual">
                    <img
                        src={storeimg}
                        alt="Store Interior"
                        className="main-store-img"
                    />
                </div>

            </div>
        </section>
    );
};

export default StoreSection;