import './Steps_section.css'
import img from '../assets/img.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'


function Steps() {

    return (
        <>
            <h1 className='steps_text'>How it works.</h1>
            <div className='Steps_container'>
                <div className='step1'>
                    <img src={img} alt="" />
                    <h3>Adapt your menu items</h3><br />
                    <p>Easily adapt your menu using the <br />
                        webflow CMS and allow <br />
                        customers to browse your items.</p>
                </div>
                <div className='step1'>
                    <img src={img2} alt="" />
                    <h3>Accept online orders & takeout</h3>
                    <br />
                    <p>Let your customers order and pay <br /> via the powerful ecommerce system, <br />
                        or simple let them call your store.</p>
                </div>
                <div className='step1'>
                    <img src={img3} alt="" />
                    <h3>Manage delivery or takeout</h3><br />
                    <p>Manage your own logistics and <br /> take orders simply through the <br /> ecommerce system.</p>
                </div>
            </div>
        </>
    )
}


export default Steps