import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [seleccion, setSeleccion] = useState(null);
    const navigate = useNavigate();

    const clickSi = () => {
        setSeleccion('SI');
        setTimeout(() => navigate('/si'), 600);
    };

    const clickNo = () => {
        setSeleccion('NO');
        setTimeout(() => navigate('/no'), 600);
    };

    // --- ESTILOS MEJORADOS ---

    const estiloFondoAnimado = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const estiloTarjetaCentral = {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '20px',
        border: '4px solid black',
        boxShadow: '10px 10px 0px black', // Efecto Neo-brutalista
        textAlign: 'center',
        maxWidth: '90%',
        width: '400px'
    };

    const estiloTitulo = {
        fontSize: '2rem',
        fontWeight: '900',
        marginBottom: '40px',
        color: 'black',
        lineHeight: '1.2'
    };

    const contenedorOpciones = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center'
    };

    const estiloBotonOpcion = (esSeleccionado) => ({
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '15px',
        cursor: 'pointer',
        border: '3px solid black',
        borderRadius: '12px',
        backgroundColor: esSeleccionado ? '#FFDE59' : 'white',
        transition: 'all 0.2s ease',
        transform: esSeleccionado ? 'scale(0.98)' : 'none',
        boxShadow: esSeleccionado ? 'none' : '4px 4px 0px black',
        color: 'black'
    });

    const estiloCheckbox = {
        width: '30px',
        height: '30px',
        border: '3px solid black',
        marginRight: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    };

    return (
        <div style={estiloFondoAnimado}>
            <div style={estiloTarjetaCentral}>
                
                <h1 style={estiloTitulo}>
                    ¿Quieres ser mi San Valentín?
                </h1>

                <div style={contenedorOpciones}>
                    
                    {/* --- OPCIÓN SÍ --- */}
                    <div onClick={clickSi} style={estiloBotonOpcion(seleccion === 'SI')}>
                        <div style={estiloCheckbox}>
                            {seleccion === 'SI' && <span style={{ fontWeight: '900', fontSize: '20px' }}>✓</span>}
                        </div>
                        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800' }}>SÍ, pense que nunca lo pedirias </h2>
                    </div>

                    {/* --- OPCIÓN NO --- */}
                    <div onClick={clickNo} style={estiloBotonOpcion(seleccion === 'NO')}>
                        <div style={estiloCheckbox}>
                            {seleccion === 'NO' && <span style={{ fontWeight: '900', fontSize: '20px' }}>✗</span>}
                        </div>
                        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800' }}>Nolsa</h2>
                    </div>

                </div>

                <p style={{ marginTop: '30px', fontWeight: '600', color: '#666' }}>
                    Selecciona una casilla reina
                </p>
            </div>
        </div>
    );
}

export default HomePage;