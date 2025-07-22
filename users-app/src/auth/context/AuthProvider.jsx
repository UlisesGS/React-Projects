import { useSnackbar } from "../../hooks/useSnackbar";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}) => {


    //const snackbar = useSnackbar();
    const snackbar = useSnackbar(); 
    const {login,handlerLogin, handlerLogout} = useAuth(snackbar);

    return (
        <AuthContext.Provider value={
            {
                login,
                handlerLogin,
                handlerLogout,
                snackbar
            }
        }>

            {children}
        </AuthContext.Provider>
    )
}