import { useState } from "react"; // Importamos useState para manejar estados

export default function EntradaContrasena({ contrasena, alCambiar }) {
  // Este componente recibe:
  // - contrasena: el valor actual del input
  // - alCambiar: función para actualizar la contraseña

  const [mostrar, setMostrar] = useState(false);
  // Estado que indica si la contraseña se muestra o no
  // false = oculta, true = visible

  return (
    <div className="contenedor-input"> {/* Contenedor del input y el botón */}
      <input
        className="input-contrasena"
        type={mostrar ? "text" : "password"}
        // Si mostrar es true → se ve el texto
        // Si es false → se oculta (modo password)
        value={contrasena} // El valor del input viene del componente padre
        onChange={(e) => alCambiar(e.target.value)}
        // Cada vez que el usuario escribe, actualiza la contraseña en el padre
        placeholder="Ingresá tu contraseña..."
        autoComplete="off" // Evita que el navegador autocomplete
      />

      <button
        className="btn-toggle-mostrar"
        onClick={() => setMostrar(!mostrar)} // Invierte el estado (true↔false)
        type="button" // Evita que el botón recargue la página
        title={mostrar ? "Ocultar" : "Mostrar"} // Tooltip al pasar el mouse
      >
        {mostrar ? "Ocultar" : "Mostrar"} {/* Texto del botón según el estado */}
      </button>
    </div>
  );
}
