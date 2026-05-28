import { useState } from 'react';
import herramientasData from '../data/herramientas.json';

function Explorer() {
  // Estados para los filtros
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // Listado único de categorías extraído automáticamente del JSON
  const categorias = ['Todas', 'Frontend', 'Backend', 'Data', 'Tools'];

  // LÓGICA DE FILTRADO COMBINADO (Buscador + Botón de Categoría)
  const herramientasFiltradas = herramientasData.filter((herramienta) => {
    const coincideTexto = herramienta.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                          herramienta.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    
    const coincideCategoria = categoriaSeleccionada === 'Todas' || herramienta.categoria === categoriaSeleccionada;
    
    return coincideTexto && coincideCategoria;
  });

  return (
    <div className="explorer-page fade-in">
      <div className="section-header">
        <span className="section-tag">EXPLORADOR LOCAL</span>
        <h2>Caja de Herramientas Tech</h2>
        <p>Buscá e interactuá con el ecosistema tecnológico de AppMinds en tiempo real.</p>
      </div>

      {/* CONTROLES DE FILTRADO */}
      <div className="filter-container" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        {/* Input de Búsqueda */}
        <div className="search-box-wrapper" style={{ marginBottom: '1.5rem' }}>
          <input
            type="text"
            placeholder="🔍 Buscar por nombre o descripción..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Botones de Categorías */}
        <div className="category-buttons" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSeleccionada(cat)}
              className={`btn-category ${categoriaSeleccionada === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* CONTADOR DE RESULTADOS */}
      <div style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
        Mostrando {herramientasFiltradas.length} de {herramientasData.length} herramientas encontradas.
      </div>

      {/* GRILLA DE HERRAMIENTAS */}
      <div className="tools-grid">
        {herramientasFiltradas.map((tool) => (
          <div key={tool.id} className="tool-card fade-in">
            <div className="tool-icon-header">
              <span className="tool-emoji">{tool.icono}</span>
              <span className="tag tool-category-tag">{tool.categoria}</span>
            </div>
            <h3>{tool.nombre}</h3>
            <p>{tool.descripcion}</p>
          </div>
        ))}

        {/* Mensaje en caso de no encontrar coincidencias */}
        {herramientasFiltradas.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            📡 No se encontraron herramientas que coincidan con tu búsqueda.
          </div>
        )}
      </div>
    </div>
  );
}

export default Explorer;