import "./Hero.css";
import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h2 className="gradient__text">Find a place you will love to live!</h2>
        <p>See through the lenses of people who have lived or visited the neighbourhood you might have in mind.</p>
        <div className="header-content__input">
          <input type="email" placeholder="Enter Address" />
          <FaSearch className="search-icon" />
          <button type="button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
