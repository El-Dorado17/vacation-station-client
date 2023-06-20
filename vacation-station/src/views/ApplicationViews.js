import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"

import { VacationList } from "../components/vacations/VacationList"
import { VacationForm } from "../components/vacations/VacationForm"
import { UpdateVacation } from "../components/vacations/UpdateVacation"
import { YourVacations } from "../components/vacations/YourVacationList"


export const ApplicationViews = () => {
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<VacationList />} />
        <Route path="/vacationform" element={<VacationForm />} />
        <Route path="/updatevacation" element={<UpdateVacation />} />
        <Route path="/uservacations" element={<YourVacations />} />
    </Routes>
}  