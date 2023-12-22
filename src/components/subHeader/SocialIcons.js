import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className=" flex gap-4 mr-auto">
      <Link href="tel:yourPhoneNumber" className="phone">
        <FontAwesomeIcon icon={faPhone} />
      </Link>
      <Link href="/contact" className="emailIcon">
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
      <Link href="https://www.linkedin.com/yourProfile" className="linkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link href="https://www.facebook.com/yourProfile" className="facebook">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link href="https://www.youtube.com/yourChannel" className="youtube">
        <FontAwesomeIcon icon={faYoutube} />
      </Link>
    </div>
  );
};

export default SocialIcons;
