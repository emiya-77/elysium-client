
import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../../layout/Root";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import FoodMenu from "../../pages/FoodMenu/FoodMenu/FoodMenu";
import AddItem from "../../pages/AddItem/AddItem";
import FoodDetails from "../../pages/FoodDetails/FoodDetails";
import PurchasePage from "../../pages/PurchasePage/PurchasePage";
import BlogPage from "../../pages/BlogPage/BlogPage";
import MyOrder from "../../pages/MyOrder/MyOrder/MyOrder";
import MyFoodItem from "../../pages/MyFoodItem/MyFoodItem/MyFoodItem";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/food-menu',
                element: <FoodMenu></FoodMenu>
            },
            {
                path: '/add-item',
                element: <AddItem></AddItem>
            },
            {
                path: '/food-details/:id',
                element: <FoodDetails></FoodDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/food-menu/${params.id}`)
            },
            {
                path: '/purchase/:id',
                element: <PurchasePage></PurchasePage>,
                loader: ({ params }) => fetch(`http://localhost:5000/food-menu/${params.id}`)
            },
            {
                path: '/my-order',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/my-food',
                element: <MyFoodItem></MyFoodItem>
            }
        ]
    }
])

export default router;
