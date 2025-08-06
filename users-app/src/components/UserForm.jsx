import { Box, Button, DialogActions, DialogContent, Divider, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { CancelButton, SaveButton } from '../Styled';
import { UserContext } from '../context/UserContext';


export const UserForm = ({handlerCloseForm,userSelected}) => {

    const {handlerAddUser, initialUserForm, errors} = useContext(UserContext);

    const [userForm, setUserForm] = useState(initialUserForm);

    const {id,username,password,email} = userForm|| {};

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
                        gap: 3, // separación entre campos completos
                        mt: 1,
                        maxWidth: 400,
                        mx: 'auto',
                        width: '100%',
                    }}
                >
                    {/* Username */}
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            name="username"
                            value={username}
                            onChange={onInputChange}
                            fullWidth
                            margin="none"
                        />
                        {errors?.username && (
                            <Box
                            sx={{
                                backgroundColor: '#f44336',
                                color: 'white',
                                px: 2,
                                py: 1,
                                borderRadius: 1,
                                fontSize: '0.875rem',
                                mt: 0.5, // muy pegado pero con aire
                            }}
                            >
                            {errors.username}
                            </Box>
                        )}
                    </Box>

                    {/* Password (solo si no hay ID) */}
                    {!id && (
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            fullWidth
                            margin="none"
                            />
                            {errors?.password && (
                            <Box
                                sx={{
                                backgroundColor: '#f44336',
                                color: 'white',
                                px: 2,
                                py: 1,
                                borderRadius: 1,
                                fontSize: '0.875rem',
                                mt: 0.5,
                                }}
                            >
                                {errors.password}
                            </Box>
                            )}
                        </Box>
                    )}

                    {/* Email */}
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            fullWidth
                            margin="none"
                        />
                        {errors?.email && (
                            <Box
                            sx={{
                                backgroundColor: '#f44336',
                                color: 'white',
                                px: 2,
                                py: 1,
                                borderRadius: 1,
                                fontSize: '0.875rem',
                                mt: 0.5,
                            }}
                            >
                            {errors.email}
                            </Box>
                        )}
                    </Box>
                </Box>
            </DialogContent>

            <Divider />

            <DialogActions sx={{ px: 3, pb: 2, justifyContent: 'flex-end', gap: 2 }}>
                {!handlerCloseForm || <CancelButton onClick={onCloseForm} variant="outlined">
                    Cancelar
                </CancelButton>}
                
                <SaveButton type="submit" variant="outlined" form="user-form">
                    Guardar
                </SaveButton>
            </DialogActions>
        </>
    )
}