import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tree from 'react-d3-tree';

const treeData = [
  {
    name: 'App',
    attributes: { router: 'BrowserRouter' },
    children: [
      {
        name: 'Layout',
        children: [
          { name: 'Sidebar' },
          {
            name: 'Outlet',
            children: [
              { name: 'Home', attributes: { path: '/'} },
              { name: 'Profile', attributes: { path: '/perfil/:id'} },
              { name: 'Explorer', attributes: { path: '/explorador'} },
              { name: 'ApiModule', attributes: { path: '/api'} },
              { name: 'Gallery', attributes: { path: '/galeria'} },
              { name: 'Bitacora', attributes: { path: '/bitacora'} },
              { name: 'RenderTree', attributes: { path: '/renderizado'} },
            ],
          },
        ],
      },
    ],
  },
];

function RenderTree() {
  const containerRef = useRef(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

  useEffect(() => {
    function update() {
      if (containerRef.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        setDimensions({ width: bounds.width, height: Math.max(420, bounds.height) });
        setTranslate({ x: bounds.width / 2, y: 60 });
      }
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <main className="render-tree-page">
      <Link to="/" className="back-link">
        ← Volver al Dashboard
      </Link>

      <div className="section-header">
        <span className="section-tag">ARQUITECTURA</span>
        <h1>Árbol de Renderizado (Diagrama de Componentes)</h1>
        {/* <p>
          Visualización de la jerarquía de componentes React y cómo React Router
          gestiona las distintas vistas de la aplicación.
        </p> */}
      </div>

      <section className="render-tree-diagram-section">
        <div className="mermaid-container" ref={containerRef}>
          <div id="treeWrapper" style={{ width: '100%', height: dimensions.height + 'px' }}>
            <Tree
              data={treeData}
              translate={translate}
              orientation="vertical"
              pathFunc="step"
              allowForeignObjects={true}
              nodeSize={{ x: 200, y: 120 }}
              separation={{ siblings: 1, nonSiblings: 2 }}
              zoomable={true}
              renderCustomNodeElement={(({ nodeDatum, toggleNode}) => (
                <g>
                  <circle r={20} fill="#7c3aed" stroke="#fff" onClick={toggleNode} />
                  <text fill="#fff" strokeWidth="0" x="25" y="5" style={{ fontSize: '16px', fontFamily: 'sans-serif' }}>
                    {nodeDatum.name}
                  </text>

                  {Object.entries(nodeDatum.attributes || {}).map(
                    ([key, value], index) => (
                      <text
                        key={key}
                        x="25"
                        y={30 + index * 30}
                        fill="#666"
                        fontSize="16"
                        strokeWidth="0"
                      >
                        {key}: {value}
                      </text>
                    )
                  )}
                </g>
              ))}
            />
          </div>
        </div>
      </section>

      <section className="render-tree-details">
        <h2>Estructura y Componentes</h2>

        <div className="details-columns">
          <article className="detail-card">
            <h3>🎯 App (Raíz)</h3>
            <p>
              Es el componente principal que envuelve toda la aplicación en
              <code>BrowserRouter</code>. Define las rutas principales usando
              <code>Routes</code> y <code>Route</code>.
            </p>
          </article>

          <article className="detail-card">
            <h3>📐 Layout (Contenedor)</h3>
            <p>
              Organiza la UI en dos partes: la <code>Sidebar</code> fija en el
              lado izquierdo y el <code>Outlet</code> en el área central donde
              se renderizan las páginas según la ruta activa.
            </p>
          </article>

          <article className="detail-card">
            <h3>🧭 Sidebar (Navegación)</h3>
            <p>
              Componente de navegación con <code>NavLink</code> que permite
              acceder a todas las secciones. Mantiene estado visual de la ruta
              activa y proporciona acceso permanente al menú.
            </p>
          </article>

          <article className="detail-card">
            <h3>🔄 Outlet (Router)</h3>
            <p>
              Placeholder de React Router que renderiza el componente de página
              correspondiente a la ruta actual. Permite transiciones entre vistas
              sin recargar la aplicación.
            </p>
          </article>

          <article className="detail-card">
            <h3>🏠 Home (Dashboard)</h3>
            <p>
              Página principal con animaciones, grid de miembros del equipo y
              accesos rápidos. Utiliza datos de <code>miembros.json</code> para
              renderización dinámica.
            </p>
          </article>

          <article className="detail-card">
            <h3>👤 Profile (Página Individual)</h3>
            <p>
              Renderizada con parámetro dinámico <code>/perfil/:id</code>.
              Muestra barras de progreso, carrusel de proyectos e iconos de
              tecnologías.
            </p>
          </article>

          <article className="detail-card">
            <h3>🔍 Explorer (Datos Locales)</h3>
            <p>
              Implementa búsqueda y filtrado en tiempo real sobre
              <code>herramientas.json</code>. Componentes: input de búsqueda y
              grid de tarjetas.
            </p>
          </article>

          <article className="detail-card">
            <h3>🌐 ApiModule (Datos Externos)</h3>
            <p>
              Consume API pública con manejo de estados de carga y error.
              Incluye sistema de paginación con controles anterior/siguiente.
            </p>
          </article>

          <article className="detail-card">
            <h3>🖼️ Gallery (Lightbox)</h3>
            <p>
              Visualizador de imágenes en grid con funcionalidad de zoom modal,
              navegación interna y cierre mediante ESC. Renderiza fotos de los
              miembros del equipo.
            </p>
          </article>

          <article className="detail-card">
            <h3>📋 Bitacora (Timeline)</h3>
            <p>
              Documentación del proceso de desarrollo con timeline interactivo,
              roles del equipo y justificación de la migración a React. Muestra
              decisiones y hitos.
            </p>
          </article>

          <article className="detail-card">
            <h3>🌳 RenderTree (Esta página)</h3>
            <p>
              Representa gráficamente la arquitectura del proyecto. Usa
              <code>react-d3-tree</code> para mostrar la jerarquía de
              componentes y las conexiones entre rutas.
            </p>
          </article>
        </div>
      </section>

      <section className="benefits">
        <h2>Beneficios de esta Arquitectura</h2>
        <ul className="benefits-list">
          <li>
            <strong>Modularidad:</strong> Cada página es un componente independiente
            que puede ser mantenido y testeado por separado.
          </li>
          <li>
            <strong>Reutilización:</strong> Componentes como <code>Sidebar</code>,
            <code>Footer</code> y <code>Layout</code> se reutilizan en todas las rutas.
          </li>
          <li>
            <strong>Escalabilidad:</strong> Nuevas rutas se agregan fácilmente sin
            afectar componentes existentes.
          </li>
          <li>
            <strong>UX Fluida:</strong> React Router permite navegación sin recargas de
            página, transiciones suaves y estado persistente.
          </li>
          <li>
            <strong>Separación de Responsabilidades:</strong> Layout maneja estructura,
            páginas manejan lógica específica, componentes manejan UI.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default RenderTree;
