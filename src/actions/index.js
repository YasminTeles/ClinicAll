import {
  ADD_DOCTOR, ADD_USER, ADD_DOCTORS, ADD_KEY_WORDS,
} from "./actionTypes"

export const addDoctor = (value) => ({
  type: ADD_DOCTOR,
  doctor: value,
})

export const addUser = (value) => ({
  type: ADD_USER,
  user: value,
})

export const addDoctors = (value) => ({
  type: ADD_DOCTORS,
  doctors: value,
})

export const addLegend = (value) => ({
  type: ADD_KEY_WORDS,
  keyWords: value,
})
