import { Link, NavLink } from 'react-router-dom'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          <div className="logo">
            <Link to="/" className='brand'>CRESENDO</Link>
          </div>

          <nav className="nav nav-pills">

            <NavLink to='/'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Home</NavLink>
            <NavLink to="events"
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Events</NavLink>
            <NavLink to="scores"
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Scores</NavLink>
            <NavLink to="schedule"
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Schedule</NavLink>
            <NavLink to="login"
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Login</NavLink>
          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header
