import { useContext } from "react";
import { AuthContext } from "../Authentication/MainAuth";

const useAuthHook = () => {
    const myRef = useContext(AuthContext);
    return myRef;
}

export default useAuthHook;