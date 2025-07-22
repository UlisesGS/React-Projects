import { useContext, useState } from "react"
import { UserForm } from "../components/UserForm"
import { Typography } from "@mui/material";
import { UserContext } from "../context/UserContext";

export const RegisterPage = () => {

    const {initialUserForm} = useContext(UserContext);

    const [userSelected, setUserSelected] = useState(initialUserForm);
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Registro de Usuarios
            </Typography>
            <UserForm userSelected={userSelected} />
        </>
        
    )
}