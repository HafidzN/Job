import { 
    RETRIEVE_JOBS,
    RETRIEVE_JOB,
    CREATE_JOB,
    UPDATE_JOB
} from './types'
import Services from "../services/index.js"
import db from '../db.json'

export const getListJobs = () => async (dispatch) => {
    try {
        const res = await Services.getListJobs()
        dispatch({
          type: RETRIEVE_JOBS,
          payload: res?.data ?? db.fakeJob,
        })
      } catch (err) {
        dispatch({
          type: RETRIEVE_JOBS,
          payload: db.fakeJob,
        })
      }
}   

export const createJob = (payload) => async (dispatch) => {
  try {
    // const res = await Services.create(payload)
    dispatch({
      type: CREATE_JOB,
      payload: payload,
    })
    return Promise.resolve(payload)
  } catch (err) {
    return Promise.reject(err)
  }
}

export const updateJob = (payload) => async (dispatch) => {
  // const res = await Services.update(id, data)
  try {
    dispatch({
      type: UPDATE_JOB,
      payload: payload,
    })
    return Promise.resolve(payload)  
  } catch (err) {
    return Promise.reject(err)
  }
}

export const findJobById = (id) => async (dispatch) => {
  try {
    const res = await Services.findById(id)
    dispatch({
      type: RETRIEVE_JOB,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
  }
}