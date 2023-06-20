import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
//import { GameForm } from "../game/GameForm" //!This link will redirect you to the form view

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navButton">
                <button className="VacationList"
                onClick={() => {
                    navigate('/')
                }}>
                    See All Vacation Posts
                </button>
            </li>
            <li className="navButton">
                <button className="VacationForm"
                onClick={() => {
                    navigate('/vacationform')
                }}>
                    Post a Vacation
                </button>
            </li>
            <li className="navButton">
                <button className="YourVacations"
                onClick={() => {
                    navigate('/uservacations')
                }}>
                    Your Vacations
                </button>
            </li>

            {
                (localStorage.getItem("vacation_user") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("vacation_user")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
