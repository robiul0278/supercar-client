import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import SportsDetails from "../Pages/CarDetails/SportsDetails";
import TruckDetails from "../Pages/CarDetails/TruckDetails";
import PoliceCarsDetails from "../Pages/CarDetails/PoliceCarsDetails";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import Blog from "../Pages/Blog/Blog";
import AllToyDetails from "../Pages/AllToyDetails/AllToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/sports/:id',
          element: <PrivateRoute><SportsDetails></SportsDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://supercars-server.vercel.app/sports/${params.id}`)
        },
        {
          path: '/trucks/:id',
          element: <PrivateRoute><TruckDetails></TruckDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://supercars-server.vercel.app/trucks/${params.id}`)
        },
        {
          path: '/police/:id',
          element: <PrivateRoute><PoliceCarsDetails></PoliceCarsDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://supercars-server.vercel.app/police/${params.id}`)
        },
        {
          path: 'addtoys',
          element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
          path: 'alltoys',
          element: <PrivateRoute><AllToys></AllToys></PrivateRoute>
        },
        {
          path: 'alltoydetails/:id',
          element: <PrivateRoute><AllToyDetails></AllToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://supercars-server.vercel.app/toys/${params.id}`)
        },
        {
          path: 'mytoys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <UpdateToys></UpdateToys>,
          loader: ({params}) => fetch(`https://supercars-server.vercel.app/toys/${params.id}`)
        }
      ]
    },
  ]);


  export default router;