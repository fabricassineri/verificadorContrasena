import { useState } from "react";

export default function EntradaContrasena({ contrasena, alCambiar }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="contenedor-input">
      <input
        className="input-contrasena"
        type={mostrar ? "text" : "password"}
        value={contrasena}
        onChange={(e) => alCambiar(e.target.value)}
        placeholder="Ingresá tu contraseña..."
        autoComplete="off"
      />
      <button
        className="btn-toggle-mostrar"
        onClick={() => setMostrar(!mostrar)}
        type="button"
      >
        {mostrar ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}
