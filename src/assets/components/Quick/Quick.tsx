import './Quick.css'
import Links from '../Links/Links'

function Quick() {
  return (
    <>
      <div className="footer-navigation">
        <ol className="footer-nav-list">
          <Links to ='/' label = "home" />
          <Links to ='/team' label= " our team" />
          <Links to = '/programs' label = "programs" />
          <Links to = '/events' label = "events" />
        </ol>
      </div>
    </>
  )
}

export default Quick
