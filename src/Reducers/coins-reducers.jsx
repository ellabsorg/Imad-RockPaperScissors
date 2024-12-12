export const INITIAL_VALUE = {
  balance: 5000,
  bet: 0,
  win: 0,
};

export const Actions = {
  HANDLE_BET: "HANDLE_BET",
  HANDLE_WIN: "HANDLE_WIN",
  HANDLE_CLEAR: "HANDLE_CLEAR",
  HANDLE_LOSE: "HANDLE_LOSE",
  HANDLE_TIE: "HANDLE_TIE",
};

export const reducerFunction = (state, action) => {
  switch (action.type) {
    case "HANDLE_BET":
      if (state.balance > 0) {
        return {
          ...state,
          balance: state.balance - 500,
          bet: state.bet + 500,
        };
      } else {
        return {
          ...state,
          balance: 0,
        };
      }
    case "HANDLE_WIN":
      return {
        ...state,
        balance: state.balance + state.bet * 3,
        win: state.win + state.bet * 3,
      };
    case "HANDLE_CLEAR":
      return {
        ...state,
        bet: 0,
      };
    case "HANDLE_LOSE":
      return state;
    case "HANDLE_TIE":
      return {
        ...state,
        balance: state.balance + state.bet,
      };
    default:
      return state;
  }
};
