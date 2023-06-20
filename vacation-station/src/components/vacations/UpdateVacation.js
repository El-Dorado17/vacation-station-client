import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllVacationtypes, getVacationById, updateVacation } from "../managers/VacationManager";
import { getVacations } from "../managers/VacationManager";



export const UpdateVacation = () => {
const {vacationId} = useParams()
const navigate = useNavigate()
const [vacationTypes, setVacationTypes] = useState([])
const [vacation, setVacation] = useState({})
const [currentVacation, setCurrentVacation] = useState({
        id: 0,
        country: 0,
        city: "",
        vacation_type: 0,
        vacation_user: 0,
        description: "",
        number_of_people: 0,
        price: 0,
        rating: 0
})

// useEffect (()=> {
//     getVacationById(vacationId).then((res)=> {
//         setVacation(res)
//         setCurrentVacation({
//             ...currentVacation,
//            // id: parseInt(res?.vacation?.id),
//             country: parseInt(res?.country?.id),
//             city: res?.city,
//             vacation_type: parseInt(res?.vacation_type?.id),
//             vacation_user: parseInt(res?.vacation_user?.id),
//             description: res?.description,
//             number_of_people: res?.number_of_people,
//             price: res?.price,
//             rating:res?.rating,
//         })
//     })
// }, [vacationId, currentVacation])

useEffect(()=> {
    getVacations().then((data)=> setVacation(data))
}, [])

const changeVacationState = (evt) => {
    const {name, value} = evt.target
    setCurrentVacation((prevState)=> ({...prevState, [name]: value }))
}


return (
    <form className="vacationForm">
        <h2 className="vacationForm_description"> Updating Vacation: {vacationId} </h2>

        <fieldset>
            <div className="form-group">
                <label htmlFor="country"> Country </label>
                <input
                    type="number"
                    name="country"
                    required
                    autoFocus
                    className="form-control"
                    value={currentVacation.country}
                    placeholder={vacation.country}
                    onChange={changeVacationState}
                    />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="city"> City </label>
                <input
                    type="text"
                    name="city"
                    required
                    autoFocus
                    className="form-control"
                    value={currentVacation.city}
                    placeholder={vacation.city}
                    onChange={changeVacationState}
                    />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="vacation_type"> vacation_type </label>
                <input
                    type="number"
                    name="vacation_type"
                    required
                    autoFocus
                    className="form-control"
                    value={currentVacation.vacation_type}
                    placeholder={vacation.vacation_type}
                    onChange={changeVacationState}
                    />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="description"> Description </label>
                <input
                    type="text"
                    name="description"
                    required
                    autoFocus
                    className="form-control"
                    value={currentVacation.description}
                    placeholder={vacation.description}
                    onChange={changeVacationState}
                    />
            </div>
        </fieldset>


        <fieldset>
            <div className="form-group">
                <label htmlFor="number_of_people"> Number of People </label>
                <input
                    type="number"
                    name="number_of_people"
                    required
                    autoFocus
                    className="form-control"
                    value={currentVacation.number_of_people}
                    placeholder={vacation.number_of_people}
                    onChange={changeVacationState}
                    />
            </div>
        </fieldset>


        <fieldset>
            <div className="form-group">
                <label htmlFor="price"> Price </label>
                <input
                    type="number"
                    name="price"
                    required
                    autoFocus
                    className="form-control"
                    value={currentVacation.price}
                    placeholder={vacation.price}
                    onChange={changeVacationState}
                    />
            </div>
        </fieldset>


        <fieldset>
            <div className="form-group">
                <label htmlFor="rating"> Rating </label>
                <input
                    type="number"
                    name="rating"
                    required
                    autoFocus
                    className="form-control"
                    value={currentVacation.rating}
                    placeholder={vacation.rating}
                    onChange={changeVacationState}
                    />
            </div>
        </fieldset>
        
    <button type="submit"
            onClick={evt => {
                // Prevent form from being submitted
                evt.preventDefault()

                const vacation = {
                    id: currentVacation.id,
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
                updateVacation(vacation.id, vacation) //!vacation 
                    .then(() => navigate("/uservacations"))
            }}
            className="btn btn-primary">Update
            </button>
</form>
)
}