
import "./Hero.css"
import Free from "../assets/Free.png"
import Path from "../assets/Path.png"


function Hero() {


    return (

        <div className="Hero">
            <div className="Hero_text">
                <h1>
                    Beautiful food & <br />
                    takeaway, <span>delivered</span> <br />
                    to your door.
                </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and <br />
                    typesetting industry. Lorem Ipsum has been the industry's <br />
                    standard dummy text ever since the 1500.</p>
                <button>Place an Order</button>
                <div className="path">
                    <img src={Path} alt="" />
                    <h3>Trustpilot</h3>
                </div>
                <div className="view">
                    <p><span>4.8 out of 5</span> based on 2000+ reviews</p>
                </div>
            </div>
            <img src={Free} alt="" className="img_hero" />


        </div>
    )
}

export default Hero