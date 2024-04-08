import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import frame from "../../assets/Frame 5902.svg";
import ser from "../../assets/search.svg";
import fram2 from "../../assets/Frame 152.svg";
import frm3 from "../../assets/Frame 5911.svg";
import "./Welcome.css";
import { CheckCircle } from 'react-feather'
function Welcome() {
  const [showPopup, setShowPopup] = useState(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [rating, setRating] = useState(0);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = () => {
    setSubmittedSuccessfully(true);
    setShowPopup(false);
  };

  const handleStarClick = (index) => {
    setRating(index === rating ? 0 : index);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? 'star-selected' : 'star-unselected'}
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      {showPopup && <div className="overlay" onClick={togglePopup}></div>}
      {submittedSuccessfully && (
        <div className='sub_pop_grp'>
        <div className="submitted-popup">
          <CheckCircle className='chek' />
          <h3>Review Submitted</h3>
          </div>
          </div>
      )}
      <div className="nav__navbar-links_logo">
        <img className="search" src={ser} alt="Search" />
        <img className='face' src={fram2} alt="Frame" />
        <div className="info_street">
          <button onClick={togglePopup}>
            <img src={frame} alt="Frame" />
          </button>
          {showPopup && (
            <div className='popup'>
              <div className="strt">
                <h3>Review Location</h3>
                <h2>Bonny and Clyde Street, Ajao Estate, Lagos</h2>
                <div className="cont_labl">
                  <label className="label" htmlFor="amenities">Select Amenities:</label>
                  <select className="slct" id="amenities" name="amenities">
                    <option value="school"></option>
                    <option value="hospital">Hospital</option>
                    <option value="park">Park</option>
                    <option value="hospital">Hospital</option>
                    <option value="park">Park</option>
                    <option value="hospital">Hospital</option>
                    <option value="park">Park</option>
                    
                  </select>
                </div>
                <h4>Rate Location:</h4>
                <div className="stars">{renderStars()}</div>
                <div className="reviews_write">
                  <h4 className="review">Write Review</h4>
                  <textarea className="text_box" id="review" name="review"></textarea>
                </div>
                <div className="anony_radio">
                  <input type="checkbox" id="anonymous" name="anonymous" />
                  <h4 htmlFor="anonymous">Post as Anonymous</h4>
                </div>
                <div className="btns_for_submit">
                  <button className="sub_btn" type="submit" onClick={handleSubmit}>Submit</button>
                  <button className="cancel_btn" type="button" onClick={togglePopup}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hero">
          <img src={frm3} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
