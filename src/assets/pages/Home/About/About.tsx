import './About.css'
import aboutLeft from '../../../images/about-left.jpg'
import aboutRight from '../../../images/about-right.jpg'
import Intro from '../../../components/Intro/Intro'
import Button from '../../../components/Button/Button'

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
                <Intro heading="About Us" sub="We Strive To Offer Intelligent Business Solutions" color="red" />
            </div>
            <div className="about-values">
                <p className="about-paragragh">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt qui libero sit nisi, in ut voluptates ipsum eos nesciunt quidem reprehenderit? Et, nesciunt qui optio distinctio nobis a veniam odio culpa!
                </p>
            </div>
            <div className="about-more">
                <div className="more-left">
                    introduction
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
                    icon
                    <div className="more-wording">
                        <p className="more-title">
                            24/7 call Support
                        </p>
                        <p className="more-paragragh">
                            Consectetur  veniam adipisicing Voluptas aperiam.
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
