import { FC, useContext } from "react";
import LoginContext from "../contexts/LoginContext";
import { LoginContextType } from "../types/contextTypes";

const DashBoard: FC = () => {
    const ctx: LoginContextType = useContext(LoginContext);
    
    return (
        <div>
            <header>
                <nav>Dashboard</nav>
            </header>
        </div>
    );
};

export default DashBoard;
