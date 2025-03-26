import Button from '../../../components/Button/Button'
import './Heroine.css'

function Heroine() {
  return (
    <>
      <section className="heroine-section">
        <div className="heroine-container">
            <h2 className="heroine-tagline">
                Learn. Innovate. Reinvent. 
            </h2>
            <p className="heroine-pararagh">
            Power up your skills with Expert-Led sessions!
            </p>
            <div className="heroine-cta">
                <Button btn="Join Us"/>
            </div>
        </div>
      </section>
    </>
  )
}

export default Heroine
