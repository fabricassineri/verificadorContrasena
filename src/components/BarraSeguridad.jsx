const CONFIG_NIVEL = {
  debil:  { texto: "Poco segura", color: "#ff4d4d", barrasActivas: 1 },
  media:  { texto: "Segura",      color: "#ffa500", barrasActivas: 2 },
  fuerte: { texto: "Muy segura",  color: "#2ecc71", barrasActivas: 3 },
};

export default function BarraSeguridad({ nivelSeguridad }) {
  if (!nivelSeguridad) return null;

  const { texto, color, barrasActivas } = CONFIG_NIVEL[nivelSeguridad];

  return (
    <div className="contenedor-seguridad">
      <div className="barras-seguridad">
        <div
          className="barra"
          style={{ backgroundColor: barrasActivas >= 1 ? color : "gray" }}
        ></div>
        <div
          className="barra"
          style={{ backgroundColor: barrasActivas >= 2 ? color : "gray" }}
        ></div>
        <div
          className="barra"
          style={{ backgroundColor: barrasActivas >= 3 ? color : "gray" }}
        ></div>
      </div>
      <p style={{ color, fontWeight: "bold", textAlign: "center" }}>{texto}</p>
    </div>
  );
}
