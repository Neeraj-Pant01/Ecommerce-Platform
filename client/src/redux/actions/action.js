import { actionType } from "../constants/useractions"

export const LoginSucess = (data) =>{
    return {
        type:actionType.LOGIN,
        payload:data
    }
}

export const LoginStart = () =>{
    return{
        type:actionType.LOGINSTART
    }
}

export const LoginFail = () =>{
    return{
        type:actionType.LOGINFAIL
    }
}

export const Getcarts = (data) =>{
    return{
        type: actionType.GETCART,
        payload: data
    }
}