
import './About.css'
import Food from '../assets/Food.png'


function About() {

    return (
        <div className='About'>
            <div className='about_con'>
                <span>The home of <br />
                    fresh products</span>
                <p>Lorem Ipsum is simply dummy text of the printing and <br />
                    typesetting industry. Lorem Ipsum has been the industry's <br />
                    standard dummy text ever since the 1500.</p><br />
                <button>Learn about us</button>
            </div>
            <img src={Food} alt="" />
        </div>


    )
}

export default About