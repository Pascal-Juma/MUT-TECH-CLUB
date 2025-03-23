import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import './Banner.css'

function Banner() {
  return (
    <>
      <section className="banner-section">
        <div className="banner-container">
            <h1 className="tagline-header">
            <MdKeyboardDoubleArrowRight /> Our Team
            </h1>
            <h2 className="tagline-message">
                United Minds, Impactful Outcomes
            </h2>
        </div>
      </section>
    </>
  )
}

export default Banner
