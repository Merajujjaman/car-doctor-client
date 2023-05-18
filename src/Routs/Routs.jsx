import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/BookingsData/Bookings";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'checkout/:id',
                element: <PrivateRouts><Checkout></Checkout></PrivateRouts>,
                loader: ({ params }) => fetch(`https://car-doctor-server-alpha-seven.vercel.app/services/${params.id}`)
            },
            {
                path: 'bookings',
                element: <PrivateRouts>
                    <Bookings></Bookings>
                </PrivateRouts>
            }
        ]
    },
]);

export default router;