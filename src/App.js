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
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./component/ScrollToTop";


const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <>
      <ScrollToTop />
        <Navbar />
        <Index />
      </>
    ),
  },

  {
    path: "/about",
    element: (
      <>
      <ScrollToTop />

        <Navbar />
        <About />
      </>
    ),
  },

   {
    path: "/service",
    element: (
      <>
      <ScrollToTop />

        <Navbar />
        <Service/>
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
      <ScrollToTop />

      <Navbar />
      <Projects/>
      </>
    )
  },
  {
  path: "/ProjectDetails",
  element: (
    <>
      <ScrollToTop />

      <Navbar />
      <ProjectDetails />
    </>
  ),
},
  {
  path: "/Blog",
  element: (
    <>
      <ScrollToTop />

      <Navbar />
      <Blogs />
      
    </>
  ),
},
 {
  path: "/Pricingpage",
  element: (
    <>
      <ScrollToTop />

      <Navbar />
      <PricingPage />
      
    </>
  ),
}, 
 {
     path: "/blog/:blogId",
    element: (
      <>
      <ScrollToTop />

        <Navbar />
        <BlogDetails />
      </>
    ),
  },
  {
      path: "/contact",

      element : (
        <>
      <ScrollToTop />

        <Navbar />
        <ContactUs />
        </>
      )
      
    
  }


]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;