import { useContext, useEffect, useState } from "react";
import { getTickets } from "@/lib/api/ticket";
import { useDebounce } from "@/hooks/useDebounce";
import { TicketsContext } from "../contexts/TicketsContext";

export function useGetTickets({ search, filter }) {
  const debouncedSearch = useDebounce(search, 400);
  const debouncedFilter = useDebounce(filter, 400);

  const [state, setState] = useState({
    status: "loading",
    data: null,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setState({ status: "loading", data: null, error: null });

      try {
        const data = await getTickets({
          search: debouncedSearch,
          filter: debouncedFilter,
        });

        if (!cancelled) {
          setState({ status: "success", data, error: null });
        }
      } catch (e) {
        if (!cancelled) {
          setState({ status: "error", data: null, error: e });
        }
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [debouncedSearch, debouncedFilter]);

  return state;
}

export function useTickets() {
  const ctx = useContext(TicketsContext);
  if (!ctx) {
    throw new Error("useTickets must be used within TicketsProvider");
  }
  return ctx;
}
