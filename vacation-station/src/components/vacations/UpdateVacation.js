

/*
A react route that renders a form //? Imported to AppViews
The form should be filled out with the existing data
When changes are made in the form the state of the component updates
When the submit button is clicked, it should make a PUT request to the correct resource with the updated data in the body
After the fetch call is resolved, the page should route to the game/event’s detail page
*/


import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllVacationtypes, getVacationById, updateVacation } from "../../managers/VacationManager";
import { getVacations } from "../managers/VacationManager";

export const UpdateVacation = () => {
const {vacationId} = useParams()
const navigate = useNavigate()
const [vacationTypes, setVacationTypes] = useState([])
const [vacation, setVacation] = useState([])
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

useEffect (()=> {
    getVacationById(vacationId).then((res)=> {
        setVacation(res)
        setCurrentVacation({
            ...currentVacation,
            title: res?.title,
            maker: res?.maker,
            number_of_players: res?.number_of_players,
            skill_level: res?.skill_level,
            game_type: parseInt(res?.game_type?.id)
        })
    })
}, [vacationId, currentVacation])

useEffect(()=> {
    getAllVacationtypes().then((data)=> setVacationTypes(data))
}, [])

const changeVacationState = (evt) => {
    const {name, value} = evt.target
    setCurrentVacation({ ...currentVacation, [evt.target.name]: value })
}


return (
    <form className="vacationForm">
        <h2 className="vacationForm_description"> Update Vacation</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title"> Title </label>
                <input
                    type="text"
                    name="title"
                    required
                    autoFocus
                    className="form-control"
                    value={currentVacation.title}
                    placeholder={vacation.title}
                    onChange={changeVacationState}
                    />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="maker"> Maker </label>
                <input
                    type="text"
                    name="maker"
                    required
                    autoFocus
                    className="form-control"
                    value={currentGame.maker}
                    placeholder={game.maker}
                    onChange={changeGameState}
                    />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="number_of_players"> Number of Players </label>
                <input
                    type="text"
                    name="number_of_players"
                    required
                    autoFocus
                    className="form-control"
                    value={currentGame.number_of_players}
                    placeholder={game.number_of_players}
                    onChange={changeGameState}
                    />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="game_type"> Game Type </label>
                <select name="game_type" onChange={changeGameState}>
                    <option defaultValue={game?.game_type?.id}> {game?.game_type?.label} </option>
                    {gameTypes.map((game_type)=> (
                        <option key={game_type.id} value={game_type.id}>
                            {game_type.label}
                        </option>
                    ))}


                </select>
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
                UpdateVacation(vacation, vacationId)
                    .then(() => navigate("/vacations"))
            }}
            className="btn btn-primary">Update Vacation
            </button>
</form>
)


}