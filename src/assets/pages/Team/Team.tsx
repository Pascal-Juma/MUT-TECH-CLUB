import Header from '../Home/Header/Header'
import Banner from './Banner/Banner'
import './Team.css'
import Lead from './Lead/Lead'
import Footer from '../../components/Footer/Footer'

function Team() {
  return (
    <>
    <Header />
    <Banner />
    <section className="leaders-section">
    <Lead />
    </section>
    <Footer />
    </>
  )
}

export default Team
