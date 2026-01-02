import { useTickets } from "@/modules/tickets/hooks/ticket";

export default function TicketsPage() {
  const { search, status, setSearch, setStatus, ticketsState } = useTickets();

  const { status: fetchStatus, data, error } = ticketsState;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* left Nav */}
      <aside className="w-56 bg-white border-r px-4 py-6">
        <h2 className="text-lg font-semibold mb-6">Support</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="font-medium text-blue-600">Tickets</li>
          <li className="hover:text-blue-600 cursor-pointer">Customers</li>
          <li className="hover:text-blue-600 cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* main */}
      <div className="flex-1 flex flex-col">
        <header className="h-14 bg-white border-b px-6 flex items-center font-semibold">
          Tickets
        </header>

        <main className="flex-1 p-6">
          {/* filters */}
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by subject"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All statuses</option>
              <option value="received">Received</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* table */}
          <div className="bg-white rounded-lg border overflow-hidden">
            {fetchStatus === "loading" && (
              <div className="p-6 text-sm text-gray-500">
                Loading tickets...
              </div>
            )}

            {fetchStatus === "error" && (
              <div className="p-6 text-sm text-red-600">
                Failed to load tickets
              </div>
            )}

            {fetchStatus === "success" && (
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">ID</th>
                    <th className="px-4 py-3 text-left font-medium">Subject</th>
                    <th className="px-4 py-3 text-left font-medium">User</th>
                    <th className="px-4 py-3 text-left font-medium">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {data.length === 0 && (
                    <tr>
                      <td
                        colSpan="4"
                        className="px-4 py-6 text-center text-gray-500"
                      >
                        No tickets found
                      </td>
                    </tr>
                  )}

                  {data.map((ticket) => (
                    <tr key={ticket.id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-3">{ticket.id}</td>
                      <td className="px-4 py-3">{ticket.subject}</td>
                      <td className="px-4 py-3">{ticket.user}</td>
                      <td className="px-4 py-3 capitalize">
                        {ticket.status.replace("_", " ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
