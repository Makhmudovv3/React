import Image from '../assets/IMAGE.png'
import Frame from '../assets/Frame.png'
import './Navbar2.css'



function Navbar2() {



    return (
        <div className='Navbar2'>
            <div className='nav_img'>
                <img src={Image} alt="" />
            </div>
            <div className='Classlist'>
                <a href=""><span>Home</span></a>
                <a href="">Order</a>
                <a href="">Company</a>
                <a href="">FAQ</a>
                <a href="">Contact</a>
                <img src={Frame} alt="" />
            </div>

        </div>

    )
}

export default Navbar2