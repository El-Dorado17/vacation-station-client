import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"

import { VacationList } from "../components/vacations/VacationList"


export const ApplicationViews = () => {
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<VacationList />} />
    </Routes>
}  