import http from '../http-common.js'

const getListJobs = () => {
    return http.get(`/fakeJob`)
}
        
const Services = {
    getListJobs
}

export default Services