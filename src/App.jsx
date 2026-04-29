import { useState } from "react"; // Hook para manejar estado (datos que cambian)
import EntradaContrasena from "./components/EntradaContrasena"; // Componente input
import BarraSeguridad from "./components/BarraSeguridad"; // Componente barra visual
import ListaRequisitos from "./components/ListaRequisitos"; // Lista de condiciones
import Generador from "./components/Generador"; // Generador de contraseñas
import "./App.css"; // Estilos

function calcularSeguridad(contrasena) { // Función que evalúa la seguridad
  if (contrasena.length === 0) return null; // Si está vacía, no muestra nada

  // Objeto con todas las verificaciones
  const validaciones = {
    largo: contrasena.length >= 8, // Mínimo 8 caracteres
    mayuscula: /[A-Z]/.test(contrasena), 
    minuscula: /[a-z]/.test(contrasena), 
    numero: /[0-9]/.test(contrasena), 
    especial: /[^A-Za-z0-9]/.test(contrasena), 
  };

  const puntos = Object.values(validaciones).filter(Boolean).length;
  // Cuenta cuántas condiciones se cumplen (filter(Boolean) filtra los true)

  if (puntos <= 2) return "debil"; // Pocas condiciones
  if (puntos <= 3) return "media"; // Intermedio
  return "fuerte"; // Muchas condiciones
}

export default function App() { // Componente principal
  const [contrasena, setContrasena] = useState(""); // Estado de la contraseña
  const [copiado, setCopiado] = useState(false); // Estado de copiado
  const [mostrarGenerador, setMostrarGenerador] = useState(false); // Mostrar/ocultar generador

  const nivelSeguridad = calcularSeguridad(contrasena); // Calcula seguridad

  function copiarContrasena() { // Función copiar
    if (contrasena === "") return; // Si está vacía, no hace nada

    navigator.clipboard.writeText(contrasena); // Copia al portapapeles

    setCopiado(true); // Activa mensaje

    setTimeout(function () { // Espera 3 segundos
      setCopiado(false); // Oculta mensaje
    }, 3000);
  }

  function recibirContrasenaGenerada(nuevaContrasena) { // Recibe contraseña del generador
    setContrasena(nuevaContrasena); // La guarda en el estado
  }

  return (
    <div className="contenedor-app"> {/* Contenedor principal */}
      <div className="tarjeta"> {/* Tarjeta visual */}
        <h1 className="titulo">Verificar Contraseña</h1> {/* Título */}

        <p className="subtitulo">
          Evaluar y generar contraseñas seguras
        </p> {/* Subtítulo */}

        <EntradaContrasena
          contrasena={contrasena} // Pasa el valor al hijo
          alCambiar={setContrasena} // Pasa la función para modificarlo
        />

        {contrasena.length > 0 && ( // Renderizado condicional
          <div>
            <BarraSeguridad nivelSeguridad={nivelSeguridad} /> {/* Muestra nivel */}

            <ListaRequisitos contrasena={contrasena} /> {/* Muestra checklist */}

            <div className="fila-copia">
              <button onClick={copiarContrasena}> {/* Botón copiar */}
                {copiado ? "✅ Copiado" : "Copiar contraseña"} {/* Texto dinámico */}
              </button>

              {copiado && <span className="texto-copiado">Copiado al portapapeles</span>} {/* Mensaje si copió */}
            </div>
          </div>
        )}

        <button
          className="btn-toggle-generador"
          onClick={function () {
            setMostrarGenerador(!mostrarGenerador); // Alterna mostrar generador
          }}
        >
          {mostrarGenerador
            ? "Ocultar generador"
            : "Mostrar generador"} {/* Texto dinámico */}
        </button>

        {mostrarGenerador && ( // Renderizado condicional
          <Generador alGenerar={recibirContrasenaGenerada} /> // Pasa función al hijo
        )}
      </div>
    </div>
  );
}
