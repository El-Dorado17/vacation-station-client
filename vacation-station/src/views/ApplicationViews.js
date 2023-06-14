import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"

//<Route path="/login" element={<Login />} /> //!Insert after register works!


export const ApplicationViews = () => {
    return <Routes>
        <Route path="/register" element={<Register />} />
    </Routes>
}  