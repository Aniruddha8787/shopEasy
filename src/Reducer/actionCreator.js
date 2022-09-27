import axios from "axios"

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

export {loginReq,getSliderimg,slideChange}