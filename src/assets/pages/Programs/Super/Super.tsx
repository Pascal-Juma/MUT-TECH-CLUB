import Button from '../../../components/Button/Button'
import './Super.css'

function Super() {
  return (
    <>
      <section className="super-section">
        <div className="super-container">
            <h4 className="super-heading">
                Our Listed Programs
            </h4>
            <h3 className="super-message">
            Your Tech Journey Starts Here.
            </h3>
            <Button btn="Enroll Now" />
        </div>
        <div className="programs-list-container">
            <h3 className="club-branding">
                Murang'a University Tech Club
            </h3>
            <h4 className="list-discount">
            Level Up for Less, Limited-Time Offer!
            </h4>
            <p className="list-message">
            Dicta suscipit est corporis aperiam enim? Sequi non suscipit ipsum reiciendis quisquam dolorem.
            </p>
            <ol className="list-super">
                <li>Cyber Security</li>
                <li>Web Development</li>
                <li>App Development</li>
                <li>Cloud Engineering ...</li>
            </ol>
        </div>
      </section>
    </>
  )
}

export default Super
