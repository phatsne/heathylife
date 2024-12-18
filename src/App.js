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
import Register from './Pages/register/register';

function App() {
  const location = useLocation();

  // Thêm "/" vào danh sách ẩn NavigationBar
  const hideNavRoutes = ["/", "/login", "/register"];

  return (
    <div className="App">
      {/* Chỉ hiển thị NavigationBar nếu không ở trang Login, Register hoặc trang gốc "/" */}
      {!hideNavRoutes.includes(location.pathname) && <NavigationBar />}

      <Routes>
        {/* Trang mặc định "/" sẽ trỏ đến trang Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
