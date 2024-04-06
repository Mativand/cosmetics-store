import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {Suspense} from "react";
import {App} from "@/app/App";
import {Admin} from "@/pages/admin";
import {Product} from "@/pages/product";
import {Main} from "@/pages/main";
import {Cart} from "@/pages/cart";
import {Auth} from "@/pages/auth";

let childrenRoutes = [
    {
        path: '/',
        element: <Suspense fallback={'...loading'}><Main/></Suspense>
    },
    {
        path: 'product',
        element: <Suspense fallback={'...loading'}><Product/></Suspense>
    },
    {
        path: 'auth',
        element: <Suspense fallback={'...loading'}><Auth/></Suspense>
    },
    {
        path: 'admin',
        element: <Suspense fallback={'...loading'}><Admin/></Suspense>
    },
    {
        path: 'cart',
        element: <Suspense fallback={'...loading'}><Cart/></Suspense>
    },
    {
        path: 'product',
        element: <Suspense fallback={'...loading'}><Product/></Suspense>
    }
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: 'error',
        children: childrenRoutes
    },
]);


const root = document.getElementById('root');

if (!root) {
    throw new Error('Root element is not found')
}

const container = createRoot(root);
container.render(
    <RouterProvider router={router}/>
)