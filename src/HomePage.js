import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fondoPantalla from "./assets/image4.png"; 

function HomePage() {
    const [seleccion, setSeleccion] = useState(null);
    const navigate = useNavigate();

    const clickSi = () => {
        setSeleccion('SI');
        setTimeout(() => navigate('/si'), 1000);
    };

    const clickNo = () => {
        setSeleccion('NO');
        setTimeout(() => navigate('/no'), 1000);
    };

    // --- ESTILOS ---

    // 1. EL FONDO COMO IMAGEN FÍSICA (ESTRATEGIA NUEVA)
    const estiloImagenFondo = {
        position: 'fixed',  // Clavado a la ventana
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',     // Ocupa todo el alto visible
        objectFit: 'cover', // Se comporta igual que background-size: cover
        zIndex: -1,         // Se va al fondo detrás de todo
        backgroundColor:'AntiqueWhite', // Color de fondo para evitar parpadeos en móviles
        // TRUCOS PARA EVITAR EL BAILE EN IPHONE:
        transform: 'translateZ(0)', // Fuerza al celular a usar la tarjeta gráfica (GPU)
        willChange: 'transform'     // Le avisa al navegador que esto no debe moverse
    };

    // 2. EL CONTENEDOR DE TU APP
    const estiloContenido = {
        position: 'absolute', // Flota sobre la imagen
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        overflowY: 'auto' // Permite scroll solo si el contenido es muy largo
    };

    // --- ESTILOS DE TUS BOTONES ---
    const estiloCuadro = {
        width: '40px',
        height: '40px',
        border: '3px solid black', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', 
        marginRight: '10px'
    };

    const estiloX = {
        color: 'black',
        fontSize: '30px',
        fontWeight: 'bold',
        lineHeight: '1'
    };

    const estiloBotonCompleto = {
        display: 'flex', 
        alignItems: 'center', 
        cursor: 'pointer',
        // background: 'rgba(255, 255, 255, 0.8)', 
        padding: '10px 20px',
        // borderRadius: '10px',
        // border: '2px solid black'
    };

    return (
        <>
            {/* ESTRATEGIA NUEVA: La imagen va suelta aquí, no como background */}
            <img src={fondoPantalla} alt="Fondo" style={estiloImagenFondo} />

            {/* Aquí va todo tu contenido normal */}
            <div style={estiloContenido}>
                
                <h1 style={{ backgroundColor: 'rgba(255,255,255,0.7)', padding: '0px', borderRadius: '10px', textAlign: 'center', width: '350px', marginTop:'-280px' }}>
                    ¿Quieres ser mi San Valentín?
                </h1>

                {/* {foto && <img src={foto} alt='Home' style={{ width: '200px', marginBottom: '20px', borderRadius: '15px' }} />} */}

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px',marginTop:'60px' }}>
                    
                    {/* --- OPCIÓN SÍ --- */}
                    <div onClick={clickSi} style={estiloBotonCompleto}>
                        <div style={estiloCuadro}>
                            {seleccion === 'SI' && <span style={estiloX}>X</span>}
                        </div>
                        <h2 style={{ margin: 0 }}>SÍ</h2>
                    </div>

                    {/* --- OPCIÓN NO --- */}
                    <div onClick={clickNo} style={estiloBotonCompleto}>
                        <div style={estiloCuadro}>
                            {seleccion === 'NO' && <span style={estiloX}>X</span>}
                        </div>
                        <h2 style={{ margin: 0 }}>NO</h2>
                    </div>

                </div>
            </div>
        </>
    );
}

export default HomePage;