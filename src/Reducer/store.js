const store = {
    /*------- AuthReducer ---------*/
    isAuth: false,
    token:null,
    isLoading: false,
    isError: false,
    email: "eve.holt@reqres.in",
    password: "cityslicka",
    

    /*------- slider ---------*/

    slides: null,
    current: 0,


    isprodLoading: false,
    isprodError: false,
    products: null,
    
    page: 1,
    
    singleProduct:null,
}
export default store;