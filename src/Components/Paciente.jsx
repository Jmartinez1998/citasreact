
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {id, nombre, propietario, email, alta, sintomas} = paciente;
    const HandleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')
        if(respuesta) {
            eliminarPaciente(id)
        }
    }
  return (
    <div className="m-3 bg-white px-5 py-10 rounded-xl shadow-md">
    <p className="font-bold mb-3 text-gray-700">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700">Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700">Email: {''}
        <span className="font-normal normal-case">{email}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700">Fecha ALta: {''}
        <span className="font-normal normal-case">{alta}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700">Sintomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
    </p>
    <div className="flex justify-between">
    <button type="button" className="py-2 px-10 bg-indigo-700 text-white
    uppercase font-bold rounded-lg" onClick={() => {setPaciente(paciente)}}>
        Editar
    </button>
    <button type="button" onClick={HandleEliminar} className="py-2 px-10 bg-red-700 text-white
    uppercase font-bold rounded-lg">
        Eliminar
    </button>
    </div>
</div>
  )
}

export default Paciente
