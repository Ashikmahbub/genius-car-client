// ****router setup****
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Home/Signup/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Orders from "../Pages/Orders/Orders";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        {
            path: '/',
            element : <Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>

        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader:({params})=> fetch(`https://genius-car-client-qooo.vercel.app/services/${params.id}`)
        },
        {
          path:'/orders',
          element:<PrivateRoute><Orders></Orders></PrivateRoute>
        }
      ]

    }
  ])
  export default router;