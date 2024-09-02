import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Alert from "./components/Alert/Alert";
import Checkout from "./components/Checkout/Checkout";
import SaveRemove from "./components/SaveRemove/SaveRemove";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <Home /> },
        { path: "/:productID", element: <ProductDetails /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
    { path: "signin", element: <Login /> },
    { path: "checkout", element: <Checkout /> },
  ]);

  return (
    <>
      <SaveRemove />
      <Alert />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
