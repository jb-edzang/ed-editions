import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Layout from "@/Layout";

const SocialIcons = () => {
  return (
    <div>
      <ul className="bg-red-400 flex gap-4">
        <li>
          <a href="tel:yourPhoneNumber" className="phone">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </li>
        <li className="emailIcon">
          <a href="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/yourProfile" className="linkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/yourProfile" className="facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/yourChannel" className="youtube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
