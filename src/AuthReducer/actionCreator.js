import axios from "axios"

const loginReq = (data, dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" })

    axios.post(`https://reqres.in/api/login`, data).then((res) => {
        console.log(res.data)
        dispatch({ type: "LOGIN_SUCCESS",payload:res.data })
    }).catch((err) => {
        dispatch({ type: "LOGIN_FAILURE" })
    })
    
}

export {loginReq}