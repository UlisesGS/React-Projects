import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { UserForm } from "./UserForm"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"


export const UserModalForm = () => {

    const {userSelected,handlerCloseForm} = useContext(UserContext)

    return(
        <Dialog open={true} onClose={handlerCloseForm} keepMounted={false} maxWidth="sm" fullWidth >
            <DialogTitle>{userSelected.id === 0 ? 'Nuevo Usuario' : 'Editar Usuario'}</DialogTitle>
            <DialogContent dividers>
                <UserForm
                    userSelected={userSelected}
                    handlerCloseForm={handlerCloseForm} 
                />
            </DialogContent>
        </Dialog>
    )
}
    
    