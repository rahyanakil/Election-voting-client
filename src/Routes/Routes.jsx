import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Candidates from "../Pages/Candidates/Candidates";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/candidates',
          element:<Candidates></Candidates>
        },
      ]
    },
  ]);

  export default router;