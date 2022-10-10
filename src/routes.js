import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./Home/Home";
import Main from "./layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);