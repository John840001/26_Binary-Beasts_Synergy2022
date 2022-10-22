import { Link, NavLink } from 'react-router-dom'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <nav className='d-flex justify-content-between align-items-center'>
          <div className="nav navpills">
            <NavLink to="/" 
            className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Home</NavLink>
            <NavLink to="/events"
            className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Events</NavLink>
            <NavLink to="/scores" 
            className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Scores</NavLink>
            <NavLink to="/schedule" 
            className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Schedule</NavLink>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
