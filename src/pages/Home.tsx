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
import cosImg from "../assets/cosmetics.jpg";
import ai from "../assets/ai-govrenance.jpg"
import carrers from "../assets/carrers.png"



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
  {/* INSIGHTS Section */}
<section className="insights-section">
  <h2 className="insights-heading">INSIGHTS</h2>

  {/* Top 2 featured insights */}
  <div className="insights-top">
    <div className="insight-card large">
      <img src={cosImg} alt="Insight 1" />
      <div className="insight-content">
        <p className="category">LKS INSIGHTS</p>
        <h3>Cosmetic or Medicine: Determination of classification of personal care products under the Customs Tariff</h3>
        <p className="date">03 July 2025</p>
      </div>
    </div>

    <div className="insight-card large">
      <img src={ai} alt="Insight 2" />
      <div className="insight-content">
        <p className="category">LKS INSIGHTS</p>
        <h3>SEBI’s Consultation Paper and the winds of AI Governance</h3>
        <p className="date">02 July 2025</p>
      </div>
    </div>
  </div>

  {/* Bottom 3 text cards */}
  <div className="insights-bottom">
    <div className="insight-card small">
      <p className="category">NEWS</p>
      <p className="date">7 July 2025</p>
      <h4>Substitution of assets attached by the Enforcement Directorate under PMLA: SC</h4>
      <p className="excerpt">
        In a recent case, the Hon’ble Supreme Court has passed an order...
      </p>
    </div>

    <div className="insight-card small">
      <p className="category">NEWS</p>
      <p className="date">01 July 2025</p>
      <h4>Refund of IGST on exports – Rule 96(10) stands omitted prospectively but is not applicable to pending proceedings</h4>
      <p className="excerpt">
        The Gujarat High Court has held that Rule 96(10) of the CGST Act...
      </p>
    </div>

    <div className="insight-card small">
      <p className="category">NEWS</p>
      <p className="date">10 June 2025</p>
      <h4>Discharge of a person in predicate offence is not a bar on investigation under PMLA</h4>
      <p className="excerpt">
        In this case, the Petitioner was implicated in the offence of illicit manufacturing...
      </p>
    </div>
  </div>
</section>

<div className="career-section">
      <div className="career-left">
        <div className="career-block">
          <h2>LKS Careers</h2>
          <p>
            Multidisciplinary teams with background in law, business, process, project
            management, technology, and more; built on a bedrock of Indian values and
            diverse perspectives
          </p>
          <button className="border-button">JOIN THE TEAM</button>
        </div>

        <div className="career-block">
          <h2>LKS Internships</h2>
          <p>
            Law students will find that internship at LKS could be one of the most
            enriching experiences. The senior members of our team are committed to
            mentoring and guiding you towards achieving your goal of getting ready for a
            flying start to your career.
          </p>
          <button className="border-button">KNOW MORE</button>
        </div>
      </div>

      <div className="career-right">
        <img src={carrers} alt="LKS Team" />
      </div>
    </div>


  </>
);

export default Home;