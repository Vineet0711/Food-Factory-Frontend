import { commonRequest } from "./ApiCall";
import {BASE_URL} from "./helper";


export const sendFunction= async (data,header)=>{
    return await commonRequest("POST",`${BASE_URL}/user/message`,data,header)
}
export const sendOrder= async (data,header)=>{
    return await commonRequest("POST",`${BASE_URL}/user/order`,data,header)
}