import "./App.css";

import Navbar from "./component/Navbar";

import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Service from ".//pages/Servics.jsx"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


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

]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;