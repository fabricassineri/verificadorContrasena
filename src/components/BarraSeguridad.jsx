// Configuración de cada nivel en un objeto, más prolijo que varios if
const CONFIG_NIVEL = {
  debil:  { texto: "Poco segura", color: "#ff4d4d", barrasActivas: 1 }, // Rojo
  media:  { texto: "Segura",      color: "#ffa500", barrasActivas: 2 }, // Naranja
  fuerte: { texto: "Muy segura",  color: "#2ecc71", barrasActivas: 3 }, // Verde
};

export default function BarraSeguridad({ nivelSeguridad }) {
  // Recibe por props el nivel de seguridad: "debil", "media" o "fuerte"

  if (!nivelSeguridad) return null;
  // Si no hay nivel (contraseña vacía), no muestra nada

  const { texto, color, barrasActivas } = CONFIG_NIVEL[nivelSeguridad];
  // Destructuring: saca texto, color y barrasActivas del objeto según el nivel

  return (
    <div className="contenedor-seguridad"> {/* Contenedor principal */}
      <div className="barras-seguridad"> {/* Contenedor de las 3 barras */}
        <div
          className="barra"
          style={{ backgroundColor: barrasActivas >= 1 ? color : "gray" }}
          // Primera barra: se pinta si hay al menos 1 activa
        ></div>

        <div
          className="barra"
          style={{ backgroundColor: barrasActivas >= 2 ? color : "gray" }}
          // Segunda barra: se pinta si hay al menos 2 activas
        ></div>

        <div
          className="barra"
          style={{ backgroundColor: barrasActivas >= 3 ? color : "gray" }}
          // Tercera barra: se pinta solo si hay 3 activas
        ></div>
      </div>

      <span style={{ color: color }}> {/* Texto con el color del nivel */}
        {texto}
      </span>
    </div>
  );
}
