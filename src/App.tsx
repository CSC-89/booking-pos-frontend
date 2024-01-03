import { useState } from "react";
import "./App.css";
import LoginContext from "./contexts/LoginContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";

function App() {
    const [loginStatus, setLoginStatus] = useState<boolean>(true);

    return (
        <>
            <LoginContext.Provider value={loginStatus}>
                <Router>
                    <Routes>
                        {!loginStatus && <Route path="/home" element={<Home />} />}
                        {loginStatus && <Route path="/dashboard" element={<DashBoard />}/>}
                    </Routes>
                </Router>
            </LoginContext.Provider>
        </>
    );
}

export default App;
