import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          <div className="logo">
            <Link to="/" className='brand'>Cresendo</Link>
          </div>

          <div className="nav nav-pills">
            <Link to="/" className="">Home</Link>
            <Link to="/events" className="">Events</Link>
            <Link to="/scores" className="">Scores</Link>
            <Link to="/schedule" className="">Schedule</Link>
            <Link to="/login" className="">Login</Link>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
