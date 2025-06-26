import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';


const initialUserForm = {
    username:'',
    password:'',
    email:''
}


export const UserForm = ({handlerAddUser}) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const {username,password,email} = userForm;

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
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    required
                />
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    required
                />
                <Button type="submit" variant="contained">
                    Enviar
                </Button>
            </Box>
        </>
    )
}