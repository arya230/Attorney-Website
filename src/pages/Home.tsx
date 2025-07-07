import React from 'react';
import { Carousel } from 'antd';
import Navbar from '../components/navbar';
import "../App.css"
import img from "../assets/realestate1.jpg"
import img1 from "../assets/realestate2.jpg"
import img2 from "../assets/realestate3.jpg"
import img3 from "../assets/realestate4.avif"
import img4 from "../assets/realestate5.png"
import img5 from "../assets/realestate6.jpg"
import img6 from "../assets/realestate7.jpeg"



const imgStyle: React.CSSProperties = {
  width: '100vw',
  height: '85vh',
//   objectFit: 'cover',
};

const Home: React.FC = () => (
    <>
    
    <Navbar/>
  <Carousel autoplay autoplaySpeed={4000}>
    <div className='carousel'>
        <img src={img} alt="Slide 1" style={imgStyle} />
        <div className="info-container">
            <h1>Employment Law</h1>
        </div>
    </div>
    <div className='carousel'>
        <img src={img1} alt="Slide 2" style={imgStyle} />   
        <div className="info-container">
        <h1>E-invoicing under GST</h1>
        </div> 
    </div>
    <div className='carousel'>
        <img src={img2} alt="Slide 3" style={imgStyle} />
        <div className="info-container">
            <h1>Insolvency and Bankruptcy Code</h1>
        </div>
    </div>
    <div className='carousel'>
        <img src={img3} alt="Slide 4" style={imgStyle} />
        <div className="info-container">
            <h1>Arbitration in India</h1>
        </div>
    </div>
    <div className='carousel'>
        <img src={img4} alt="Slide 5" style={imgStyle} />
        <div className="info-container">
            <h1>Competition law in the time of Covid-19</h1>
        </div>
    </div>
    <div className='carousel'>

        <img src={img5} alt="Slide 6" style={imgStyle} />
        <div className="info-container">
            <h1>Cybercrime: An impending threat in this Tech Savy World</h1>
        </div>

    </div>
    <div className='carousel'>

        <img src={img6} alt="Slide 7" style={imgStyle} />
        <div className="info-container">
            <h1>Values that shape Us</h1>
        </div>

    </div>
  </Carousel>

  </>
);

export default Home;