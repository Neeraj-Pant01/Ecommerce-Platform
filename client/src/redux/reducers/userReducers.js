import { actionType } from "../constants/useractions"

const initialState = {
    currentUser:null,
    isfetching: false,
    error:false
}
export const LoginReducer = (state=initialState,action) =>{
    switch(action.type){
        case(actionType.LOGIN) :
        return {
            ...state,isfetching:true,currentUser:action.payload
        }

        case(actionType.LOGINSTART) :
        return {
            ...state,
            isfetching:true
        }

        case(actionType.LOGINFAIL) : 
        return {
            ...state,
            isfetching:false,
            error:true
        }
        default :
        return state;  
    }
}

const initialCart = {}
export const cartReducer = (state=initialCart, action) =>{
    switch(action.type){
        case (actionType.GETCART):
            return{
                ...state , payload:action.payload
            }
            default :
            return state;
    }
}