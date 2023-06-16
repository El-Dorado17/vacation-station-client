import { getToken } from "./TokenManager"

export const getVacations = () => {
    let token = getToken()
    return fetch("http://localhost:8000/vacations", {
        headers:{
            "Authorization": `Token ${token}`
        }
    })
        .then(response => response.json())
}

export const createVacation = (vacation) => {
    let token = getToken()
    return fetch("http://localhost:8000/vacations", {
        headers: {
            "authorization": `Token ${token}`
        }
    })
        .then(response => response.json())
}

export const getVacationTypes = () => {
    let token = getToken()
    return fetch("http://localHost:8000/vacationtypes", {
        headers: {
            "authorization": `Token ${token}`
        }
    })
        .then(response => response.json())
}
