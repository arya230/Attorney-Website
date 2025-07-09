import React from "react";
import Navbar from '../components/navbar';
import Footer from "../components/footer"
import "../App.css"
import { SearchOutlined } from "@ant-design/icons";

const People : React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="people-page">
      <div className="intro-text">
        The collective experience and knowledge of more than 500 professionals in
        offices in 14 cities across 15 practices gives us the commitment to
        excellence in legal and client services.
      </div>

      <h2 className="people-search-title">People Search</h2>

      <div className="search-box-wrapper">
        <p className="search-info">
          Search for our people by name or keyword. You may also search by a
          location or a practice area.
        </p>

        <div className="search-box">
          <input type="text" placeholder="Find a professional" />
          <select>
            <option>Practice areas</option>
            <option>Litigation</option>
            <option>Corporate Law</option>
            {/* Add more as needed */}
          </select>
          <select>
            <option>Locations</option>
            <option>New York</option>
            <option>Delhi</option>
            {/* Add more as needed */}
          </select>
          <button className="search-button">
            <SearchOutlined />
          </button>
        </div>
      </div>

      <div className="alphabet-browse">
        <h3>Or browse alphabetically</h3>
        <div className="alphabet">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((char) => (
            <span key={char}>{char}</span>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};


export default People;

