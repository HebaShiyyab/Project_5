const initialState = {
  token: "",
  user: {},
};

const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TOKEN":
      console.log("payload", payload);
      return { token: payload };
    case "SET_User":
      return { user: payload };
    default:
      return state;
  }
};

export default login;

export const setToken = (token) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};
export const setUser = (user) => {
  return {
    type: "SET_User",
    payload: user,
  };
};
