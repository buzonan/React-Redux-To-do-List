import api from './api'

export const getAllTaskList = () => {
    return api.get('/api/todos')
}

export const addNewTask = (text) => {
    return api.post('/api/todos', {text})
}

export const deleteTask = (id) => {
    return api.delete(`/api/todos/${id}`)
}

export const toggleTask = (id, taskStatus) => {
    return api.put(`/api/todos/${id}`, {
        done: !taskStatus
    })
}