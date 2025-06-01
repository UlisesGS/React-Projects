import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

export const UserApp = () => {
    return (
        <div className="containar my-4">
            <h2>Users App</h2>
            <div className="row">

                <div className="col">
                    <UserForm/>
                </div>

                <div className="col">
                    <UsersList/>
                </div>

            </div>
            
        </div>
    );
}