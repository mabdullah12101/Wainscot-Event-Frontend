import axios from "../../utils/axios";

export const getBookingByUserId = (userId) => {
  return {
    type: "GET_BOOOKING_BY_USER_ID",
    payload: axios.get(`booking/${userId}`),
  };
};
