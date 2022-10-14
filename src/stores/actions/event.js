import axios from "../../utils/axios";

export const getAllEvents = () => {
  return {
    type: "GET_ALL_EVENTS",
    payload: axios.get(
      "/event?page=&limit=4&search=&searchDateShow=&column=&asc="
    ),
  };
};

export const createEvent = (data) => {
  return {
    type: "CREATE_EVENT",
    payload: axios.post("/event", data),
  };
};

export const updateEvent = (data, eventId) => {
  return {
    type: "UPDATE_EVENT",
    payload: axios.patch(`/event/${eventId}`, data),
  };
};

export const deleteEvent = (eventId) => {
  return {
    type: "UPDATE_EVENT",
    payload: axios.delete(`/event/${eventId}`),
  };
};
