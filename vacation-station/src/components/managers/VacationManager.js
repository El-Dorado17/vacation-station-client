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

export const getUserVacations = () => {
    let token = getToken()
    return fetch(`http://localhost:8000/uservacations`, {
        headers: {
            "Authorization": `Token ${token}`
        }
    })
        .then(res => res.json())
}

export const createVacation = (vacation) => {
    let token = getToken()
    return fetch("http://localhost:8000/vacations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Token ${token}`
        },
        body: JSON.stringify(vacation)
    })
        .then(response => response.json())
}

export const updateVacation = (updatedVacation) => {
    return fetch(`http://localhost:8000/vacations/${updatedVacation.id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${getToken()}`
        },
        body: JSON.stringify(updatedVacation)
    })
    .then(res => {
        if (!res.ok) {
        throw Error(res.statusText);
        }
        return res.json();
    })
    .catch(error => console.log(error));
};

export const deleteVacation = (id) => {
    return fetch(`http://localhost:8000/vacations/${id}`, {
        method: "DELETE",
        headers: {
        Authorization: `Token ${getToken()}`
        }
    }
    )
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

export const getVacationById = (id) => {
    return fetch(`http://localhost:8000/vacations/${id}`, {
      headers: {
        Authorization: `Token ${getToken()}`
      }
    })
      .then(res => res.json())
  }


export const getAllVacationtypes = () => {
  return fetch("http://localhost:8000/vacationtypes", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}


//#Localhost:8000/vacations?user=${userId}


export const getCountries = () => {
    let token = getToken()
    return fetch(`http://localhost:8000/countries`, {
        headers: {
            "Authorization": `Token ${token}`
        }
    })
        .then(res => res.json())
}