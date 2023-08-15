import { Route, Routes } from "react-router-dom";
import { DronesListPage } from "./pages/DronesListPage";
import { DroneSettings } from "./pages/DroneSettings";
import { ConnectionsListPage } from "./pages/ConnectionsListPage";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/drones" element={<DronesListPage />} />
      <Route path="/connections" element={<ConnectionsListPage />} />
      <Route path="/drones/:id" element={<DroneSettings />} />
    </Routes>
  );
};
