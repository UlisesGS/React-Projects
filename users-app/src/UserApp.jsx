import { LoginPage } from "./auth/pages/LoginPage";
import { Snackbar, Alert } from '@mui/material';
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";



export const UserApp = () => {
    
    
    
    const {login,snackbar} = useContext(AuthContext)
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
        
        
            <Routes>
                {login.isAuth
                ? (
                    <Route path='/*' element={<UserRoutes/>} />
                )
                : 
                <>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/*' element={<Navigate to="/login"/>}/>
                </> }
            </Routes>
        </>
    )
};
