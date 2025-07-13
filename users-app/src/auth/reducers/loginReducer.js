export const loginReducer = (state = {}, action) => {

    switch(action.type) {
        case 'login':
            return{
                isAuth: true,
                user: action.payload,
            };
        
        case 'logaut':
            return{
                isAuth: false,
            }
        default:
            return state;
    }
}