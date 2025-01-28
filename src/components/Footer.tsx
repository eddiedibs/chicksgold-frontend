
import VisaIcon from "./shared/icons/VisaIcon"
import MasterCardIcon from "./shared/icons/MasterCardIcon"
import AmericanExpressIcon from "./shared/icons/AmericanExpressIcon"
import SkrillIcon from "./shared/icons/SkrillIcon"
import BitcoinIcon from "./shared/icons/BitcoinIcon"
import EtheriumIcon from "./shared/icons/EtheriumIcon"
import ChicksLogo from '../assets/chicks_logo.svg'
import InstagramIcon from "./shared/icons/InstagramIcon"
import FacebookIcon from "./shared/icons/FacebookIcon"
import TwitterIcon from "./shared/icons/TwitterIcon"
import DiscordIcon from "./shared/icons/DiscordIcon"

const Footer = () => {

  return (
    <section className='footer-container'>
        <div className='footer-header'>
            <div className='footer-payment-logos'>
                <VisaIcon width="100" height="100" />
                <MasterCardIcon width="100" height="100" />
                <AmericanExpressIcon width="100" height="100" />
                <SkrillIcon width="100" height="100" />
                <BitcoinIcon width="100" height="100" />
                <EtheriumIcon width="100" height="100" />
            </div>
            <a href="/" style={{textDecoration: 'none', color: '#fff'}}>And 50+ more</a>
        </div>
        <div className='footer-body'>
            <div className='footer-social'>
                <a href="">
                    <FacebookIcon width="50" height="50" />
                </a>
                <a href="">
                    <InstagramIcon width="50" height="50" />
                </a>
                <a href="">
                    <TwitterIcon width="50" height="50" />
                </a>
                <a href="">
                    <DiscordIcon width="50" height="50" />
                </a>
            </div>
            <div className='footer-divider'></div>
            <div className='footer-links'>
                <div className='footer-inner-link-sections'>
                    <div className='footer-logo'>
                        <a href="/">
                            <img src={ChicksLogo} className="logo" alt="Chicks logo" />
                        </a>
                        <span>support@chicksgold.com</span>
                    </div>
                    <div className='footer-link-chicksgold'>
                        <h3>Chicks Gold</h3>
                        <ul>
                            <a href="/"><li>Games</li></a>
                            <a href="/"><li>About Us</li></a>
                            <a href="/"><li>Blog</li></a>
                            <a href="/"><li>Sitemap</li></a>
                        </ul>
                    </div>
                    <div className='footer-link-support'>
                        <h3>Support</h3>
                        <ul>
                            <a href="/"><li>Contact Us</li></a>
                            <a href="/"><li>FAQ</li></a>
                        </ul>
                    </div>
                    <div className='footer-link-legal'>
                        <h3>Legal</h3>
                        <ul>
                            <a href="/"><li>Privacy</li></a>
                            <a href="/"><li>Terms of Service</li></a>
                            <a href="/"><li>Copyright Policy</li></a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <span>Copyright © 2017, ChicksGold.com. All Rights Reserved.</span>
            </div>
        </div>
    </section>
  );
};

export default Footer;