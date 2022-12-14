import axios from "../../utils/axios";

export const getAll = () => {
  return {
    type: "GET_ALL",
    payload: axios.get("/event/getall"),
  };
};

export const getAllEvents = (page, limit = 4) => {
  return {
    type: "GET_ALL_EVENTS",
    payload: axios.get(`/event?page=${page}&limit=${limit}`),
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
    type: "DELETE_EVENT",
    payload: axios.delete(`/event/${eventId}`),
  };
};
