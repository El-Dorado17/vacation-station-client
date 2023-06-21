import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserVacations } from "../managers/VacationManager.js"
import { deleteVacation } from "../managers/VacationManager.js"
//import { updateVacation } from "../managers/VacationManager.js"



export const YourVacations = () => {
    const [ vacations, setVacations ] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getUserVacations().then(data => setVacations(data))
    }, []) 


	const localVacationUser = localStorage.getItem("vacation_user_id")
    const vacationUserObject = JSON.parse(localVacationUser)

    const deleteButton = (vacationobj) => {
        return (
            <button className="DeleteButton"
            onClick={()=>{deleteV(vacationobj)
            }}>  
                DELETE
            </button>
        )
    }

    const deleteV = (vacation) => {
        deleteVacation(vacation.id).then(() => {  
            getUserVacations().then((data) => setVacations(data));
        });
    };

    return (
        <article> {
                vacations.map(vacation => {
                    return <section key={`vacation--${vacation.id}`} className="vacation_post">
                                <article>{deleteButton(vacation)} <div> </div>
                                    <div className="vacation__id"> Vacation Number: {vacation.id}</div>
                                    <div className="vacation__country"> Country: {vacation.vacation.country.name}</div>
                                    <div className="vacation__city"> City: {vacation.vacation.city} </div>
                                    <div className="vacation__vacation_type"> Vacation Type: {vacation.vacation.vacation_type.name} </div>
                                    <div className="vacation__user">Vacation User: {vacation.vacation.vacation_user.user} </div>
                                    <div className="vacation__description"> Description: {vacation.vacation.description} </div>
                                    <div className="vacation__number_of_people"> Num of ppl: {vacation.vacation.number_of_people} </div>
                                    <div className="vacation__price"> Price: {vacation.vacation.price} </div>
                                    <div className="vacation__rating"> Rating (out of 5): {vacation.vacation.rating} </div>
                                    <button className="editBttn"
                                        onClick={() => {navigate(`/updateform/${vacation.vacation.id}`)}}>Update This Vacation
                                    </button>
                                </article>
                    </section>
                })
            }</article>
    )
}