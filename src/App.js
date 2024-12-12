import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/home/home";
import Courses from "./Pages/courses/courses";
import Aboutus from "./Pages/aboutus/aboutus";
import Calculate from "./Pages/calculate/page";
import Blog from './Pages/blog/blog';
import Login from './Pages/login/login';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const location = useLocation();
  const hideNavRoutes = ["/login"];

  return (
    <div className="App">
      {!hideNavRoutes.includes(location.pathname) && <NavigationBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
