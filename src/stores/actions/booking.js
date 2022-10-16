import axios from "../../utils/axios";

export const getBookingByUserId = (userId) => {
  return {
    type: "GET_BOOOKING_BY_USER_ID",
    payload: axios.get(`booking/${userId}`),
  };
};

export const createBooking = (data) => {
  return {
    type: "CREATE_BOOKING",
    payload: axios.post("/booking", data),
  };
};
