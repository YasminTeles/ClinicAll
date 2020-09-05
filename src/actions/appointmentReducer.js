import { ADD_DOCTOR, ADD_APPOINTMENT } from './actionTypes';
const initialState = {
  doctor: {},
  appointments: []
};
export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCTOR:
      return {
        ...state,
        doctor: action.doctor
      };
    case ADD_APPOINTMENT:
      return {
        ...state,
        appointments: action.appointments
      };
    default:
      return state;
  }
};
