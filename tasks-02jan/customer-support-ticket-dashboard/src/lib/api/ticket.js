import { wait } from "@/utils/time";

const TICKETS = [
  {
    id: 1,
    subject: "Ticket 1",
    user: "jane",
    description: "Ticket 1's description",
    status: "received",
  },

  {
    id: 2,
    subject: "Ticket 2",
    user: "john",
    description: "Ticket 2's description",
    status: "in_progress",
  },

  {
    id: 3,
    subject: "Ticket 3",
    user: "sadie",
    description: "Ticket 3's description",
    status: "completed",
  },
];

export async function getTickets({ search, filter }) {
  await wait(500);

  return TICKETS.filter((t) => {
    let isGood = true;

    if (search) {
      const normalizedSearch = search.toLowerCase();
      isGood =
        (isGood && t.subject.toLowerCase().includes(normalizedSearch)) ||
        t.user.toLowerCase().includes(normalizedSearch);
    }

    if (filter && filter.status) {
      isGood = isGood && t.status === filter.status;
    }

    return isGood;
  });
}
