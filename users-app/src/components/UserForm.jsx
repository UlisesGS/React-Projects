import { Box, Button, DialogActions, DialogContent, Divider, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { CancelButton, SaveButton } from '../Styled';


export const UserForm = ({handlerCloseForm,userSelected,handlerAddUser, initialUserForm}) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const {id,username,password,email} = userForm;

    useEffect(() => {
        setUserForm({
                ...userSelected,
                password:'',
            });
    }, [userSelected]);

    const onInputChange = ({target}) => {
        
        const {name,value} = target;

        setUserForm({
            ...userForm,
            [name]:value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault(); //es para que cuando se envie el formulario no haga un refresh en la pagina
        console.log(userForm);

        handlerAddUser(userForm);

        setUserForm(initialUserForm);
        
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }

    return(
        <>
            <DialogContent>
                <Box
                    id="user-form"
                    component="form"
                    onSubmit={onSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        mt: 1,
                        maxWidth: 400,
                        mx: 'auto',
                        width: '100%',
                    }}
                >
                    <TextField
                        label="Username"
                        variant="outlined"
                        name="username"
                        value={username}
                        onChange={onInputChange}
                        required
                        fullWidth
                    />
                    {!id && (
                        <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        required
                        fullWidth
                        />
                    )}
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        required
                        fullWidth
                    />
                </Box>
            </DialogContent>

            <Divider />

            <DialogActions sx={{ px: 3, pb: 2, justifyContent: 'flex-end', gap: 2 }}>
                <CancelButton onClick={onCloseForm} variant="outlined">
                    Cancelar
                </CancelButton>
                <SaveButton type="submit" variant="outlined" form="user-form">
                    Guardar
                </SaveButton>
            </DialogActions>
        </>
    )
}