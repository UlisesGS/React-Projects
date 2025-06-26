
import { Container, Typography, Grid } from '@mui/material';
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from './reducers/usersReducer';
import { useReducer } from 'react';

const initialUsers = [
        {
            id: 1,
            username: 'p',
            password: '12345',
            email: 'pepe@correo.com'
        }
    ]

export const UserApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    const handlerAddUser = (user) => {
        dispatch({
            type: 'addUser',
            payload: user,
        })
    }

    return (
        <Container sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
            Users App
        </Typography>

        <Grid container columns={12} spacing={20}>
            <Grid span={12} md={6}>
                <UserForm
                    handlerAddUser={handlerAddUser}
                />
            </Grid>

            <Grid span={12} md={6}>
                <UsersList 
                    users={ users }
                />
            </Grid>
        </Grid>
        </Container>
    );
}