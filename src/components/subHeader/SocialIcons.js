import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
//import Link from "next/link";

const SocialIcons = () => {
  return (
    <ul className="bg-red-400 flex gap-4 ">
      <li href="tel:yourPhoneNumber" className="phone">
        <FontAwesomeIcon icon={faPhone} />
      </li>
      {/* <Link href="/contact" passHref> */}
      <li className="emailIcon">
        <FontAwesomeIcon icon={faEnvelope} />
      </li>
      {/* </Link> */}
      <li href="https://www.linkedin.com/yourProfile" className="linkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </li>
      <li href="https://www.facebook.com/yourProfile" className="facebook">
        <FontAwesomeIcon icon={faFacebook} />
      </li>
      <li href="https://www.youtube.com/yourChannel" className="youtube">
        <FontAwesomeIcon icon={faYoutube} />
      </li>
    </ul>
  );
};

export default SocialIcons;
