import axios from 'axios';

export const statCreate = username => {
    return axios.post('/api/stat/new', username)
}

export const statFetch = userID => {
    return axios.get(`/api/stat/${userID}`)
}