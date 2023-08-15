import { Route, Routes } from "react-router-dom";
import { CheckerPage } from "./pages/CheckerPage";
import { CamerasPage } from "./pages/CamerasPage";

export const PlaygroundRoutes = () => {
  return (
    <Routes>
      <Route index element={<CheckerPage />} />
      <Route path="/cameras" element={<CamerasPage />} />
    </Routes>
  );
};
