import './Hero.css'
import Button from '../../../components/Button/Button'

function Hero() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-wrap="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" data-bs-interval="3000">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="/src/assets/images/hero-a.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <p className="hero-title">Murang'a Univeristy Tech Club</p>
                            <h2 className="hero-tagline">Together we'll explore new things</h2>
                            <p className="hero-mission">We believe everyone deserves the chance to advance using technology.</p>
                            <Button btn="Register Now" />
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/src/assets/images/hero-b.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <p className="hero-title">Murang'a Univeristy Tech Club</p>
                            <h2 className="hero-tagline">Fueling passion for tech and innovation.</h2>
                            <p className="hero-mission">Advancing the world, one innovation at a time, with creativity and passion.</p>
                            <Button btn="Register Now" />
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src="/src/assets/images/hero-c.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                             <p className="hero-title">Murang'a Univeristy Tech Club</p>
                            <h2 className="hero-tagline">Innovation starts with us together.</h2>
                            <p className="hero-mission">Creating limitless possibilities through tech, transforming lives everywhere we go.</p>
                            <Button btn="Register Now" />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Hero
