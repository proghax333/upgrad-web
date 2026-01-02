import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import TicketsPage from "@/modules/tickets/TicketsPage";
import { TicketsProvider } from "./modules/tickets/TicketsProvider";

export default function App() {
  return (
    <TicketsProvider>
      <BrowserRouter>
        <Routes>
          {/* Redirect root to tickets */}
          <Route path="/" element={<Navigate to="/tickets" replace />} />

          {/* Tickets */}
          <Route path="/tickets" element={<TicketsPage />} />

          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div className="h-screen flex items-center justify-center text-gray-500">
                Page not found
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </TicketsProvider>
  );
}
