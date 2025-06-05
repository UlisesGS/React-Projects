
import { Container, Typography, Grid } from '@mui/material';
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

export const UserApp = () => {

    const initialUsers = [
        {
            id: 1,
            username: 'p',
            password: '12345',
            email: 'pepe@correo.com'
        }
    ]

    return (
        <Container sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
            Users App
        </Typography>

        <Grid container spacing={50}>
            <Grid item xs={12} md={6}>
                <UserForm />
            </Grid>

            <Grid item xs={12} md={6}>
                <UsersList users={ initialUsers } />
            </Grid>
        </Grid>
        </Container>
    );
}