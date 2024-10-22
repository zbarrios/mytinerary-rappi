import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div class="footer-section" id="contact-info">
        <h3>Contact Information</h3>
        <p>Address: Traveler's Street 123, Global City, Dreamland</p>
        <p>Phone: +123 456 789 000</p>
        <p>
          Email:
          <NavLink href="mailto:info@mundoviajero.com">
            info@mundoviajero.com
          </NavLink>
        </p>
        <p>Business Hours: Monday to Friday, from 9:00 AM to 6:00 PM</p>
      </div>

      <div class="footer-section" id="useful-links">
        <h3>Useful Links</h3>
        <ul>
          <li>
            <NavLink href="#">Popular Destinations</NavLink>
          </li>
          <li>
            <NavLink href="#">Frequently Asked Questions</NavLink>
          </li>
          <li>
            <NavLink href="#">Contact Us</NavLink>
          </li>
          <li>
            <NavLink href="#">Terms and Conditions</NavLink>
          </li>
          <li>
            <NavLink href="#">Privacy Policy</NavLink>
          </li>
        </ul>
      </div>

      <div class="footer-section" id="social-media">
        <h3>Follow Us on Social Media</h3>
        <p>Connect with us!</p>
        <ul>
          <li>
            <NavLink href="#">Twitter</NavLink>
          </li>
          <li>
            <NavLink href="#">Instagram</NavLink>
          </li>
          <li>
            <NavLink href="#">YouTube</NavLink>
          </li>
        </ul>

        <div class="newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <form action="#">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
