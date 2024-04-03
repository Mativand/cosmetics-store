import {createRoot} from "react-dom/client";
import {App} from "@/app/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {About} from "@/pages/about";
import {Contacts} from "@/pages/contacts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: 'error',
        children: [
            {
                path: 'about',
                element: <Suspense fallback={'...loading'}><About/></Suspense>
            },
            {
                path: 'contacts',
                element: <Suspense fallback={'...loading'}><Contacts/></Suspense>
            }
        ]
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