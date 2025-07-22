import {  useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];

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

    //form
    const [visibleForm, setVisibleForm] = useState(false);

    //api
    const getUsers = async() => {
        const result = await findAll();
        dispatch({
            type: 'loadingUsers',
            payload: result.data
        })
    }

    const showSnackbar = (message, severity = 'success') => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handlerAddUser = async(user) => {

        let response;

        if (user.id === 0) {
            response = await save(user);
        } else {
            response = await update(user);
        }

        if (user.id === 0) {
            dispatch({
                type: 'addUser',
                payload: response.data,
            });
            showSnackbar('✅ Usuario creado correctamente');
        } else {
            dispatch({
                type: 'updateUser',
                payload: response.data,
            });
            showSnackbar('✏️ Usuario actualizado correctamente');
        }
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    };

    // 🔁 En lugar de eliminar directamente, se abre el diálogo
    const handlerRequestRemoveUser = (id) => {
        setUserIdToDelete(id);
        console.log(userIdToDelete);
        
        setOpenDialog(true);
    };

    // ✅ Eliminar después de confirmar
    const handlerConfirmRemoveUser = () => {
        remove(userIdToDelete);
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
        setVisibleForm(true);
        setUserSelected({ ...user });
    };

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setUserSelected(initialUserForm);
        setVisibleForm(false);
    }

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
        visibleForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
        // Alertas
        openSnackbar,
        snackbarMessage,
        snackbarSeverity,
        handleCloseSnackbar
    };
};
