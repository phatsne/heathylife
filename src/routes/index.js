// import { HomePage } from "../pages/HomePage/homePage";
// import { ProductPage } from "../pages/ProductPage/productPage";
// import { OrderPage } from "../pages/OrderPage/orderPage";
// import { notfoundPage } from "../pages/NotFoundPage/notfoundPage";
// import { TypeProductPage } from "../pages/TypeProductPage/TypeProductPage";
// import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
// import SignInPage from "../pages/SignInPage/SignInPage";
// import SignUpPage from "../pages/SignUpPage/SignUpPage";
// import AdminPage from "../pages/Admin/AdminPage";

import home from "../Pages/home/home";
import courses from "../Pages/courses/courses";
import blog from "../Pages/blog/blog";
import AboutUs from "../Pages/aboutus/aboutus";
import Calculate from "../Pages/calculate/page";
import login from "../Pages/login/login"
// import Register from "../Pages/register/register";

const routes = [
    {
        path: '/',
        page: home,
        isShowHeader: true,
    },
    {
        path: '/courses',
        page: courses,
        isShowHeader: true,
    },
    {
        path: '/blog',
        page: blog,
        isShowHeader: true,
    },
    {
        path: '/about-us',
        page: AboutUs,
        isShowHeader: true,
    },
    {
        path: '/calculate',
        page: Calculate,
        isShowHeader: true,
    },
    {
        path: '/login',
        page: login,
        isShowHeader: true,
    },
    // {
    //     path: '/register',
    //     page: Register,
    //     isShowHeader: true,
    // },
    {
        path: '*',
        page: notfoundPage,
    },
]

export default routes;