import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import About from "../Components/About";
import ProductAdding from "../Page/ProductAdding";
import Error from "../Err/Error";
import UpdateCoffee from "../Page/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        loader: ()=>fetch('http://localhost:5000/coffee'),
        errorElement: <Error></Error>,
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: 'add_product',
        element: <ProductAdding></ProductAdding>
    },
    {
        path:'/update_coffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
    }
])


const Router = () => {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;