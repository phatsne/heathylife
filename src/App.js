import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";
import Courses from "./Pages/courses/courses";
import Aboutus from "./Pages/aboutus/aboutus";
import Calculate from "./Pages/calculate/page";
// import Blog from './src/Pages/blog/blog';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import axios from 'axios';
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   fetchApi()
  // }, [])
  // const fetchApi = async () => {
  //   const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/all`)
  //   return res.data
  // }
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/calculate" element={<Calculate />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
