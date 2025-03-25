import Intro from '../../../components/Intro/Intro'
import Button from '../../../components/Button/Button'
import enlist from '../../../images/enroll.jpg'
import './Enroll.css'

function Enroll() {
  return (
    <>
      <section className="enroll-section">
        <div className="enroll-image">
            <img src={enlist} alt="enlist a program" />
        </div>
        <div className="enroll-inputs">
            <div className="enroll-intro">
            <Intro heading="Enroll Today" sub="Join our specialized programs to gain hands-on experience, master in-demand skills, and unlock endless opportunities." color="grey" />
            </div>
            <form className="enroll-form">
                <input type="text"  className="form-input" placeholder="Please Input Your Full Name" required />
                <input type="email" className="form-input" placeholder="Your Email Address" required />
                <input type="text" className="form-input" placeholder="Current Course of Study" required />
                <input type="number" className="form-input" placeholder="Current Year of Study" required min="0" max="5"/>
                <label htmlFor="interested-programs" className="programs-label">Select a Program of Interest:</label>
                <select id="interested-programs" className="select-input">
                    <option value="web-development">Web Development</option>
                    <option value="app-development">App Development</option>
                    <option value="cloud-engineering">Cloud Engineering</option>
                    <option value="cyber-security">Cyber Security</option>
                    <option value="databases">Database Systems</option>
                    <option value="ui-ux">UI/UX Design</option>
                </select>
            </form>
            <div className="enroll-cta">            <Button btn="Get Started"/></div>
        </div>
      </section>
    </>
  )
}

export default Enroll
