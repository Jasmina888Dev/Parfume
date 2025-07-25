import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";
import Admin from "./components/pages/admin/admin";
import Home from "./components/pages/home/home";
import Product from "./components/pages/product/product";
import Basket from "./components/pages/basket/basket";
import Money from "./components/pages/money/money";
import Thank from "./components/pages/thank/thank";
import Password from "./components/pages/password/password";
import Favorite from "./components/pages/favorite/favorite";
import About from "./components/pages/about/about";

function App() {
  let route = [
    {
      id: 1,
      link: "/",
      element: <Home />,
    },
    {
      id: 2,
      link: "/admin",
      element: <Admin />,
    },
    {
      id: 3,
      link: "/basket",
      element: <Basket />,
    },
    {
      id: 4,
      link: "/favorite",
      element: <Favorite />,
    },
    {
      id: 5,
      link: "/product",
      element: <Product />,
    },
    {
      id: 6,
      link: "/money",
      element: <Money />,
    },
    {
      id: 7,
      link: "/thank",
      element: <Thank />,
    },
    {
      id: 8,
      link: "/password",
      element: <Password />,
    },
    {
      id: 9,
      link: "/about",
      element: <About />,
    },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        {route.map((el) => (
          <Route path={el.link} element={el.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
