import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Playground from "./pages/Playground";
import { ListOfDrones } from "./pages/ListOfDrones";
import { Drone } from "./pages/Drone";

import NoPage from "./pages/NoPage";

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/playground" />} />
        <Route path="/list/drones" element={<ListOfDrones />} />
        <Route path="/drone/:droneId" element={<Drone />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/404" element={<NoPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}
