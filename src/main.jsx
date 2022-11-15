import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import Root, {loader as rootLoader, action as rootAction} from './routes/root'
import ErrorPage from './error-page.jsx'
import Contact, {loader as contactLoader, action as contactAction} from './routes/Contact'
import Edit ,{action as editAction} from './routes/edit'
import { action as destroyAction } from "./routes/destroy";
import Index from './routes'


const router = createBrowserRouter([

    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
        action: rootAction,
        children: [
            {index:true, element: <Index/>},
            {
                path:"/contacts/:contactId",
                element:<Contact/>,
                loader: contactLoader,
                action: contactAction,
                errorElement:<ErrorPage />,
            },
            {
                path: "contacts/:contactId/edit",
                element: <Edit/>,
                loader: contactLoader,
                action: editAction,
                errorElement:<ErrorPage />,
            },
            {
                path: "contacts/:contactId/destroy",
                action: destroyAction,
                errorElement:<ErrorPage />,
                // errorElement:<div>Oops! There was an error.</div>,
            },

        ]

    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)