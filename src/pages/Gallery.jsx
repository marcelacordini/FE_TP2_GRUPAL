import { useState } from 'react';

function Gallery() {
  // Estado para guardar la imagen que se abre en pantalla completa
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  // Array de imágenes estéticas de tecnología, código y diseño UI/UX
  const imagenesGaleria = [
    { id: 1, url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600', titulo: 'Desarrollo Frontend', desc: 'Escribiendo componentes modulares y limpios en React.' },
    { id: 2, url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600', titulo: 'Análisis de Datos', desc: 'Procesamiento de grandes volúmenes de información y consultas SQL.' },
    { id: 3, url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600', titulo: 'Diseño de Interfaz (UI)', desc: 'Prototipado de pantallas y sistemas de diseño colaborativos en Figma.' },
    { id: 4, url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600', titulo: 'Ciberseguridad', desc: 'Monitoreo de entornos seguros e infraestructura en la nube.' },
    { id: 5, url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600', titulo: 'Dashboards de BI', desc: 'Visualización de KPIs comerciales e informes interactivos.' },
    { id: 6, url: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600', titulo: 'Backend Architecture', desc: 'Construcción de APIs robustas y seguras con Node.js y Express.' }
  ];

  return (
    <div className="gallery-page fade-in">
      <div className="section-header">
        <span className="section-tag">GALERÍA INTERACTIVA</span>
        <h2>Portafolio Visual AppMinds</h2>
        <p>Hacé clic en cualquier tarjeta para abrir el visor Lightbox en pantalla completa.</p>
      </div>

      {/* CUADRÍCULA DE LA GALERÍA */}
      <div className="gallery-grid" style={{ marginTop: '2rem' }}>
        {imagenesGaleria.map((img) => (
          <div 
            key={img.id} 
            className="gallery-item"
            onClick={() => setImagenSeleccionada(img)}
          >
            <div className="gallery-img-wrap">
              <img src={img.url} alt={img.titulo} loading="lazy" />
              <div className="gallery-overlay">
                <span>🔍 Ampliar</span>
              </div>
            </div>
            <div className="gallery-item-info">
              <h3>{img.titulo}</h3>
              <p>{img.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* VENTANA FLOTANTE / LIGHTBOX (Render condicional) */}
      {imagenSeleccionada && (
        <div 
          className="lightbox-backdrop"
          onClick={() => setImagenSeleccionada(null)} // Cierra al hacer clic en el fondo oscuro
        >
          <div 
            className="lightbox-content fade-in"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic adentro de la tarjeta blanca
          >
            <button 
              className="lightbox-close"
              onClick={() => setImagenSeleccionada(null)}
            >
              ×
            </button>
            <img src={imagenSeleccionada.url} alt={imagenSeleccionada.titulo} className="lightbox-img" />
            <div className="lightbox-caption">
              <h3>{imagenSeleccionada.titulo}</h3>
              <p>{imagenSeleccionada.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;