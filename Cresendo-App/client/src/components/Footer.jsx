import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <nav className='d-flex justify-content-between align-items-center'>
          <div className="nav navpills">
            <Link to="/" className="">Home</Link>
            <Link to="/events" className="">Events</Link>
            <Link to="/scores" className="">Scores</Link>
            <Link to="/schedule" className="">Schedule</Link>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
