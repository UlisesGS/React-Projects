import { useReducer } from "react";
import { loginReducer } from "../reducers/LoginReducer";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}

export const useAuth = ({showSnackbar}) => {
    
    const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();

    const handlerLogin = ({email,password}) => {
            const isLogin = loginUser({email,password})
            if (isLogin){
                const user = {email:'admin@gmail.com'}
                dispatch({
                    type:'login',
                    payload:user
                })
                sessionStorage.setItem('login', JSON.stringify({
                    isAuth: true,
                    user
                }))
                navigate('/users')
            }else{
                console.log('hola');
                
                showSnackbar('Credenciales invalidas', 'error');
            }
        }
    
        const handlerLogout = () => {
            dispatch({
                type: 'logout',
            })
            sessionStorage.removeItem('login');
        }


    return {
        login,
        handlerLogin,
        handlerLogout,
        showSnackbar
    }
}