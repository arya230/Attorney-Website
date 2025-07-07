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
import suburlsImg from "../assets/sub-urls-img.avif"



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

  <div className="about-us-section">
    <h2>Lakshmikumaran & Sridharan is a full-service law firm based in India. The firm has offices in 14 cities and has over 500 professionals specializing in areas such as corporate & commercial laws, dispute resolution, taxation and intellectual property.</h2>
    <div className="inner-content">
        <p>Over the last three decades, we have worked with a variety of clients – start-ups, small & medium enterprises, large Indian corporates and multinational companies.</p>
        <p className='second-div'>Our professionals have experience of working in both traditional sectors such as commodities, automobile, pharmaceuticals, petrochemicals and modern sectors such as e-commerce, big data, renewables.</p>
    </div>
  </div>


  <div className="sub-urls-section">
    <img src={suburlsImg} alt="" />
    <section>
        <h2>Our Practices</h2>
        <div className="col-wrapper">

       
        <div className="col1">
        <ul>
            <li>
                <a href="#">Arbitration</a>
            </li>
            <li>
                <a href="#">BIS</a>
            </li>
            <li>
                <a href="#">Banking & Finance</a>
            </li>
            <li>
                <a href="#">Commercial Litigation</a>
            </li>
            <li>
                <a href="#">Competition and Antitrust</a>
            </li>
            <li>
                <a href="#">Coporate</a>
            </li>
            <li>
                <a href="#">Customs</a>
            </li>
            <li>
                <a href="#">Direct tax</a>
            </li>
            <li>
                <a href="#">Economic offences</a>
            </li>
        </ul>
        </div>
        <div className="col2">
        <ul>
            <li>
                <a href="#">Employment Law</a>
            </li>
            <li>
                <a href="#">Goods and Services Tax</a>
            </li>
            <li>
                <a href="#">Insolvency</a>
            </li>
            <li>
                <a href="#">Intellectual Property</a>
            </li>
            <li>
                <a href="#">International Trade and WTO</a>
            </li>
            <li>
                <a href="#">Mergers & Acquisitions/PE</a>
            </li>
            <li>
                <a href="#">Real Estate Law</a>
            </li>
            <li>
                <a href="#">Regulatory</a>
            </li>
            <li>
                <a href="#">Securities Law</a>
            </li>
        </ul>
        </div>
        </div>
    </section>

  </div>

  </>
);

export default Home;