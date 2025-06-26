import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

const initialUsers = [
    {
        id: 1,
        username: 'p',
        password: '12345',
        email: 'pepe@correo.com'
    }
];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
};

export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);

    // Snackbar state
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    // Diálogo de confirmación
    const [openDialog, setOpenDialog] = useState(false);
    const [userIdToDelete, setUserIdToDelete] = useState(null);

    const showSnackbar = (message, severity = 'success') => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handlerAddUser = (user) => {
        if (user.id === 0) {
            dispatch({
                type: 'addUser',
                payload: user,
            });
            showSnackbar('✅ Usuario creado correctamente');
        } else {
            dispatch({
                type: 'updateUser',
                payload: user,
            });
            showSnackbar('✏️ Usuario actualizado correctamente');
        }
    };

    // 🔁 En lugar de eliminar directamente, se abre el diálogo
    const handlerRequestRemoveUser = (id) => {
        setUserIdToDelete(id);
        setOpenDialog(true);
    };

    // ✅ Eliminar después de confirmar
    const handlerConfirmRemoveUser = () => {
        dispatch({
            type: 'removeUser',
            payload: userIdToDelete,
        });
        showSnackbar('🗑️ Usuario eliminado correctamente');
        setOpenDialog(false);
        setUserIdToDelete(null);
    };

    const handlerCancelRemoveUser = () => {
        setOpenDialog(false);
        setUserIdToDelete(null);
    };

    const handlerUserSelectedForm = (user) => {
        setUserSelected({ ...user });
    };

    return {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        handlerUserSelectedForm,
        handlerRequestRemoveUser,    // usar este en vez de handlerRemoveUser
        handlerConfirmRemoveUser,
        handlerCancelRemoveUser,
        openDialog,

        // Alertas
        openSnackbar,
        snackbarMessage,
        snackbarSeverity,
        handleCloseSnackbar
    };
};
