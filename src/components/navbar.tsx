import React from "react";
import websiteLogo from "../assets/attorney-website-page-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';




const Navbar : React.FC = () => {

    return (
        <div className="navbar-container">
            <Link to="/">
            <img src={websiteLogo} alt="" />
            </Link>
            <div className="list-items">
                <ul className="navbar-list-items">
                    <li><Link to="/People">PEOPLE</Link></li>
                    <li className="dropdown">
                    <span className="nav-link">PRACTICES</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/arbitration">Arbitration</Link></li>
                        <li><Link to="/bis">BIS</Link></li>
                        <li><Link to="/banking-finance">Banking & Finance</Link></li>
                        <li><Link to="/commercial-litigation">Commercial Litigation</Link></li>
                        <li><Link to="./gst">Goods And Services Tax</Link></li>
                    </ul>
                    </li>
                    <li className="dropdown">
                    <span className="nav-link">INSIGHTS</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/arbitration">In-Focus</Link></li>
                        <li><Link to="/bis">Articles</Link></li>
                        <li><Link to="/banking-finance">Newsletters</Link></li>
                        <li><Link to="/commercial-litigation">Videos</Link></li>
                    </ul>
                    </li>
                    <li className="dropdown">
                    <span className="nav-link">NEWSROOM</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/arbitration">News & Briefings</Link></li>
                        <li><Link to="/bis">Events</Link></li>
                    </ul>
                    </li>
                    <li className="dropdown">
                    <span className="nav-link">ABOUT US</span>
                    <ul className="dropdown-menu">
                        <li><Link to="/arbitration">Who We Are</Link></li>
                        <li><Link to="/bis">Our History</Link></li>
                        <li><Link to="/banking-finance">Our Values</Link></li>
                        <li><Link to="/commercial-litigation">Awards</Link></li>
                        <li><Link to="/competition-antitrust">Contact Us</Link></li>
                    </ul>
                    </li>
                    <li><Link to="/#">CARRERS</Link></li>
                    
                </ul>
                <SearchIcon style={{ color: 'darkblue', cursor: 'pointer' }} />
            </div>
            <div className="vertical-line"> | </div>
            <div className="navbar-right-language-toggles">
            <LanguageIcon style={{ fontSize: 24, color: '#555', cursor: 'pointer' }} />
            <span>ENGLISH</span>

            </div>
             
        </div>


    )

}
export default Navbar;