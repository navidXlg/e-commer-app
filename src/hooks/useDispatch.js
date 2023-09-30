import { useDispatch } from "react-redux";

export default function Usedispatch(prop){
    const dispatch = useDispatch()
    return dispatch(prop)
};