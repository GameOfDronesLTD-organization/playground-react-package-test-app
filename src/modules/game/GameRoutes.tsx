import { Route, Routes } from "react-router-dom";
import { CarControlPage } from "./pages/CarControlPage";
import { TankControlPage } from "./pages/TankControlPage";
import { RCControlPage } from "./pages/RCControlPage";

export const DroneRoutes = () => {
  return (
    <Routes>
      <Route path="/car/:id" element={<CarControlPage />} />
      <Route path="/tank/:id" element={<TankControlPage />} />
      <Route path="/rc/:id" element={<RCControlPage />} />
    </Routes>
  );
};
