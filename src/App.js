import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import KritikSaran from "./pages/KritikSaran";
import LandingPage from "./pages/LandingPage";
import NoRek from "./pages/NoRek";
import PesanPage from "./pages/PesanPage";
import RoomPage from "./pages/RoomPage";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/room/:id" element={<RoomPage />} />
              <Route path="/pesan/:id" element={<PesanPage />} />
              <Route path="/pesan/norek" element={<NoRek />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
