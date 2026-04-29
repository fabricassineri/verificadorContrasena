import { StrictMode } from "react"; // Importa StrictMode (sirve para ver errores mientras desarrollamos)
import { createRoot } from "react-dom/client"; // Función para mostrar la app en el navegador
import "./App.css"; // Importa los estilos
import App from "./App.jsx"; // Importa el componente principal

const root = document.getElementById("root"); // Busca el div con id "root" en el HTML

createRoot(root).render( // Crea la raíz de la app y la renderiza
  <StrictMode> {/* Modo estricto (solo ayuda en desarrollo) */}
    <App /> {/* Muestra el componente principal */}
  </StrictMode>
);
