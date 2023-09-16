import { useDispatch } from "react-redux"

export default function useDispach(prop){
    const dispatch = useDispatch()
    return dispatch(prop)
};