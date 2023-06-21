import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { getVacations } from "../managers/VacationManager.js"
import { createVacation } from "../managers/VacationManager.js"
import { getVacationTypes } from "../managers/VacationManager.js"
import { getCountries } from "../managers/VacationManager.js"

export const VacationForm = () => {
    const navigate = useNavigate()
    const [vacationTypes, setVacationTypes] = useState([])
    const [countries, setCountries] = useState([])
    const [currentVacation, setCurrentVacation] = useState({
        country: 0,
        city: "",
        vacation_type: 0,
        vacation_user: 0, //get rid of this
        description: "",
        number_of_people: 0,
        price: 0,
        rating: 0
    })




    useEffect(() => {
        getVacationTypes().then((data)=>setVacationTypes(data))
    }, [])



    useEffect(() => {
        getCountries().then((data)=>setCountries(data))
    }, [])


    const changeVacationState = (e) => {
        const { value} = e.target
        setCurrentVacation(
            {...currentVacation,
                [e.target.name]: value
            }
        )
    }
    
    
    return (
        <form className="vacationForm">
            <h2 className="vacationForm__title">Register New Vacation</h2>

            <fieldset>
            <label htmlFor="country">Country: </label>
            <select onChange={changeVacationState} name="country">

                {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                        {country.name}
                        </option>
                        )
                    )}
                </select>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="city">City: </label>
                    <input type="text" name="city" required autoFocus className="form-control"
                    value={currentVacation.city}
                    onChange={changeVacationState}/>
                </div>
            </fieldset>

            <fieldset>
            <label htmlFor="country">Vacation Type: </label>
            <select onChange={changeVacationState} name="vacation_type">

                {vacationTypes.map((vacationType) => (
                    <option key={vacationType.id} value={vacationType.id}>
                        {vacationType.name}
                        </option>
                        )
                    )}
                </select>
            </fieldset>


            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                    value={currentVacation.description}
                    onChange={changeVacationState}/>
                </div>
            </fieldset>


            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberofpeople">number of people: </label>
                    <input type="number" name="number_of_people" required autoFocus className="form-control"
                    value={currentVacation.number_of_people}
                    onChange={changeVacationState}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="price"> Price </label>
                    <input type="number" name="price" required autoFocus className="form-control"
                    value={currentVacation.price}
                    onChange={changeVacationState}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="rating"> Rating </label>
                    <input type="number" name="rating" required autoFocus className="form-control"
                    value={currentVacation.rating}
                    onChange={changeVacationState}/>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const vacation = {
                        country: currentVacation.country,
                        city: currentVacation.city,
                        vacation_type: currentVacation.vacation_type,
                        vacation_user: currentVacation.vacation_user,
                        description: currentVacation.description,
                        number_of_people: currentVacation.number_of_people,
                        price: currentVacation.price,
                        rating: currentVacation.rating
                    }

                    // Send POST request to your API
                    createVacation(vacation)
                        .then(() => navigate("/"))
                }}
                className="btn btn-primary"> Create</button>
        </form>
    )
}