import { useMemo, useState } from "react";
import { TicketsContext } from "./contexts/TicketsContext";
import { useGetTickets } from "./hooks/ticket";

export function TicketsProvider({ children }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filter = useMemo(() => {
    return status ? { status } : null;
  }, [status]);

  const ticketsState = useGetTickets({
    search,
    filter,
  });

  const value = {
    // state
    search,
    status,
    ticketsState,

    // actions
    setSearch,
    setStatus,
    clearFilters: () => {
      setSearch("");
      setStatus("");
    },
  };

  return (
    <TicketsContext.Provider value={value}>{children}</TicketsContext.Provider>
  );
}
