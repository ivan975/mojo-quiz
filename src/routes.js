import { createBrowserRouter } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Question from "./components/Question/Question";
import Questions from "./components/Questions/Questions";
import Statistics from "./components/Statistics/Statistics";
import Main from "./layout/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                path: '/question/:questionsId',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.questionsId}`),
                element: <Questions />
            },
            {
                path: '/statistics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statistics />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    }
]);