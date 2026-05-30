import { Link } from "react-router-dom";
import equipoData from "../data/miembros.json";
import { useEffect, useState, useMemo } from "react";

function PixelGrid() {
  useEffect(() => {
    const grid = document.getElementById("pixelGrid");
    if (!grid) return;

    const colors = [
      "rgba(124,58,237,0.8)",
      "rgba(168,85,247,0.6)",
      "rgba(124,58,237,0.3)",
      "rgba(34,211,238,0.4)",
      "rgba(236,72,153,0.3)",
      "rgba(255,255,255,0.05)",
      "rgba(255,255,255,0.02)",
      "transparent",
      "transparent",
      "transparent",
    ];

    const totalCells = 144;
    const cells = [];

    // Clear existing cells
    grid.innerHTML = "";

    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement("div");
      cell.className = "pixel-cell";
      const color = colors[Math.floor(Math.random() * colors.length)];
      cell.style.background = color;
      cell.dataset.index = i;
      grid.appendChild(cell);
      cells.push(cell);
    }

    function shimmer() {
      const randomIdx = Math.floor(Math.random() * totalCells);
      const cell = cells[randomIdx];
      const color = colors[Math.floor(Math.random() * colors.length)];
      cell.style.background = color;
      setTimeout(shimmer, 80 + Math.random() * 120);
    }
    shimmer();
  }, []);

  return <div className="pixel-grid" id="pixelGrid"></div>;
}

function Home() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const messages = [
    "👋 ¡Hola! Somos estudiantes de desarrollo web. Bienvenido a nuestro TP2.",
    "💜 Esta aplicación está construida con React, Vite y estilos modernos.",
    "🚀 Cada integrante tiene su propia página con interacciones dinámicas.",
    "✨ El diseño mezcla animaciones, navegación accesible y componentes reutilizables.",
  ];

  const handleSurpriseClick = () => {
    setShowMessage(true);
    setMessageIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <main>
            <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">✦ Trabajo Práctico 2</div>
          <h1 className="hero-title">
            Somos <span className="accent">AppMinds</span>
          </h1>
          <p className="hero-desc">
            Un equipo apasionado por el desarrollo web, el diseño y la tecnología. Construimos experiencias digitales modernas con React y navegación fluida.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={handleSurpriseClick}>
              <span>✦</span> Conócenos
            </button>
            <Link to="/bitacora" className="btn-ghost">
              Ver Bitácora →
            </Link>
          </div>
          {showMessage && (
            <div className="surprise-msg">
              {messages[messageIndex % messages.length]}
            </div>
          )}
        </div>
        <div className="hero-visual">
          <PixelGrid />
        </div>
      </section>
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
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
              </div>
            </div>
            <div className="member-info">
              <h3>{miembro.nombre}</h3>
              <span className="member-role">{miembro.rol}</span>
              <div className="member-skills">
                {miembro.skills.map((skill, index) => (
                  <span key={index} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <span className="card-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
    </main>
  );
}

export default Home;
