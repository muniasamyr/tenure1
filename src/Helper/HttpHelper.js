import axios from 'axios';

export function getService(endPoint){
    const res = await axios.get(endPoint);
    return res
}
export function postService(endPoint,body){
    const res = await axios.post(endPoint,body);
    return res
}
export function putService(endPoint,body){
    const res = await axios.put(endPoint,body);
    return res
}