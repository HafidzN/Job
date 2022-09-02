import http from '../http-common.js'

const getListJobs = (username) => {
    return http.get(`/fakeJob`)
}

const Services = {
    getListJobs
}

export default Services