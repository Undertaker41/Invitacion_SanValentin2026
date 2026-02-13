import React from 'react'; // No olvides importar React si es necesario en tu versión
import foto from "./assets/image2.png";
import './LoginButton.css';

function LoginButton(props) {
    return (
        <div className="login-container">
            <div className="login-card">
                {/* Ponemos la foto arriba para que presida la carta */}
                <img src={foto} alt='Decoración' className="login-image" />
                
                <h1>Hola Barbara</h1>
                
                <p className="login-text">
                    Quería hacerte una pregunra y queria saber si estas dispuesta leerme nuevamente
                </p>
                
                <button className="login-btn" onClick={props.login}>
                    Acepto papi rico
                </button>
            </div>
        </div>
    );
}

export default LoginButton;