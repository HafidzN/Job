import {
    RETRIEVE_JOBS
  } from "../actions/types"

const initialState = []

function jobReducer(jobState = initialState, action) {
    const { type, payload } = action
    switch (type) {
      case RETRIEVE_JOBS:
        return payload
      default:
        return jobState
    }
  };
  export default jobReducer
