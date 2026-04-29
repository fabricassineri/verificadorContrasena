// Componente pequeño y reutilizable para cada requisito de la lista
const RequisitoItem = ({ cumplido, texto }) => (
  // Recibe si está cumplido y el texto a mostrar
  <li className={cumplido ? "cumplido" : "pendiente"}>
    {/* Cambia la clase según si cumple o no */}
    <span className="icono-check">
      {cumplido ? "✅" : "❌"}
      {/* Ícono dinámico según el estado */}
    </span>
    {texto} {/* Texto del requisito */}
  </li>
);

export default function ListaRequisitos({ contrasena }) {
  // Recibe la contraseña desde el componente padre

  // Verificaciones simples
  const cumpleLongitud = contrasena.length >= 8; // Tiene al menos 8 caracteres
  const tieneMayuscula = /[A-Z]/.test(contrasena); // Tiene alguna letra mayúscula
  const tieneMinuscula = /[a-z]/.test(contrasena); // Tiene alguna letra minúscula
  const tieneNumero = /[0-9]/.test(contrasena); // Tiene algún número
  const tieneEspecial = /[^A-Za-z0-9]/.test(contrasena); // Tiene algún carácter especial

  return (
    <ul className="lista-requisitos"> {/* Lista de requisitos */}
      <RequisitoItem cumplido={cumpleLongitud} texto="Mínimo 8 caracteres" />
      <RequisitoItem cumplido={tieneMayuscula} texto="Incluye una mayúscula" />
      <RequisitoItem cumplido={tieneMinuscula} texto="Incluye una minúscula" />
      <RequisitoItem cumplido={tieneNumero} texto="Incluye un número" />
      <RequisitoItem cumplido={tieneEspecial} texto="Incluye un carácter especial" />
      {/* Cada RequisitoItem recibe si cumple y el texto, evita repetir código */}
    </ul>
  );
}
