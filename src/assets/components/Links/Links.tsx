import { NavLink} from 'react-router-dom'
import './Links.css'

type linksProps = {
    to: string;
    label: string;
}
function Links({to, label}: linksProps) {
  return (
    <>
      <li className="quick-links">
        <NavLink to={to} className={({isActive}) => isActive ? "now-link" : ""}>{label}</NavLink>
      </li>
    </>
  )
}

export default Links
