function Bitacora() {
  return (
    <div className="bitacora-page fade-in">
      <div className="section-header">
        <span className="section-tag">DOCUMENTACIÓN</span>
        <h2>Bitácora de Desarrollo: AppMinds</h2>
        <p>Registro del proceso de migración, arquitectura y control de versiones del TP2.</p>
      </div>

      <div className="content-grid" style={{ marginTop: '2rem' }}>
        
        {/* Hito 1 */}
        <div className="info-card" style={{ gridColumn: '1 / -1' }}>
          <div className="card-title"><span>🏗️</span> Fase 1: Migración de Arquitectura (HTML a SPA)</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '.95rem', lineHeight: '1.7', margin: '0' }}>
            El primer gran desafío del equipo fue deconstruir la estructura estática y lineal del TP1. Diseñamos una arquitectura basada en <strong>Single Page Application (SPA)</strong> utilizando <strong>Vite</strong> y <strong>React Router Dom v6</strong>. 
            Centralizamos los datos del equipo en un archivo estructurado en formato JSON (<code>miembros.json</code>) y creamos una vista de perfil modularizable en <code>Profile.jsx</code> que, mediante el hook <code>useParams</code>, lee dinámicamente el integrante seleccionado sin necesidad de duplicar archivos físicos.
          </p>
        </div>

        {/* Hito 2 */}
        <div className="info-card">
          <div className="card-title"><span>⚡</span> Fase 2: Gestión de Estados Interactivos</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '.9rem', lineHeight: '1.6', margin: '0' }}>
            Implementamos el manejo de estados locales con el hook <code>useState</code> para resolver los dos requerimientos interactivos locales de la cátedra:
          </p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '.9rem', paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li><strong>Carrusel de Proyectos:</strong> Control manual indexado por componente que renderiza dinámicamente los trabajos de cada miembro.</li>
            <li><strong>Filtros en Tiempo Real:</strong> Captura asincrónica del input de búsqueda combinada con categorías para el explorador de 20 herramientas tecnológicas.</li>
          </ul>
        </div>

        {/* Hito 3 */}
        <div className="info-card">
          <div className="card-title"><span>📡</span> Fase 3: Conexión asincrónica (API)</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '.9rem', lineHeight: '1.6', margin: '0' }}>
            Para el módulo de API externa, seleccionamos la API pública de <em>Rick and Morty</em>. Desarrollamos una integración limpia utilizando el hook <code>useEffect</code> sincronizado con un estado de paginación numérica. 
            Esto permite disparar peticiones con <code>fetch</code> de forma automática cada vez que el usuario navega entre páginas, optimizando el rendimiento mediante un renderizado condicional controlado por un <em>spinner</em> de carga intermedio.
          </p>
        </div>

        {/* Estrategia de Git */}
        <div className="info-card" style={{ gridColumn: '1 / -1', background: 'rgba(124, 58, 237, 0.05)', borderColor: '#4c1d95' }}>
          <div className="card-title" style={{ color: '#a076f9' }}><span>🔀</span> Estrategia de Control de Versiones (Git Workflow)</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '.95rem', lineHeight: '1.7', margin: '0' }}>
            Siguiendo rigurosamente las pautas de la cátedra, inicializamos un <strong>repositorio completamente independiente</strong> de Git para el TP2. Implementamos una estrategia de ramificación estructurada: la rama <code>main</code> se reservó exclusivamente como el entorno de producción estable y limpio. 
            Cada integrante despliega su propio flujo de trabajo en una rama con su nombre (ej. <code>marcela</code>) para desarrollar sus componentes individuales, garantizando la integración final mediante solicitudes de extracción (Pull Requests) controladas y evitando conflictos de fusión (merge conflicts).
          </p>
        </div>

      </div>
    </div>
  );
}

export default Bitacora;