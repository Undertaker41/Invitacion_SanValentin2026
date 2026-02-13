import { useState } from 'react';
import './App.css';
import LoginButton from './LoginButton';
import HomePage from './HomePage';
import PaginaSi from './PaginaSi';
import PaginaNo from './PaginaNo';
import { Routes, Route,} from "react-router-dom";
// ... otros imports
function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    // const logout = () => setLoggedIn(false); <-- BORRA O COMENTA ESTA LÍNEA

    return (
        <>
            {loggedIn ? (
                <div>
                    {/* Aquí ya tenías todo comentado, por eso logout no se usaba */}
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