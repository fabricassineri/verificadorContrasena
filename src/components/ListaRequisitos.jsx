const RequisitoItem = ({ cumplido, texto }) => (
  <li className={cumplido ? "cumplido" : "pendiente"}>
    <span className="icono-check">{cumplido ? "✅" : "❌"}</span>
    {texto}
  </li>
);

export default function ListaRequisitos({ contrasena }) {
  const cumpleLongitud = contrasena.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(contrasena);
  const tieneMinuscula = /[a-z]/.test(contrasena);
  const tieneNumero = /[0-9]/.test(contrasena);
  const tieneEspecial = /[^A-Za-z0-9]/.test(contrasena);

  return (
    <ul className="lista-requisitos">
      <RequisitoItem cumplido={cumpleLongitud} texto="Mínimo 8 caracteres" />
      <RequisitoItem cumplido={tieneMayuscula} texto="Incluye una mayúscula" />
      <RequisitoItem cumplido={tieneMinuscula} texto="Incluye una minúscula" />
      <RequisitoItem cumplido={tieneNumero} texto="Incluye un número" />
      <RequisitoItem cumplido={tieneEspecial} texto="Símbolo especial" />
    </ul>
  );
}
