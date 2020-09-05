import { ADD_DOCTOR, ADD_APPOINTMENT } from './actionTypes';

export const addDoctor = value => ({
  type: ADD_DOCTOR,
  doctor: value
});

export const addAppointment = value => ({
  type: ADD_APPOINTMENT,
  appointments: value
});
