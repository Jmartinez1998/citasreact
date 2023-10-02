
const ListadoPacientes = ({pascientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
        {pascientes && pascientes.length ? (
            <>
            <h2 className="font-black text-center text-3xl">Listado de pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y citas</span>
            </p>
            {
                pascientes.map((paciente) =>
                <Paciente 
                    key = {paciente.id}
                    paciente = {paciente}
                    setPaciente = {setPaciente}
                    eliminarPaciente = { eliminarPaciente }
                />
                )
            }
            </>
        ): (<>
            <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Comienza agregando pacientes {''}
                <span className="text-indigo-600 font-bold">y aparecerán en este listado</span>
            </p>
        </>)}

        
    </div>
  )
}

export default ListadoPacientes
