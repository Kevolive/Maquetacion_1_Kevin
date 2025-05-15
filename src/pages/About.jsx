import '../styles/About.css';

function AcercaDe() {
  return (
    <div className="acerca-container">
      <h1 className="acerca-title">Acerca de Nosotros</h1>
      <p className="acerca-text">
        Somos una empresa dedicada a la tecnología.
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
