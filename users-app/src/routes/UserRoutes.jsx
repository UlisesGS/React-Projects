import { Navigate, Route, Routes } from "react-router-dom"
import {UsersPage} from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { UserProvider } from "../context/UserProvider";
export const UserRoutes = () => {


    return (
        <>
            <UserProvider>
                <Navbar />
                <Routes>
                    <Route path="users" element={<UsersPage/>}/>

                    <Route path="users/register" element={<RegisterPage/>}/>

                    <Route path="/" element={<Navigate to="/users" />}/>
                </Routes>
            </UserProvider>
        </>
    )
}