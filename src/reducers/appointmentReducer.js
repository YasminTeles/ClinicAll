const initialState = {
  doctor: {},
  user: {},
  doctors: [],
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
    case "ADD_DOCTORS":
      const newDoctors = state.doctors
      newDoctors.push(action.doctors)
      return {
        ...state,
        doctors: newDoctors,
      }
    default:
      return state
  }
}
