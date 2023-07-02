import axios from "axios"


export function PatientForm (){

    const crearPaciente = async () => {
        try{
            const nuevoPaciente = {
                cedula:
                nombre:
                apellido:
                fecha:
                telefono:
            }
        }
    }

    return(
        <div>
            <form action="" method="post">
                <label>Cédula</label><br></br>
                <input type="number" name="cedula"/><br></br>
                <label>Nombre</label><br></br>
                <input type="string" name="nombre"/><br></br>
                <label>Apellido</label><br></br>
                <input type="string" name="apellido"/><br></br>
                <label>Fecha de Nacimiento</label><br></br>
                <input type="date" name="fecha"/><br></br>
                <label>Teléfono</label><br></br>
                <input type="numer" name="telefono"/><br></br><br></br>
                <button onClick={}>Registrar Paciente</button><br></br>
            </form>
        </div>
    )
}