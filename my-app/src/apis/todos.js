import api from './api'

export const getAllTaskList = () => {
    return api.get('/api/todos')
}