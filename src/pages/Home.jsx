import { Link } from 'react-router-dom';
import equipoData from '../data/miembros.json';

function Home() {
  return (
    <section className="team-section fade-in">
      <div className="section-header">
        <span className="section-tag">EQUIPO</span>
        <h2>Nuestros Integrantes</h2>
        <p>Hacé clic en una tarjeta para conocer a cada miembro del equipo.</p>
      </div>

      <div className="team-grid">
        {equipoData.map((miembro) => (
          <Link to={`/perfil/${miembro.id}`} key={miembro.id} className="member-card">
            <div className="member-avatar">
              <div className="avatar-pixel av2">
                {miembro.isEmoji ? (
                  miembro.avatar
                ) : (
                  <img 
                    src={miembro.avatar} 
                    alt={`Avatar ${miembro.nombre}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                )}
              </div>
            </div>
            <div className="member-info">
              <h3>{miembro.nombre}</h3>
              <span className="member-role">{miembro.rol}</span>
              <div className="member-skills">
                {miembro.skills.map((skill, index) => (
                  <span key={index} className="tag">{skill}</span>
                ))}
              </div>
            </div>
            <span className="card-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;