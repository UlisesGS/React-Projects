import {
    Container,
    Typography,
    Alert,
    Snackbar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material';

import { CancelButton, DeleteButton } from '../Styled';
import { UsersList } from "../components/UsersList";
import { UserModalForm } from '../components/UserModalForm';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

export const UsersPage = ( ) => {
    
    const {
        users,
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
        handlerOpenForm,
        getUsers
    } = useContext(UserContext)

    useEffect (() => {
        getUsers()
    }, [])

    return (

        <Container sx={{ my: 4 }}>
            {visibleForm && (
                <UserModalForm/>
            )}
            <Typography variant="h4" gutterBottom>
                Users App
            </Typography>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>

            <Dialog
                open={openDialog}
                onClose={handlerCancelRemoveUser}
            >
                <DialogTitle>¿Eliminar usuario?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Esta acción no se puede deshacer. ¿Estás seguro que querés eliminar este usuario?
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ gap: 2 }}>
                    <CancelButton onClick={handlerCancelRemoveUser} variant="outlined" size="small">Cancelar</CancelButton>
                    <DeleteButton onClick={handlerConfirmRemoveUser} variant="outlined" size="small">Eliminar</DeleteButton>
                </DialogActions>
            </Dialog>

            <Button onClick={handlerOpenForm} variant="contained" color="primary" sx={{ mb: 3 }}>
                Nuevo Usuario
                </Button>
            {users.length === 0 ? (
            <Alert severity="warning" variant="filled">
                No hay Usuarios en el sistema
            </Alert>
            ) : (
            <UsersList
                handlerUserSelectedForm={handlerUserSelectedForm}
                handlerRemoveUser={handlerRequestRemoveUser}
                users={users}
            />
            )}
        </Container>
    );
};
