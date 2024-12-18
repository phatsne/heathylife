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

  // Điều kiện để ẩn NavigationBar trên trang Login
  const hideNavRoutes = ["/login"];

  return (
    <div className="App">
      {/* Chỉ hiển thị NavigationBar nếu không ở trang Login */}
      {!hideNavRoutes.includes(location.pathname) && <NavigationBar />}

      <Routes>
        {/* Đặt trang login làm trang mặc định */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />  {/* Thêm Home route nếu cần */}
      </Routes>
    </div>
  );
}

export default App;
