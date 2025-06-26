import { Box, Button, DialogActions, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { CancelButton, SaveButton } from '../Styled';


export const UserForm = ({userSelected,handlerAddUser, initialUserForm}) => {

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

    return(
        <>
            <Box
                onSubmit={onSubmit}
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}
            >
                <TextField
                    label="Username"
                    variant="outlined"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                    required
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
                />
                <DialogActions sx={{ gap: 2 }}>
                    <CancelButton variant='outlined' size="small">cancel</CancelButton>
                    <SaveButton variant="outlined" size="small">save</SaveButton>
                    
                </DialogActions>
            </Box>
        </>
    )
}