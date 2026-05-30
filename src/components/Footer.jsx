import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <p>AppMinds · TP2 · IFTS N°29 · 2026</p>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/bitacora">Bitácora</Link>
      </div>
    </footer>
  );
}
