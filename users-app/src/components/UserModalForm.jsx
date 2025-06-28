import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { UserForm } from "./UserForm"


export const UserModalForm = ({handlerAddUser,handlerCloseForm,initialUserForm,userSelected}) => {

    return(
        <Dialog open={true} onClose={handlerCloseForm} keepMounted={false} maxWidth="sm" fullWidth >
            <DialogTitle>{userSelected.id === 0 ? 'Nuevo Usuario' : 'Editar Usuario'}</DialogTitle>
            <DialogContent dividers>
                <UserForm
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm}
                    userSelected={userSelected}
                    handlerCloseForm={handlerCloseForm} 
                />
            </DialogContent>
        </Dialog>
    )
}
    
    