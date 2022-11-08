import React from 'react'

const useSelectPais = (label,opciones) => {

    const selectPais=()=>(
        <>
        
        <label className='text-gray-700'>{label}</label>
        <select className='mt-2 block w-full p-3 bg-gray-50 text-gray-700'>
            <option className='' value="">--Paises-- </option>
            {opciones.map(opcion=>(
                <option
                key={opcion.id}
                value={opcion.id}
                >
                    {opcion.nombre}
                </option>
            ))}
        </select>
        
        </>
    )
    return [ selectPais ]
}

export default useSelectPais