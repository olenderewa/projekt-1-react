import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
        <div className="icons">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebookSquare} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
