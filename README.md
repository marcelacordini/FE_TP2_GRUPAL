# AppMinds - Dashboard Tech 🚀
### Trabajo Práctico N°2 - Desarrollo Front End (React JS)

Bienvenido al repositorio oficial del **TP2 de AppMinds**. En esta entrega, migramos nuestra plataforma estática del TP1 hacia una Single Page Application (SPA) modular, robusta e interactiva utilizando **React** y **Vite**.

El sistema funciona como un Dashboard integral orientado al ecosistema tecnológico, implementando rutas dinámicas, consumo de APIs asincrónicas, manejo de estados globales/locales y efectos visuales avanzados.

---

## 🛠️ Tecnologías y Herramientas Utilizadas

* **Core:** React JS (v18+)
* **Build Tool:** Vite (Ultra rápido)
* **Enrutamiento:** React Router Dom (v6)
* **Estilos:** CSS3 Modular con variables globales y arquitectura Cyberpunk Dark.
* **Control de Versiones:** Git & GitHub (Estructura de ramas por integrante).

---

## 🌟 Características y Módulos Desarrollados

El proyecto cumple al 100% con los requerimientos obligatorios de la cátedra:

### 1. 👥 Home & Perfil Profesional Dinámico (`useParams`)
* **Grilla Simétrica:** Presentación estética del equipo en la pantalla de inicio.
* **Rutas Dinámicas:** Se utiliza el hook `useParams` para renderizar de forma 100% dinámica el perfil de cada integrante desde un archivo JSON centralizado (`miembros.json`), evitando la duplicación de páginas.
* **Componentes Interactivos:** * **Carrusel de Proyectos:** Navegación manual (Anterior/Siguiente) de los trabajos de cada miembro gestionada con `useState`.
  * **Barras de Progreso Animadas:** Indicadores visuales de habilidades técnicas.
  * **Efectos Avanzados:** Efecto hover con escalado cúbico en redes sociales y flotación en el *Tech Stack*.

### 2. 🔍 Explorador de Datos Locales (Filtro en Tiempo Real)
* **Dataset Completo:** Manipulación de un JSON con 20 herramientas tecnológicas clave para desarrollo y analítica de datos.
* **Filtro Combinado:** Caja de búsqueda por texto e inputs controlados combinados con botones de categorías que filtran la interfaz de manera reactiva e instantánea sin recargar el navegador.

### 3. 🌐 Módulo de API Externa con Paginación Asincrónica
* **Consumo de API:** Conexión en tiempo real con la API de *Rick and Morty* utilizando `useEffect` y promesas asincrónicas.
* **Paginación Interactiva:** Botones de control manual para navegar por las diferentes páginas de la API, optimizando la carga de datos con un *Spinner* de carga animado.

### 4. 🖼️ Galería Interactiva con Efecto Lightbox
* Cuadrícula de imágenes de diseño de interfaces.
* **Efecto Lightbox Nativo:** Al hacer clic en cualquier tarjeta, se despliega un modal flotante en pantalla completa con desenfoque de fondo (`backdrop-filter`) y botón de cierre estructurado de forma condicional en React.

### 5. 📝 Bitácora de Viaje
* Espacio dedicado a la documentación grupal del proceso de migración, control de versiones y desafíos superados durante el desarrollo del TP2.

---

## 🚀 Instalación y Ejecución Local

Para correr este proyecto en tu computadora, sigue estos sencillos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/marcelacordini/FE_TP2_GRUPAL.git](https://github.com/marcelacordini/FE_TP2_GRUPAL.git)