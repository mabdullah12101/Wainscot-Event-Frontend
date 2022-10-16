const initialState = {
  data: {},
  urlMidtrans: "",
  isLoading: false,
  isError: false,
  message: "",
};

const bookings = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_BOOKING_PENDING": {
      return {
        ...state,
        urlMidtrans: "",
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "CREATE_BOOKING_FULFILLED": {
      return {
        ...state,
        urlMidtrans: action.payload.data.data.redirect_url,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "CREATE_BOOKING_REJECTED": {
      return {
        ...state,
        urlMidtrans: "",
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    }
    default: {
      return state;
    }
  }
};

export default bookings;
