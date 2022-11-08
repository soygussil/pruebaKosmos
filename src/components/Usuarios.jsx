const usariosDB=[
  {
    id:1,
    nombre:'Gustavo',
    primerApellido:'Silva',
    genero:'Masculino',
    paisNacimiento:'México'
  },
  {
    id:2,
    nombre:'Pedro',
    primerApellido:'Perez',
    genero:'Masculino',
    paisNacimiento:'México'
  }
]

const Usuarios = () => {
  

  return (
    <div className=''>
        <h2 className='text-gray-700 text-3x2 font-bold'>Usuarios</h2>
      <p className='mt-3'>Administración de usuarios</p>

      <table className="w-full bg-white shadow mt-5 table-auto">
        <thead className="bg-indigo-700 text-white">
          <th className="p-2">id</th>
          <th className="p-2">Nombre</th>
          <th className="p-2">Primer Apellido</th>
          <th className="p-2">Genero</th>
          <th className="p-2">Pais de Nacimiento</th>
        </thead>
      </table>

      <table></table>

    </div>
  )
}

export default Usuarios