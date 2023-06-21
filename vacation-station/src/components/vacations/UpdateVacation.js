import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getVacationById, updateVacation } from "../managers/VacationManager";
//import { getVacations } from "../managers/VacationManager";
import { getVacationTypes } from "../managers/VacationManager.js"
import { getCountries } from "../managers/VacationManager.js"


export const UpdateVacation = () => {
const {vacationId} = useParams()
const navigate = useNavigate()
const [vacationTypes, setVacationTypes] = useState([])
const [countries, setCountries] = useState([])
const [vacation, setVacation] = useState({})
const [currentVacation, setCurrentVacation] = useState({
        // id: 0,
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
    getVacationById(vacationId).then((res) => setCurrentVacation(res));
}, []);



// useEffect(()=> {
//     getVacations().then((data)=> setVacation(data))
// }, [])

const changeVacationState = (evt) => {
    const {name, value} = evt.target
    setCurrentVacation((prevState)=> ({...prevState, [name]: value }))
}
useEffect(() => {
    getVacationTypes().then((data)=>setVacationTypes(data))
}, [])



useEffect(() => {
    getCountries().then((data)=>setCountries(data))
}, [])


return (
    <form className="vacationForm">
        <h2 className="vacationForm_description"> Updating Vacation: {vacationId} </h2>

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
                <label htmlFor="rating"> Rating (out of 5)</label>
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
                    id: parseInt(vacationId),
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
                updateVacation(vacation)
                    .then(() => navigate("/uservacations"))
            }}
            className="btn btn-primary">Update
            </button>
</form>
)
}