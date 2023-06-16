import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { getVacations } from "../managers/VacationManager.js"
import "./vacations.css"

export const VacationList = (props) => {
    const [ vacations, setVacations ] = useState([])

    useEffect(() => {
        getVacations().then(data => setVacations(data))
    }, []) 


    return (
        <article className="vacations">
            {
                vacations.map(vacation => {
                    return <section key={`vacation--${vacation.id}`} className="vacation_post">
                        <div className="vacation__country"> Country: {vacation.country}</div>
                        <div className="vacation__city"> City: {vacation.city} </div>
                        <div className="vacation__vacation_type"> Vacation Type: {vacation.vacation_type} </div>
                        <div className="vacation__user"> User: {vacation.user} </div>
                        <div className="vacation__description"> Description: {vacation.description} </div>
                        <div className="vacation__number_of_people"> Num of ppl: {vacation.number_of_people} </div>
                        <div className="vacation__price"> Price: {vacation.price} </div>
                        <div className="vacation__rating"> Rating (out of 5): {vacation.rating} </div>
                    </section>
                })
            }
        </article>
    )
}