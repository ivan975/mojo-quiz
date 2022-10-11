import { createBrowserRouter } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Main from "./layout/Main";
import Questions from "./Questions/Questions";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/questions',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <Questions />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    }
]);