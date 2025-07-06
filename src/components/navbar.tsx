import React from "react";
import websiteLogo from "../assets/attorney-website-page-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';


const Navbar : React.FC = () => {

    return (
        <div className="navbar-container">
            <img src={websiteLogo} alt="" />
            <div className="list-items">
                <ul className="navbar-list-items">
                    <li>PEOPLE</li>
                    <li>PRACTICES</li>
                    <li>INSIGHTS</li>
                    <li>NEWSROOM</li>
                    <li>ABOUT US</li>
                    <li>CAREERS</li>
                    
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


