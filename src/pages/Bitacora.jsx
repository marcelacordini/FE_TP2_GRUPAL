import { Link } from 'react-router-dom';

export default function Bitacora() {
  const timelineItems = [
  {
    date: 'SEMANA 1',
    title: 'Planificación inicial y estructura del TP1',
    description:
      'Se realizó la primera reunión del equipo para definir los objetivos del proyecto, la identidad visual y la distribución de tareas. Se creó el repositorio de GitHub y se diseñó la estructura base exigida por la cátedra, organizando archivos HTML, CSS, JavaScript e imágenes en directorios independientes. También se definió la temática general del sitio y la información que mostraría cada integrante.',
    tags: ['decision', 'decision'],
    tagTexts: ['Inicio del proyecto', 'Estructura base'],
  },
  {
    date: 'SEMANA 2',
    title: 'Diseño visual y desarrollo de páginas individuales',
    description:
      'Se implementó la primera versión estática del sitio utilizando HTML, CSS y JavaScript. Se definió la paleta de colores, las tipografías de Google Fonts y el diseño de las tarjetas personales. Cada integrante desarrolló su perfil incorporando información personal, habilidades, gustos e interacciones dinámicas requeridas por el TP1.',
    tags: ['decision', 'change'],
    tagTexts: ['Diseño UI', 'Perfiles individuales'],
  },
  {
    date: 'SEMANA 3',
    title: 'Responsive Design y mejoras de experiencia',
    description:
      'Se adaptó el sitio para distintos tamaños de pantalla mediante media queries y breakpoints. Durante las pruebas surgieron problemas de distribución y navegación en dispositivos móviles, que fueron corregidos reorganizando el layout y optimizando los estilos. También se incorporaron mejoras visuales y efectos de interacción para enriquecer la experiencia del usuario.',
    tags: ['problem', 'change'],
    tagTexts: ['Problema: responsive', 'Optimización UX'],
  },
  {
    date: 'SEMANA 4',
    title: 'Análisis de migración y rediseño arquitectónico',
    description:
      'Con la publicación del TP2 se analizó la evolución necesaria para transformar el proyecto estático en una aplicación React. Se identificaron componentes reutilizables, se diseñó el árbol de renderizado y se planificó una arquitectura basada en componentes para facilitar el mantenimiento y la escalabilidad del sistema.',
    tags: ['decision', 'decision'],
    tagTexts: ['Plan React', 'Arquitectura SPA'],
  },
  {
    date: 'SEMANA 5',
    title: 'Migración a React y React Router',
    description:
      'Se creó un nuevo repositorio independiente para el TP2 y se inició la migración del proyecto. Las páginas HTML fueron convertidas en componentes React y la navegación tradicional fue reemplazada por React Router. Esta transición permitió centralizar la gestión de rutas y reducir la duplicación de código existente en la versión original.',
    tags: ['change', 'decision'],
    tagTexts: ['Migración React', 'React Router'],
  },
  {
    date: 'SEMANA 5',
    title: 'Dashboard, componentes dinámicos e integración de datos',
    description:
      'Se desarrolló la nueva interfaz tipo Dashboard con Sidebar fija como eje principal de navegación. Además, se implementaron componentes reutilizables para perfiles, barras de habilidades, galerías y tarjetas. Se incorporó la lectura de datos desde archivos JSON, búsqueda dinámica, filtrado en tiempo real y consumo de APIs externas con manejo de estados de carga y error.',
    tags: ['change', 'change'],
    tagTexts: ['Componentes React', 'Datos dinámicos'],
  },
  {
    date: 'SEMANA 5',
    title: 'Documentación, pruebas y preparación de entrega',
    description:
      'Se realizaron pruebas funcionales y de navegación para validar el comportamiento de la SPA. Finalmente se actualizó la bitácora, el README y la documentación técnica para reflejar la evolución completa del proyecto, destacando las decisiones tomadas, los problemas resueltos y los beneficios obtenidos tras la migración desde HTML/CSS/JS hacia React.',
    tags: ['decision', 'change'],
    tagTexts: ['README actualizado', 'Evolución documentada'],
  },
];

  return (
    <main className="bitacora-page">
      <Link to="/" className="back-link">
        ← Volver al equipo
      </Link>

      <header className="bitacora-header">
        <span className="section-tag">PROCESO DE DESARROLLO</span>
        <h1>Bitácora del Proyecto</h1>
        <p>Registro del proceso de trabajo, decisiones y aprendizajes durante el desarrollo del TP2.</p>
      </header>

      <section className="team-details">
        <div className="team-summary">
          <h2>Roles del equipo</h2>
          <ul>
            <li>Adriana — Full Stack Dev y UX/UI.</li>
            <li>Lucas — Backend .NET y APIs.</li>
            <li>Marcela — Data Analyst y visualización.</li>
            <li>Enrique — Soporte Hardware e infraestructura.</li>
          </ul>
        </div>
        <div className="workflow-summary">
          <h2>Flujo de trabajo</h2>
          <ul>
            <li>Rama `main` para producción.</li>
            <li>Ramas `feature/*` para nuevas páginas y ajustes.</li>
            <li>Revisión de código antes de merge y pruebas manuales en cada cambio.</li>
          </ul>
        </div>
      </section>

      <section className="migration-section">
        <h2>Justificación de migración a React</h2>
        <p>
          Este proyecto evolucionó desde una versión estática en HTML, CSS y JavaScript hacia una aplicación React
          con arquitectura de componentes. El cambio permitió:
        </p>
        <ul>
          <li>Separar la UI en piezas reutilizables como la `Sidebar`, las tarjetas de miembro y el lightbox.</li>
          <li>Mantener el estado de búsqueda y paginación de forma declarativa con hooks de React.</li>
          <li>Gestionar rutas dinámicas para páginas individuales de integrantes usando React Router.</li>
          <li>Facilitar la extensión futura del proyecto sin duplicar lógica ni rehacer la estructura HTML.</li>
        </ul>
        <p>
          Esta migración también mejoró la mantenibilidad: cada sección ahora es una página independiente
          y el contenido técnico/documental se centraliza en componentes reutilizables y estilos globales.
        </p>
      </section>

      <div className="timeline">
        {timelineItems.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="timeline-tags">
                {item.tagTexts.map((text, tagIdx) => (
                  <span key={tagIdx} className={`tag tag-${item.tags[tagIdx]}`}>
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}