import foto from "./assets/image1.png"; 
import './PaginaSi.css'; // ¡Importante importar el CSS!

function PaginaSi() {
    return (
        <div className="si-container">
            <div className="si-card">
                
                {/* Título animado */}
                <h1 className="titulo-celebracion">¡Uy ñomio! </h1>
                
                <p className="subtitulo">Que ratoncita, Dios mío.</p>
                
                {/* Contenedor para darle marco a la foto */}
                <div className="marco-foto">
                    {foto && <img src={foto} alt='Celebración' className="foto-si" />}
                </div>

                <div className="texto-final">
                    <p>Sabía que dirías que sí mi amor.</p>
                    <p className="te-amo">Te amo mucho.</p>
                </div>

                {/* Decoración de corazones (Opcional, solo visual) */}
                <div className="corazones-flotantes">❤️ 💕 💖</div>
            </div>
        </div>
    );
}

export default PaginaSi;