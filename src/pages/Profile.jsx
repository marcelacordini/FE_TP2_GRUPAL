import { useParams, Link } from 'react-router-dom';
import equipoData from '../data/miembros.json';
// Importamos los estilos del TP1 que guardaste en assets
import '../assets/css/member.css'; 

function Profile() {
  const { id } = useParams(); // Captura el id de la URL

  // Busca al miembro que coincida con el id de la URL
  const miembro = equipoData.find((m) => m.id === id);

  // Si alguien escribe una URL que no existe
  if (!miembro) {
    return (
      <div className="fade-in">
        <h2>Integrante no encontrado</h2>
        <Link to="/">← Volver al Home</Link>
      </div>
    );
  }

  return (
    <div className="member-page fade-in">
      <Link to="/" className="back-link">← Volver al equipo</Link>

      <header className="profile-header">
        <div className="profile-avatar-wrap">
          <div className="profile-avatar av2">
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
          <div className="profile-location">
            <span>📍</span> {miembro.ubicacion}
          </div>
          <div className="profile-badges">
            <span className="tag">{miembro.edad} años</span>
            {miembro.skills.map((skill, index) => (
              <span key={index} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      </header>

      <div className="content-grid" style={{ marginTop: '2rem' }}>
        {/* Tarjeta de Sobre Mí */}
        <div className="info-card">
          <div className="card-title"><span>👤</span> Sobre mí</div>
          <p style={{ color: 'var(--text-muted)', fontSize: '.9rem', lineHeight: '1.7' }}>
            {miembro.bio}
          </p>
        </div>

        {/* Tarjeta de Habilidades (Componentes animados requeridos) */}
        <div className="info-card">
          <div className="card-title"><span>⚡</span> Habilidades Reales</div>
          <div className="skills-list">
            {miembro.skillsDetailed?.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  {/* Usamos style dinámico para la barra de progreso */}
                  <div className="skill-fill" style={{ width: `${skill.level}%`, height: '100%', background: '#7c3aed', transition: 'width 1s ease-in-out' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;