import { useState } from "react";
import EntradaContrasena from "./components/EntradaContrasena";
import BarraSeguridad from "./components/BarraSeguridad";
import ListaRequisitos from "./components/ListaRequisitos";
import Generador from "./components/Generador";
import "./App.css";

function calcularSeguridad(contrasena) {
  if (contrasena.length === 0) return null;

  const validaciones = {
    largo: contrasena.length >= 8,
    mayuscula: /[A-Z]/.test(contrasena),
    minuscula: /[a-z]/.test(contrasena),
    numero: /[0-9]/.test(contrasena),
    especial: /[^A-Za-z0-9]/.test(contrasena),
  };

  const puntos = Object.values(validaciones).filter(Boolean).length;

  if (puntos <= 2) return "debil";
  if (puntos <= 3) return "media";
  return "fuerte";
}

export default function App() {
  const [contrasena, setContrasena] = useState("");
  const [copiado, setCopiado] = useState(false);
  const [mostrarGenerador, setMostrarGenerador] = useState(false);

  const nivelSeguridad = calcularSeguridad(contrasena);

  const copiarContrasena = () => {
    if (contrasena === "") return;
    navigator.clipboard.writeText(contrasena);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const recibirContrasenaGenerada = (nuevaContrasena) => {
    setContrasena(nuevaContrasena);
  };

  return (
    <div className="contenedor-app">
      <div className="tarjeta">
        <h1 className="titulo">Verificar Contraseña</h1>
        <p className="subtitulo">Evaluar y generar contraseñas seguras</p>

        <EntradaContrasena
          contrasena={contrasena}
          alCambiar={setContrasena}
        />

        {contrasena.length > 0 && (
          <div>
            <BarraSeguridad nivelSeguridad={nivelSeguridad} />
            <ListaRequisitos contrasena={contrasena} />
            <div className="fila-copia">
              <button onClick={copiarContrasena}>
                {copiado ? "✅ Copiado" : "Copiar contraseña"}
              </button>
            </div>
          </div>
        )}

        <button
          className="btn-toggle-generador"
          onClick={() => setMostrarGenerador(!mostrarGenerador)}
        >
          {mostrarGenerador ? "Ocultar generador" : "Mostrar generador"}
        </button>

        {mostrarGenerador && (
          <Generador alGenerar={recibirContrasenaGenerada} />
        )}
      </div>
    </div>
  );
}
