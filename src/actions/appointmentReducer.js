import { ADD_DOCTOR, ADD_USER, ADD_DOCTORS } from "./actionTypes"

const initialState = {
  doctor: {},
  doctors: [],
  user: {},
}
export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCTOR:
      return {
        ...state,
        doctor: action.doctor,
      }
    case ADD_DOCTORS:
      const newDoctors = state.doctors
      newDoctors.push(action.doctors)
      return {
        ...state,
        doctors: newDoctors,
      }
    case ADD_USER:
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}
