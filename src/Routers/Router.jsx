import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Categoris from "../pages/Categoris/Categoris";
import NewsLayout from "../layout/NewsLayout";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import LoginLayout from "../layout/LoginLayout";
import Login from "../LoginInfo/Login";
import Register from "../LoginInfo/Register";
import PrivetRouts from "../PrivetRouts/PrivetRouts";
import Trams from "../pages/Trams&Condition/Trams";
import Errorpages from "../pages/Errorpages/Errorpages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Categoris></Categoris>,
        loader: () =>
          fetch(
            "https://news-practice-server-qmz3yybrm-mituls-projects-8bcc9346.vercel.app/news"
          ),
      },
      {
        path: "/category/:id",
        element: <Categoris></Categoris>,
        loader: ({ params }) =>
          fetch(
            `https://news-practice-server-qmz3yybrm-mituls-projects-8bcc9346.vercel.app/categoris/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,

    children: [
      {
        path: ":id",
        element: (
          <PrivetRouts>
            <NewsDetails></NewsDetails>
          </PrivetRouts>
        ),
        loader: ({ params }) =>
          fetch(
            `https://news-practice-server-qmz3yybrm-mituls-projects-8bcc9346.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,

    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "trams",
        element: <Trams />,
      },
    ],
  },
]);

export default router;
