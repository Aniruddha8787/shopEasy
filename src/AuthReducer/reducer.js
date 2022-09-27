const reducer = (state, action) => {
    switch (action.type) {
        case "EMAIL_ONCHANGE":
            return { ...state, email: action.payload }
        case "PASSWORD_ONCHANGE":
            return { ...state, password: action.payload }
        case "LOGIN_REQUEST":
            return { ...state, isLoading: true }
        case "LOGIN_SUCCESS":
            return { ...state, isAuth: true,isLoading: false, token: action.payload }
        case "LOGIN_FAILURE":
            return { ...state, isAuth: false, token: null, isError: true }
        case "LOGOUT":
            return { ...state, isAuth: false,token:null,isError:false,isLoading:false }
        
        default:
            return state;
    }
    
}

export default reducer;