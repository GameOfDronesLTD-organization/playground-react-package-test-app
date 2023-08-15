import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DroneRoutes } from "./modules/game/GameRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import { AdminRoutes } from "./modules/admin/AdminRoutes";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PlaygroundRoutes } from "./modules/playground/PlaygroundRoutes";

import { SocketContextProvider } from "god5g";
import { WebSocketContextProvider } from "god5g";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SocketContextProvider>
        <WebSocketContextProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Navigate to="/playground" />} />
              <Route path="/playground/*" element={<PlaygroundRoutes />} />
              <Route path="/admin/*" element={<AdminRoutes />} />
              <Route path="/game/*" element={<DroneRoutes />} />
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </BrowserRouter>
        </WebSocketContextProvider>
      </SocketContextProvider>
    </QueryClientProvider>
  );
};
