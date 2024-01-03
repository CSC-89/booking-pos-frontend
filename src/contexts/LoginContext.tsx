import { createContext } from "react";
import { LoginContextType } from "../types/contextTypes";


const LoginContext = createContext<LoginContextType>({
    loginStatus: true
});

export default LoginContext;