import "./App.css";

import Navbar from "./component/Navbar";

import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";

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

]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;