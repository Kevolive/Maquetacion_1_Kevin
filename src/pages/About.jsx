import '../styles/About.css';

function AcercaDe() {
  return (
    <div className="acerca-container">
      <h1 className="acerca-title">Acerca de </h1>
      <p className="acerca-text">
        Este Acerca de es con un fin educativo del curso de Desarrollo web II.
      </p>

      <div className="acerca-cards">
        <div className="card">
          <h2>Misión</h2>
          <p>Realizar la evidencia de desempeño, Maquetación #1 </p>
        </div>
        <div className="card">
          <h2>Visión</h2>
          <p>Aplicarlo al Proyecto Integrador</p>
        </div>
      </div>
    </div>
  );
}

export default AcercaDe;
