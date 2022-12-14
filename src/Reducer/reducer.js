

const reducer = (state, action) => {
    switch (action.type) {
        /*------- AuthReducer ---------*/
        case "EMAIL_ONCHANGE":
            return { ...state, email: action.payload }
        case "PASSWORD_ONCHANGE":
            return { ...state, password: action.payload }
        case "LOGIN_REQUEST":
            return { ...state, isLoading: true }
        case "LOGIN_SUCCESS":
            return { ...state, isAuth: true,isLoading: false, token: action.payload }
        case "LOGIN_FAILURE":
            return { ...state, isAuth: false, token: null, isError: true ,isLoading:false }
        case "LOGOUT":
            return { ...state, isAuth: false, token: null, isError: false, isLoading: false }
        
        
        /*--------- slider ---------*/

        case "SLIDE_GET_REQUEST":
            return { ...state, slides: action.payload }
        
        case "SLIDE_CHANGE":
            return { ...state, current: state.current + action.payload }
        
        
        case "GET_PRODUCT_REQUEST":
            return { ...state, isprodLoading: true }
        case "GET_PRODUCT_SUCCESS":
            return { ...state,  products:action.payload ,isprodError:false,isprodLoading: false,}
        case "GET_PRODUCT_FAILURE":
            return { ...state, isprodLoading: false, products: null, isprodError: true }
        

        case "PAGE_CHANGE":
            return{...state, page:state.page+action.payload} 
            
        
        case "GET_SINGLE_PRODUCT_SUCCESS":
            return { ...state,  singleProduct:action.payload ,isprodError:false,isprodLoading: false,}
        case "GET_SINGLE_PRODUCT_FAILURE":
            return { ...state, isprodLoading: false, singleProduct: null, isprodError: true }
        
        case "GET_CART_REQUEST":
            return { ...state, isprodLoading: true }
        case "GET_CART_SUCCESS":
            return { ...state,  cart:action.payload ,isprodError:false,isprodLoading: false,}
        case "GET_CART_FAILURE":
            return { ...state, isprodLoading: false, cart: null, isprodError: true }
        
         
        default:
            return state;
    }
    
}

export default reducer;