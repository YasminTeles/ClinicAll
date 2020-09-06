import { ADD_DOCTOR, ADD_USER } from "./actionTypes"

export const addDoctor = (value) => ({
  type: ADD_DOCTOR,
  doctor: value,
})

export const addUser = (value) => ({
  type: ADD_USER,
  user: value,
})
