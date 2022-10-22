import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import SingleEvent from './pages/Events/SingleEvent';
import Scores from './pages/Scores/Scores';
import Schedule from './pages/Schedule/Schedule';
import Login from './pages/Login/Login';
import Error from './pages/Error';

import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path='/events/:id' element={<SingleEvent />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
