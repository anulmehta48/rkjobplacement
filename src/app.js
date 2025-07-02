import React from "react";
import REACTDOM from "react-dom/client";
import Header from "./components/Header" ;
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import WhatsApp from "./components/WhatsApp";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <WhatsApp/>
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const root = REACTDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
