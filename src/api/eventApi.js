import API from "./api";

export const fetchEvents = () => API.get("/events");
export const fetchEventDetails = (id) => API.get(`/events/${id}`);
export const postRSVP = (eventId, status) => API.post(`/events/${eventId}/rsvp`, { status });
export const votePoll = (eventId, pollId) => API.post(`/events/${eventId}/poll/${pollId}/vote`);
export const addExpense = (eventId, description, amount) => API.post(`/events/${eventId}/expense`, { description, amount });
