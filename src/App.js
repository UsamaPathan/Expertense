import "./App.css";

import Navbar from "./component/Navbar";

import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Blogs from "./pages/Blog"
import PricingPage from "./pages/PricingPage";
import BlogDetails from "./pages/BlogDetails";



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
  {
  path: "/ProjectDetails",
  element: (
    <>
      <Navbar />
      <ProjectDetails />
    </>
  ),
},
  {
  path: "/Blog",
  element: (
    <>
      <Navbar />
      <Blogs />
      
    </>
  ),
},
 {
  path: "/Pricingpage",
  element: (
    <>
      <Navbar />
      <PricingPage />
      
    </>
  ),
}, 
 {
     path: "/blog/:blogId",
    element: (
      <>
        <Navbar />
        <BlogDetails />
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