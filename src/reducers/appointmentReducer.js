const initialState = {
  doctor: {},
  user: {},
}

export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DOCTOR":
      return {
        ...state,
        doctor: action.doctor,
      }
    case "ADD_USER":
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}
