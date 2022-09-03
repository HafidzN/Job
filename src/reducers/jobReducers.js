import {
    CREATE_JOB,
    RETRIEVE_JOBS,
    UPDATE_JOB
  } from "../actions/types"

const initialState = []

function jobReducer(jobs = initialState, action) {
    const { type, payload } = action
    switch (type) {
      case CREATE_JOB:
        return [...jobs, payload]
      case RETRIEVE_JOBS:
        return payload
      case UPDATE_JOB:
        return jobs.map((job) => {
          if (job.jobVacancyCode === payload.jobVacancyCode) {
            return {
              ...job,
              applied: !job.applied
            }
          } else {
            return job
          }
        })
      default:
        return jobs
    }
  };
  export default jobReducer
