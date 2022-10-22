import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from "../Admin/Event/event";
import Scores from "./Score/score";
import Schedule from "./Schedule/schedule";
import Admin from "./admin_page";
import Header from "./Header";

function Dashboard() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/admin" element={<Admin />} />   
                    <Route path="/admin/events" element={<Events />} />
                    <Route path="/admin/scores" element={<Scores />} />
                    <Route path="/admin/schedule" element={<Schedule />} />
                </Routes>
            </BrowserRouter>
        </div >
    )
}

export default Dashboard;