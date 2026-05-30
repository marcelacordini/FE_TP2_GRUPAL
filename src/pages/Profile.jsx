import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import equipoData from '../data/miembros.json';
import '../assets/css/member.css';

function Profile() {
  const { id } = useParams();
  const miembro = equipoData.find((m) => m.id === id);

  // Estado para controlar qué proyecto del carrusel está visible
  const [indexProyecto, setIndexProyecto] = useState(0);

  if (!miembro) {
    return (
      <div className="fade-in">
        <h2>Integrante no encontrado</h2>
        <Link to="/">← Volver al Home</Link>
      </div>
    );
  }

  // Funciones para avanzar y retroceder en el carrusel manualmente
  const siguienteProyecto = () => {
    if (miembro.proyectos) {
      setIndexProyecto((prev) => (prev + 1) % miembro.proyectos.length);
    }
  };

  const anteriorProyecto = () => {
    if (miembro.proyectos) {
      setIndexProyecto((prev) => (prev - 1 + miembro.proyectos.length) % miembro.proyectos.length);
    }
  };

  return (
    <div className="member-page fade-in">
      <Link to="/" className="back-link">← Volver al equipo</Link>

      <header className="profile-header">
        <div className="profile-avatar-wrap">
          <div className={`profile-avatar ${miembro.isEmoji ? 'emoji' : 'photo'}`}>
            {miembro.isEmoji ? (
              <span style={{ fontSize: '4rem' }}>{miembro.avatar}</span>
            ) : (
              <img src={`/${miembro.avatar}`} alt={miembro.nombre} className="avatar-image" />
            )}
          </div>
          <div className="avatar-ring"></div>
        </div>

        <div className="profile-meta">
          <h1 className="profile-name">{miembro.nombre}</h1>
          <span className="profile-role">// {miembro.rol}</span>
          <div className="profile-location"><span>📍</span> {miembro.ubicacion}</div>
          <div className="profile-badges">
            <span className="tag">{miembro.edad} años</span>
          </div>
          
          {/* BOTONES DE REDES SOCIALES (Efecto Hover Requerido) */}
          <div className="profile-socials" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
            {miembro.redes?.map((red, i) => (
              <a key={i} href={red.url} target="_blank" rel="noreferrer" className="btn-social">
                {red.nombre}
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="content-grid" style={{ marginTop: '2rem' }}>
        <div className="info-card">
          <div className="card-title"><span>👤</span> Sobre mí</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '.9rem', lineHeight: '1.7' }}>{miembro.bio}</p>
          
          {/* TECH STACK (Mínimo 5 iconos con efectos visuales requeridos) */}
          <div style={{ marginTop: '1.5rem' }}>
            <div className="card-sub-title" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Tech Stack</div>
            <div className="tech-icons-container">
              {miembro.techStack?.map((tech, i) => (
                <span key={i} className="tech-icon-item">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* BARRAS DE PROGRESO DE HABILIDADES */}
        <div className="info-card">
          <div className="card-title"><span>⚡</span> Habilidades</div>
          <div className="skills-list">
            {miembro.skillsDetailed?.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CARRUSEL DE PROYECTOS INTERACTIVO (Requerimiento Crítico) */}
        {miembro.proyectos && miembro.proyectos.length > 0 && (
          <div className="info-card project-carousel-card" style={{ gridColumn: '1 / -1' }}>
            <div className="card-title"><span>🎬</span> Carrusel de Proyectos de {miembro.nombre}</div>
            
            <div className="carousel-wrapper">
              <button onClick={anteriorProyecto} className="carousel-btn">◀</button>
              
              <div className="carousel-item-content">
                <span className="tag project-tag">{miembro.proyectos[indexProyecto].tag}</span>
                <h3>{miembro.proyectos[indexProyecto].titulo}</h3>
                <p>{miembro.proyectos[indexProyecto].descripcion}</p>
              </div>
              
              <button onClick={siguienteProyecto} className="carousel-btn">▶</button>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.8rem', color: '#a0a5c2' }}>
              Proyecto {indexProyecto + 1} de {miembro.proyectos.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;