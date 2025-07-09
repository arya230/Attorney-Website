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
                    <li><Link to="/#">PRACTICES</Link></li>
                    <li><Link to="/#">INSIGHTS</Link></li>
                    <li><Link to="/#">NEWSROOM</Link></li>
                    <li><Link to="/#">ABOUT US</Link></li>
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