import "./App.css";

import Navbar from "./component/Navbar";

import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Projects from "./pages/Projects.jsx";


const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Index />
      </>
    ),
  },

  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },

   {
    path: "/service",
    element: (
      <>
        <Navbar />
        <Service/>
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
      <Navbar />
      <Projects/>
      </>
    )
  },

]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;