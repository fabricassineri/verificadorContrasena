import { useState } from "react"; // Hook para manejar estados

// Tipos de caracteres disponibles
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const especiales = "!@#$%^&*()_+-=[]{}|;:,.<>?";
// Más especiales que antes, igual que el código de referencia

export default function Generador({ alGenerar }) {
  // Recibe una función del componente padre

  const [config, setConfig] = useState({
    longitud: 12, // Longitud inicial
    usarMinusculas: true,
    usarMayusculas: true,
    usarNumeros: true,
    usarEspeciales: false,
  });
  // Un solo objeto de configuración en lugar de 5 estados separados
  // Más prolijo y fácil de manejar

  const [error, setError] = useState(""); // Guarda mensajes de error

  function generarContrasena() { // Función que genera la contraseña
    let conjunto = ""; // Acá se juntan todos los caracteres posibles

    if (config.usarMinusculas) conjunto += minusculas;
    if (config.usarMayusculas) conjunto += mayusculas;
    if (config.usarNumeros) conjunto += numeros;
    if (config.usarEspeciales) conjunto += especiales;

    if (conjunto === "") { // Si no eligió ninguna opción
      setError("Elegí al menos una opción");
      return; // Corta la ejecución
    }

    setError(""); // Limpia el error

    let resultado = "";
    for (let i = 0; i < config.longitud; i++) { // Genera carácter por carácter
      let indice = Math.floor(Math.random() * conjunto.length); // Índice aleatorio
      resultado += conjunto[indice]; // Agrega el carácter al resultado
    }

    alGenerar(resultado); // Devuelve la contraseña al componente padre
  }

  return (
    <div className="panel-generador">
      <h3>Configurar generador</h3>

      {/* Longitud */}
      <div className="control-longitud">
        <p>Longitud: {config.longitud}</p>
        <input
          type="range"
          min="4"
          max="32"
          value={config.longitud}
          onChange={(e) => setConfig({ ...config, longitud: Number(e.target.value) })}
          // Spread operator: copia toda la config y solo cambia longitud
        />
      </div>

      {/* Opciones de caracteres */}
      <div className="opciones-caracteres">
        <label>
          <input
            type="checkbox"
            checked={config.usarMinusculas}
            onChange={(e) => setConfig({ ...config, usarMinusculas: e.target.checked })}
            // Copia la config y cambia solo usarMinusculas
          />
          Minúsculas
        </label>

        <label>
          <input
            type="checkbox"
            checked={config.usarMayusculas}
            onChange={(e) => setConfig({ ...config, usarMayusculas: e.target.checked })}
          />
          Mayúsculas
        </label>

        <label>
          <input
            type="checkbox"
            checked={config.usarNumeros}
            onChange={(e) => setConfig({ ...config, usarNumeros: e.target.checked })}
          />
          Números
        </label>

        <label>
          <input
            type="checkbox"
            checked={config.usarEspeciales}
            onChange={(e) => setConfig({ ...config, usarEspeciales: e.target.checked })}
          />
          Especiales
        </label>
      </div>

      {error !== "" && <p className="texto-error">{error}</p>} {/* Muestra error si hay */}

      <button className="btn-generar" onClick={generarContrasena}>
        Generar contraseña
      </button> {/* Botón que dispara la generación */}
    </div>
  );
}
