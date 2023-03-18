import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OrderNow from "./pages/OrderNow";
import OrderPage from "./pages/OrderPage";
import MenuPage from "./pages/MenuPage";
import Cart from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/ordernow" element={<OrderNow />} />
            <Route path="/ordernow/:id" element={<MenuPage />} />
            <Route path="/order/:id" element={<OrderPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
