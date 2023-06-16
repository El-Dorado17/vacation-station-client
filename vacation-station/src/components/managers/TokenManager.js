
//get token component and just get .token piece

export const getToken = () => {
    const VacationUser = localStorage.getItem("vacation_user")
    const VacationUserObject = JSON.parse(VacationUser)
    return VacationUserObject.token
}