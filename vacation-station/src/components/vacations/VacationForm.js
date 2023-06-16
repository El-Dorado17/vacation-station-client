import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { getVacations } from "../managers/VacationManager.js"
import { createVacation } from "../managers/VacationManager.js"
import { getVacationTypes } from "../managers/VacationManager.js"

export const VacationForm = () => {
    const navigate = useNavigate()
    const [vacationTypes, setVacationTypes] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentVacation, setCurrentVacation] = useState({
        country: 0,
        city: "",
        vacation_type: 0,
        vacation_user: 0,
        description: "",
        number_of_people: 0,
        price: 0,
        rating: 0
    })

    useEffect(() => {
        // TODO: Get the Vacation types, then set the state
        //getVacationTypes is a fetch request, .then means it will get the data and
        // hold it until given further instruction. setGameTypes is..?
        getVacationTypes().then(setVacationTypes)
        //.then((data)=>setVacationTypes(data))
    }, [])

    const changeVacationState = (domEvent) => {
        // TODO: Complete the onChange function
        const {name, value} = domEvent.target
        setCurrentVacation(
            {...currentVacation,
                [domEvent.target.name]: value
            }
        )
    }
    /*
    const copy = {...currentVacation}
        copy.name = domEvent.target.name
        setCurrentVacation(copy)
    */

    
    return (
        <form className="vacationForm">
            <h2 className="vacationForm__title">Register New Vacation</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="country">Country: </label>
                    <input type="number" name="country" required autoFocus className="form-control"/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="city">City: </label>
                    <input type="text" name="city" required autoFocus className="form-control"/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="vacationtypeid">Vacation Type: </label>
                    <input type="number" name="vacationtypeid" required autoFocus className="form-control"/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="vacation_user">Vacation User: </label>
                    <input type="number" name="vacation_user" required autoFocus className="form-control"/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description </label>
                    <input type="text" name="description" required autoFocus className="form-control"/>
                </div>
            </fieldset>


            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberofpeople">number of people: </label>
                    <input type="number" name="numberofpeople" required autoFocus className="form-control"/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="price"> Price </label>
                    <input type="number" name="price" required autoFocus className="form-control"/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="rating"> Rating </label>
                    <input type="number" name="rating" required autoFocus className="form-control"/>
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
                        number_of_people: currentVacation.number_of_people ,
                        price: currentVacation.price,
                        rating: currentVacation.rating
                    }

                    // Send POST request to your API
                    createVacation(vacation)
                        .then(() => navigate("/"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}