import './Header.css'
import { NavLink } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import logoImg from '../../../images/logo.png'

const navLinks = [
    {to: '/', label: "home"},
    {to: '/team', label: "team"},
    {to: '/tracks', label: "tracks"},
    {to: '/events', label: "events"},
]

export default function Header() {
  return (
    <>
    <header className="header">
        <div className="header-logo">
            <img src={logoImg} alt="logo Image" />
        </div>
        <HeaderNavigation />
        <div className="nav-btn">
        <Button btn="Explore Courses" />
        </div>
    </header>
    </>
  )
}

type linkProps = {
    to: string;
    label: string;
}

function NavigationLink({to, label}: linkProps){
    return(
        <>
        <li className="nav-links-list">
        <NavLink to={to} className={({isActive}) => (isActive ? "active-link" : "")}>{label}</NavLink>
        </li>
        </>
    )
}

function HeaderNavigation(){
    return(
        <>
        <div className="header-navigation">
        <nav className="header-nav">
            <ol className="header-nav-list">
                {
                    navLinks.map(navLink => 
                        <NavigationLink to={navLink.to} key={navLink.label} label={navLink.label} />
                    )
                }
            </ol>
        </nav>
        </div>
        </>
    )
}