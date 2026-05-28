import { useState, useEffect } from 'react';

function ApiModule() {
  // Estados para los datos de la API, la página actual y el estado de carga
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cargando, setCargando] = useState(true);

  // useEffect vigila el estado 'pagina'. Si cambia, vuelve a ejecutar el fetch.
  useEffect(() => {
    setCargando(true); // Activa el estado de carga antes de buscar
    
    fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results || []);
        setCargando(false); // Apaga el estado de carga cuando llegan los datos
      })
      .catch((error) => {
        console.error("Error al conectar con la API:", error);
        setCargando(false);
      });
  }, [pagina]);

  return (
    <div className="api-page fade-in">
      <div className="section-header">
        <span className="section-tag">API EXTERNA</span>
        <h2>Multiverso Rick & Morty</h2>
        <p>Consumiendo datos asincrónicos en tiempo real con paginación interactiva.</p>
      </div>

      {/* CONTROLES DE PAGINACIÓN (Requerimiento obligatorio) */}
      <div className="pagination-container">
        <button 
          onClick={() => setPagina((prev) => Math.max(prev - 1, 1))} 
          disabled={pagina === 1 || cargando}
          className="btn-pagination"
        >
          ◀ Anterior
        </button>
        
        <span className="page-indicator">Página {pagina}</span>
        
        <button 
          onClick={() => setPagina((prev) => prev + 1)} 
          disabled={cargando || personajes.length === 0}
          className="btn-pagination"
        >
          Siguiente ▶
        </button>
      </div>

      {/* PANTALLA DE CARGA (Para darle fluidez visual mientras viaja a internet) */}
      {cargando ? (
        <div className="loading-wrapper">
          <div className="spinner"></div>
          <p>Sintonizando dimensiones paralelas...</p>
        </div>
      ) : (
        /* GRILLA DE PERSONAJES */
        <div className="api-grid">
          {personajes.map((personaje) => (
            <div key={personaje.id} className="api-card fade-in">
              <div className="api-card-img-wrap">
                <img src={personaje.image} alt={personaje.name} />
              </div>
              <div className="api-card-info">
                <h3>{personaje.name}</h3>
                <div className="status-badge">
                  <span className={`status-dot ${personaje.status.toLowerCase()}`}></span>
                  {personaje.status} - {personaje.species}
                </div>
                <div className="api-card-location">
                  <small>Última ubicación conocida:</small>
                  <p>{personaje.location.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApiModule;