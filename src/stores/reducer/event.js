const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_EVENTS_PENDING": {
      return {
        ...state,
        data: {},
      };
    }
    case "GET_ALL_EVENTS_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
      };
    }
    case "GET_ALL_EVENTS_REJECTED": {
      return {
        ...state,
        data: {},
      };
    }
    case "CREATE_EVENT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "CREATE_EVENT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "CREATE_EVENT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    }
    case "UPDATE_EVENT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "UPDATE_EVENT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "UPDATE_EVENT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    }
    case "DELETE_EVENT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    }
    case "DELETE_EVENT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "DELETE_EVENT_REJECTED": {
      return {
        ...state,
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

export default events;
