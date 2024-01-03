import { useState } from "react";
import "./App.css";
import LoginContext from "./contexts/LoginContext";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";

function App() {
    const [loginStatus] = useState<boolean>(true);

    return (
        <>  
            <LoginContext.Provider value={{loginStatus}}>
                <Router>
                    <Routes>
                        {!loginStatus ? (
                            <Route
                                path="/"
                                element={<Navigate to={"/home"} replace />}
                            />
                        ) : (
                          <Route
                                path="/"
                                element={<Navigate to={"/dashboard"} replace />}
                            />
                        )}

                        <Route path="/home" element={<Home />} />
                        <Route path="/dashboard" element={<DashBoard />} />
                    </Routes>
                </Router>
            </LoginContext.Provider>
        </>
    );
}

export default App;
