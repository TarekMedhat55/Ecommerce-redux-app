import {FETCH_PRODUCT} from '../Actions/Types';

const initialState = {
    products:[],
    product:[]
}

export default function (state= initialState,action){
    if(action.type === FETCH_PRODUCT){
        return{
            ...state , products:action.payload
        }
    }else if(action.type){
        return{
            ...state,product:action.payload
        }
    }
    else{
        return state
    }
}