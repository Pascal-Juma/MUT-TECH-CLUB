import './Footer.css'
import Pallate from '../Pallate/Pallate.tsx'
import logoFooter from '../../images/logo.png'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter,  FaPhone } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import Quick from '../Quick/Quick.tsx';

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-top">
        <div className="footer-branding">
            <img src={logoFooter} alt="Logo" />
            <p className="paragragh-branding">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, tempore.
            </p>
            <p className="branding-socials">
                <FaFacebookF /><FaXTwitter /><FaLinkedinIn /><FaYoutube />
            </p>
        </div>

        <div className="footer-solutions">
            <p className="footer-top-heading">
              IT Solutions
            </p>
            <ol className="solutions-list">
                <li>Web Development</li>
                <li>Cyber Security</li>
                <li>Andriod Development</li>
                <li>Cloud Engineering</li>
                <li>Power Platform</li>
            </ol>
        </div>

        <div className="footer-links">
            <p className="footer-links-heading">
              Quick Links
            </p>
            <ol className="footer-links-list">
              <Quick />
            </ol>
        </div>

        <div className="footer-in-touch">
          <p className="footer-top-heading">
            Contact Us
          </p>
          <Pallate symbol={<MdLocationOn />} intouch="451T Murang'a Kiria-ini 39495 Ave.Kiharu" />
          <Pallate symbol={<MdEmail />} intouch="info.club@mutech.ac.ke" />
          <Pallate symbol={<FaPhone />} intouch="+254 74247 1674" />
        </div>
        </div>
        <div className="footer-bottom">
            <p className="footer-rights">
                CopyRight &copy; 2025 <span className="rights-owner">Pascal Meta Labs.</span> All Rights Reserved.
            </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
