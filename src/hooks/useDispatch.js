import { useDispatch } from "react-redux";

export default function useDispatchProduct(prop){
    const dispatch = useDispatch()
    return dispatch(prop)
};