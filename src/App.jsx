import { Route, Routes, Navigate } from "react-router-dom";
import Store from "./components/Store";
import Detailes from "./components/Detailes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="shadow-lg bg-white fixed top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<Detailes />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
