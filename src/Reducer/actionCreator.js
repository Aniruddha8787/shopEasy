import { Alert } from "@chakra-ui/react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const loginReq = (data, dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" })

    axios.post(`https://reqres.in/api/login`, data).then((res) => {
        
        dispatch({ type: "LOGIN_SUCCESS",payload:res.data })
    }).catch((err) => {
        dispatch({ type: "LOGIN_FAILURE" });
    })
    
}

const getSliderimg = (dispatch) => {
    axios.get("http://localhost:8080/slider").then((res) => {
        dispatch({type:"SLIDE_GET_REQUEST",payload:res.data})
        
    }).catch((err) => {
        console.log(err)
        dispatch();
        
    })
}

const slideChange = (type, dispatch, state) => {
    if (type === "left" && state.current === 0) {
      alert("cant change image");
      return;
    }
    if (type === "right" && state.current === state.slides.length-1) {
      alert("cant change image");
      return;
    }
    if (type === "left") {
      dispatch({type:"SLIDE_CHANGE",payload:-1})
    }
    if (type === "right") {
        dispatch({ type: "SLIDE_CHANGE", payload: 1 });
        
    }
};



const getProductApi = (dispatch,state) => {
    
     dispatch({ type:"GET_PRODUCT_REQUEST"});

    axios.get(`http://localhost:8080/products?_page=${state.page}&_limit=9`).then((res) => {
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: res.data });
        console.log(res.data)
       
    }).catch((err) => {
        console.log(err)
        dispatch({ type: "GET_PRODUCT_FAILURE" });
    })
}


const pageChange = (type, dispatch, state) => {
    if (type === "+") {
        dispatch({type:"PAGE_CHANGE",payload:1})
    }
    else {
        if (state.page === 1) {
            return
        }
        dispatch({type:"PAGE_CHANGE",payload:-1})
    }
    
}

const getSingleProduct = (dispatch, id) => {
    
    dispatch({ type: "GET_PRODUCT_REQUEST" });

    axios.get(`http://localhost:8080/products/${id.id}`).then((res) => {
        dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: res.data });
    }).catch((err) => {
        dispatch({ type: "GET_PRODUCT_FAILURE" });
        console.log(err)

    })
    
}

const addToCart = (data, dispatch, auth,navigate) => {
    
    if (auth === false) {
        alert("you have to login first")
        navigate("/login");
    }
    else {
        axios.post("http://localhost:8080/cart", data).then((res) => {
    }).catch((err) => {
        console.log(err);
        if (err.message === "Request failed with status code 500") {
            alert("Data already added")
        }
    })
    }
}

const getCartApi = (dispatch) => {


    dispatch({ type: "GET_CART_REQUEST" });

    axios.get("http://localhost:8080/cart").then((res) => {
        
        dispatch({ type: "GET_CART_SUCCESS", payload: res.data });
    }).catch((err) => {
        dispatch({ type: "GET_CART_FAILURE" });
        console.log(err)

    })
    
}


const deleteFromCart = (id, dispatch) => {

    axios.delete(`http://localhost:8080/cart/${id}`).then((res) => {
        getCartApi(dispatch)
        
    }).catch((err) => {
        console.log(err)

    })
}

const updateQuantity = (id,dispatch,data) => {
    axios.patch(`http://localhost:8080/cart/${id}`,data).then((res) => {
        getCartApi(dispatch)
        
    }).catch((err) => {
        console.log(err)

    })
}


export {updateQuantity,loginReq,getSliderimg,slideChange,getProductApi,pageChange,getSingleProduct,addToCart,getCartApi,deleteFromCart}