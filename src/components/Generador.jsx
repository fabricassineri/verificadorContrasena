import { useState } from "react";

const minusculas = "abcdefghijklmnopqrstuvwxyz";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const especiales = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function Generador({ alGenerar }) {
  const [config, setConfig] = useState({
    longitud: 12,
    usarMinusculas: true,
    usarMayusculas: true,
    usarNumeros: true,
    usarEspeciales: false,
  });

  const [error, setError] = useState("");

  function generarContrasena() {
    let conjunto = "";
    if (config.usarMinusculas) conjunto += minusculas;
    if (config.usarMayusculas) conjunto += mayusculas;
    if (config.usarNumeros) conjunto += numeros;
    if (config.usarEspeciales) conjunto += especiales;

    if (conjunto === "") {
      setError("Elegí al menos una opción");
      return;
    }

    setError("");
    let resultado = "";
    for (let i = 0; i < config.longitud; i++) {
      const indice = Math.floor(Math.random() * conjunto.length);
      resultado += conjunto[indice];
    }
    alGenerar(resultado);
  }

  return (
    <div className="generador-container">
      <div className="control-longitud">
        <label>Longitud: {config.longitud}</label>
        <input
          type="range"
          min="6"
          max="32"
          value={config.longitud}
          onChange={(e) => setConfig({ ...config, longitud: parseInt(e.target.value) })}
        />
      </div>

      <div className="opciones-caracteres">
        <label>
          <input
            type="checkbox"
            checked={config.usarMinusculas}
            onChange={(e) => setConfig({ ...config, usarMinusculas: e.target.checked })}
          /> Minúsculas
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.usarMayusculas}
            onChange={(e) => setConfig({ ...config, usarMayusculas: e.target.checked })}
          /> Mayúsculas
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.usarNumeros}
            onChange={(e) => setConfig({ ...config, usarNumeros: e.target.checked })}
          /> Números
        </label>
        <label>
          <input
            type="checkbox"
            checked={config.usarEspeciales}
            onChange={(e) => setConfig({ ...config, usarEspeciales: e.target.checked })}
          /> Especiales
        </label>
      </div>

      {error && <p className="texto-error">{error}</p>}

      <button className="btn-generar" onClick={generarContrasena}>
        Generar contraseña
      </button>
    </div>
  );
}
