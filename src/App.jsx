import { useState, useEffect } from 'react'
import Formulario from "./Components/Formulario"
import Header from "./Components/Header"
import ListadoPacientes from "./Components/ListadoPacientes"

function App() {
  const [pascientes, setPascientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);  
  const [paciente, setPaciente] = useState({});

  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pascientes));
  }, [pascientes])

  const eliminarPaciente  = id => {
    const pacientesActualizados = pascientes.filter( paciente => paciente.id !== id)
    setPascientes(pacientesActualizados)
  }
  return (
      <div className="container mx-auto mt-20">
        <Header/>
        <div className="mt-12 md:flex">
          <Formulario
          paciente = {paciente}
          setPaciente={setPaciente}
          pascientes = {pascientes}
          setPascientes = {setPascientes}
          />
          <ListadoPacientes
            pascientes={pascientes}
            setPaciente={setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />
        </div>
      </div>
  )
}

export default App
