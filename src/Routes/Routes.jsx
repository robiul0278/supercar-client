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
          path: "login",
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/sports/:id',
          element: <SportsDetails></SportsDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/sports/${params.id}`)
        },
        {
          path: '/trucks/:id',
          element: <TruckDetails></TruckDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/trucks/${params.id}`)
        },
        {
          path: '/police/:id',
          element: <PoliceCarsDetails></PoliceCarsDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/police/${params.id}`)
        },
        {
          path: 'addtoys',
          element: <AddToys></AddToys>
        },
        {
          path: 'alltoys',
          element: <AllToys></AllToys>
        },
        {
          path: 'mytoys',
          element: <MyToys></MyToys>
        },
        {
          path: '/update/:id',
          element: <UpdateToys></UpdateToys>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        }
      ]
    },
  ]);


  export default router;