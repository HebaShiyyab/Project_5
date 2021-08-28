const initState = {
  details: [],
};

const BookDetails = (state = initState, { type, payload }) => {
  switch (type) {
    case "SET_DETAILS":
      return {
        details: payload,
      };
    default:
      return initState;
  }
};

export default BookDetails;
export const setDetails = (details) => {
  return {
    type: "SET_DETAILS",
    payload: details,
  };
};
