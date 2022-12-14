import githubIcon from "../src/assets/github-icon.png";
import facebookIcon from "../src/assets/facebook-icon.png";
import instagramIcon from "../src/assets/instagram-icon.png";
import twitterIcon from "../src/assets/twitter-icon.png";

export default function Footer() {
    return (
        <div className="social">
            <img className="social-icons" src={githubIcon} />
            <img className="social-icons" src={facebookIcon} />
            <img className="social-icons" src={instagramIcon} />
            <img className="social-icons" src={twitterIcon} />
        </div>
    );
}
