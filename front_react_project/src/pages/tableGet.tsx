import { useEffect, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResInterface, Usuario } from "../interfaces/reqResInterface";

export default function TableUsers() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  useEffect(() => {
    reqResApi
      .get<ReqResInterface>("/users")
      .then((res) => {
        setUsuarios(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id.toString()}>
        <td>
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{ width: 50, borderRadius: 99 }}
          />
        </td>
        <td>{usuario.first_name}</td>
        <td>{usuario.email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Listar componentes</h3>
      <table>
        <thead>
          <tr>
            <th>Campo1</th>
            <th>Campo2</th>
            <th>Campo3</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
    </>
  );
}
