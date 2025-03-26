import './About.css'
import aboutLeft from '../../../images/about-left.jpg'
import aboutRight from '../../../images/about-right.jpg'
import Intro from '../../../components/Intro/Intro'
import Button from '../../../components/Button/Button'
import { BiCog } from "react-icons/bi";
import { SiGooglecloudspanner } from "react-icons/si";
import { MdGroups } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import { GiScrewdriver } from "react-icons/gi";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="images-container">
            <div className="about-left">
                <img src={aboutLeft} alt="Image" />
            </div>
            <div className="about-right">
                <img src={aboutRight} alt="Image" />
            </div>
        </div>
        <div className="about-details">
            <div className="about-introduction">
                <Intro heading="About Us" sub="We Strive To Offer Intelligent Business Solutions" color="black" />
            </div>
            <div className="about-values">
                <p className="about-paragragh">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt qui libero sit nisi, in ut voluptates ipsum eos nesciunt quidem reprehenderit? Et, nesciunt qui optio distinctio nobis a veniam odio culpa!
                </p>
            </div>
            <div className="about-more">
                <div className="more-left">
                    <div className="more-left-icons">
                    <BiCog />
                    <div className="spanner-icon">
                    <SiGooglecloudspanner />
                    </div>
                    <div className="screw-driver">
                    <GiScrewdriver />
                    </div>
                    </div>
                    <div className="more-wording">
                    <p className="more-title">
                        Best Services
                    </p>
                    <p className="more-paragragh">
                    Consectetur ipsam adipisicing elit Voluptas aperiam.
                    </p>
                    </div>
                </div>
                <div className="more-right">
                    <div className="more-right-icons">
                        < MdGroups />
                        <div className="handshake-icon">
                        <FaRegHandshake />
                        </div>
                    </div>
                    <div className="more-wording">
                        <p className="more-title">
                            Satisfied members
                        </p>
                        <p className="more-stats">
                            6,581+
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-bottom">
                <Button btn="Explore More" />

            </div>
        </div>
      </section>
    </>
  )
}

export default About
