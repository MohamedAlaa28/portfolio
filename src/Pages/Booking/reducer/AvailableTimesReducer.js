export const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return action.times;
      default:
        return state;
    }
  };