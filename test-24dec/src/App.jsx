import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import UserCardPage from "./modules/user-card/UserCardPage";
import UseEffectAndLifecycle from "./modules/use-effect-and-lifecycle/UseEffectAndLifecycle";
import StateManagementCounter from "./modules/state-management-counter/StateManagementCounter";
import EventHandlingAndForm from "./modules/event-handling-and-form/EventHandlingAndForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index />

        <Route
          path="event-handling-and-form"
          element={<EventHandlingAndForm />}
        />
        <Route
          path="state-management-counter"
          element={<StateManagementCounter />}
        />
        <Route
          path="use-effect-and-lifecycle"
          element={<UseEffectAndLifecycle />}
        />
        <Route path="user-card" element={<UserCardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
