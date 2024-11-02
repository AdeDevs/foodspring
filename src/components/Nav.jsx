import { useState } from "react";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

      // Function to toggle cart
    const toggleCart = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div>
                <button>foodspring</button>
                <button onClick={toggleCart} className="uk">UK</button>
            </div>
            <div className="about">
                <button>About Us</button>
                <button className="special">Shop Now</button>
            </div>
            <span className="toggle-menu"><ion-icon name="menu-outline" onClick={toggleCart} /></span>
            {isMenuOpen && (
        <div
          className={`overlay ${isMenuOpen ? "show" : ""}`}
          onClick={toggleCart}
        ></div>
      )}
      <div className={`menu ${isMenuOpen ? "show" : ""}`}>
        <span className="toggle-menu"> <ion-icon name="close-outline" onClick={toggleCart} /> </span>
        <ul>
            <li>
                About Us
            </li>
            <li>
                Shop Now
            </li>
        </ul>
      </div>
        </nav>
    )
}

export default NavBar;