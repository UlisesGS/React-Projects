import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { Snackbar, Alert } from '@mui/material';
import { useSnackbar } from "./hooks/useSnackbar";
import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";



export const UserApp = () => {
    
    
    const snackbar = useSnackbar(); 
    const {login,handlerLogin, handlerLogout} = useAuth(snackbar);

    return (
        <>
            <Snackbar
                open={snackbar.openSnackbar}
                autoHideDuration={3000}
                onClose={snackbar.handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
            <Alert
                onClose={snackbar.handleCloseSnackbar}
                severity={snackbar.snackbarSeverity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {snackbar.snackbarMessage}
            </Alert>
            </Snackbar>
            {login.isAuth
            ? (
                <>
                    <Navbar login={login} handlerLogout={handlerLogout} />
                    <UsersPage/>
                </>
              )
            : <LoginPage handlerLogin={handlerLogin}/>}
        </>
    )
};
