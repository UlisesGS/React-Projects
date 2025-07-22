import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

    const {
                users,
                userSelected,
                initialUserForm,
                handlerAddUser,
                handlerUserSelectedForm,
                handlerRequestRemoveUser,
                handlerConfirmRemoveUser,
                handlerCancelRemoveUser,
                openDialog,
                openSnackbar,
                visibleForm,
                snackbarMessage,
                snackbarSeverity,
                handleCloseSnackbar,
                handlerCloseForm,
                handlerOpenForm,
                getUsers
            } = useUsers();

    return (
        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                handlerAddUser,
                handlerUserSelectedForm,
                handlerRequestRemoveUser,
                handlerConfirmRemoveUser,
                handlerCancelRemoveUser,
                openDialog,
                openSnackbar,
                visibleForm,
                snackbarMessage,
                snackbarSeverity,
                handleCloseSnackbar,
                handlerCloseForm,
                handlerOpenForm,
                getUsers
            }
        }>
            {children}
        </UserContext.Provider>
    )
}