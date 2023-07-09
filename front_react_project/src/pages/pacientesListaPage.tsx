import { useEffect, useState } from "react";
import { PacienteAPI } from "../api/pacientesAPI";
import { PacienteInterface } from "../interfaces/pacientesInterface";

export default function TablePacientes() {
  const [pacientes, setPacientes] = useState<PacienteInterface[]>([]);
  useEffect(() => {
    PacienteAPI
      .get<PacienteInterface>("/pacientes")
      .then((res) => {
        console.log(res)
        setPacientes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderItem = (paciente: PacienteInterface) => {
    return (
      <tr key={paciente.cedula.toString()}>
        <td>{paciente.nombre}</td>
        <td>{paciente.apellido}</td>
        <td>{paciente.fechaNacimiento.toString()}</td>
        <td>{paciente.telefono}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Listar componentes</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>{pacientes.map(renderItem)}</tbody>
      </table>
    </>
  );
}
