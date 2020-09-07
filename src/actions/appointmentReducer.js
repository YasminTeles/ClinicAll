import {
  ADD_DOCTOR, ADD_USER, ADD_DOCTORS,
  ADD_KEY_WORDS, ADD_PAIN, ADD_HUMAN_BODY, ADD_ANNOTATIONS,
} from "./actionTypes"

const initialState = {
  doctor: {},
  doctors: [],
  user: {},
  keyWords: "",
  pain: 0,
  humanBody: [],
  annotations: [],
}

// eslint-disable-next-line import/prefer-default-export
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
    case ADD_KEY_WORDS:
      const legendFull = state.keyWords
      return {
        ...state,
        keyWords: legendFull.concat(action.keyWords),
      }
    case ADD_ANNOTATIONS:
      const newAnnotations = state.annotations
      newAnnotations.push(action.annotation)
      return {
        ...state,
        annotations: newAnnotations,
      }
    case ADD_PAIN:
      return {
        ...state,
        pain: action.pain,
      }
    case ADD_HUMAN_BODY:
      const newHumanBody = state.humanBody
      newHumanBody.push(action.body)
      return {
        ...state,
        humanBody: newHumanBody,
      }

    default:
      return state
  }
}
