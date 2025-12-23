import './Footer.css';
import logo from "../assets/IMAGE.png";
import instagram from "../assets/icon.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";    

function Footer () {
    return (
        <footer className="simple-footer">
            <br /><br /><br /><br /><br /><br /><br />
            <div className="footer-container">
                
                <div className="footer-info">
                    <div className="logo-icon"><img src={logo} alt="" /></div>
                    <p>Takeaway & Delivery template for small - medium businesses.</p>
                </div>

                <div className="footer-links">
                    <div className="column">
                        <h4>COMPANY</h4>
                        <a href="#">Home</a>
                        <a href="#">Order</a>
                        <a href="#">FAQ</a>
                    </div>
                    <div className="column">
                        <h4>TEMPLATE</h4>
                        <a href="#">Style Guide</a>
                        <a href="#">Licence</a>
                    </div>
                    <div className="column">
                        <h4>FLOWBASE</h4>
                        <a href="#">More Cloneables</a>
                    </div>
                </div>
                <br />
            </div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="footer-bottom">
                <p>Built by <span>Flowbase</span> · Powered by <span>Webflow</span></p>
                <div className="socials">
                    <span><img src={instagram} alt="Instagram" /></span> <span><img src={twitter} alt="Twitter" /></span> <span><img src={youtube} alt="YouTube" /></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;