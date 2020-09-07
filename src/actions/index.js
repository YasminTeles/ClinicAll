import {
  ADD_DOCTOR,
  ADD_USER,
  ADD_DOCTORS,
  ADD_KEY_WORDS,
  ADD_PAIN,
  ADD_HUMAN_BODY,
  ADD_ANNOTATIONS,
} from "./actionTypes"

export const addDoctor = (value) => ({
  type: ADD_DOCTOR,
  doctor: value,
})

export const addAnnotation = (value) => ({
  type: ADD_ANNOTATIONS,
  annotation: value,
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

export const addPain = (value) => ({
  type: ADD_PAIN,
  pain: value,
})

export const addHumanBody = (value) => ({
  type: ADD_HUMAN_BODY,
  body: value,
})
