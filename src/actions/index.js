import { 
    RETRIEVE_JOBS
} from './types'
import Services from "../services/index.js"

export const getListJobs = (title) => async (dispatch) => {
    try {
        const res = await Services.getListJobs(title)
        dispatch({
          type: RETRIEVE_JOBS,
          payload: res.data,
        })
      } catch (err) {
        console.log(err)
      }
}   