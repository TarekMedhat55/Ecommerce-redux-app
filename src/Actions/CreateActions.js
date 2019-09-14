import {FETCH_PRODUCT,FETCH_PRODUCT_DATA} from './Types'
import Axios from 'axios'
export const fetchProduct = () =>dispatch=>{
    Axios.get(`http://localhost:8000/products`).then(res=>dispatch({
        type:FETCH_PRODUCT,
        payload:res.data
    }))
}
export const fetchProductData= (id) =>dispatch=>{
    Axios.get(`http://localhost:8000/products/${id}`).then(res=>dispatch({
        type:FETCH_PRODUCT_DATA,
        payload:res.data
    }))
}