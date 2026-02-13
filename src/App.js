import { useState } from 'react';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import HomePage from './HomePage';
import Hola from './Hola';
import PaginaSi from './PaginaSi';
import PaginaNo from './PaginaNo';
import { Routes, Route, Link } from "react-router-dom";
function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);

    return (
        <>
        
        
            {loggedIn ? (
                <div>
                    {/* <LogoutButton logout={logout} /> */}
                    {/* <HomePage /> */}
                    <Routes>

                        <Route path="/" element={<HomePage />} />
                        <Route path="/si" element={<PaginaSi />} />
                        <Route path="/no" element={<PaginaNo />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>

                </div>
            ) : (
              <div>
                <h1>Por favor di que si</h1>
                <LoginButton login={login} />
              </div>
            )}
        </>
    );
}

export default App;
