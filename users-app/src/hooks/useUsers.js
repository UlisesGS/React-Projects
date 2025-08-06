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

const initialErrors = {
    username: '',
    password: '',
    email: ''
};

export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);

    //Errores
    const [errors, setErrors] = useState(initialErrors)

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

        try {
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
            handlerCloseForm();
            setUserSelected(initialUserForm);
        }catch(error){
            if(error.response && error.response.status == 400){
                setErrors(error.response.data);
            }else if(error.response && error.response.status == 500 && error.response.data?.message?.includes('constraint')){
                if(error.response.data?.message?.includes('UK_username')){
                    setErrors({username: 'El username ya existe!'})
                }
                if(error.response.data?.message?.includes('UK_email')){
                    setErrors({email: 'El email ya existe!'})
                }
            }else{
                throw error;
            }
            
        }
    };

    // 🔁 En lugar de eliminar directamente, se abre el diálogo
    const handlerRequestRemoveUser = (id) => {
        setUserIdToDelete(id);
        console.log(id);
        
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
        setErrors({});
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
        errors,
        // Alertas
        openSnackbar,
        snackbarMessage,
        snackbarSeverity,
        handleCloseSnackbar
    };
};
