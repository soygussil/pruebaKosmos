import { useState,useEffect } from "react";
import useSelectPais from "../Hooks/useSelectPais";
import { pais } from "../data/paises";
const Formulario = () => {
    const [SelectPais] = useSelectPais("Elige pais de nacimiento", pais);

    const [genero, setGenero] = useState(1);
    const cambioRadioGenero = e => {
        setGenero(e.target.value)
    }

    const registrarUsuario=(e)=>{
        e.preventDefault()
    }

    return (
        <>
            <form action="">
                <div className="mb-4">
                    <label htmlFor="nombre" className="text-gray">
                        Nombre:
                    </label>
                    <input
                        className="mt-2 block w-full p-3 bg-gray-50"
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Nombre(s)"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="primerApellido" className="text-gray">
                        Primer Apellido:
                    </label>
                    <input
                        className="mt-2 block w-full p-3 bg-gray-50"
                        type="text"
                        name="primerApellido"
                        id="primerApellido"
                        placeholder="Primer Apellido"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="genero" className="text-gray mt-2 block w-full p-3">
                        Genero:
                    </label>
                    <div>
                        <input
                            id='masculino'
                            type="radio"
                            value='1'
                            checked={genero == 1 ? true : false}
                            onChange={cambioRadioGenero}
                        />
                        <label htmlFor="masculino">Masculino</label>
                    </div>

                    <div>
                        <input
                            id='femenino'
                            type="radio"
                            value='2'
                            checked={genero == 2 ? true : false}
                            onChange={cambioRadioGenero}
                        />
                        <label htmlFor="femenino">Femenino</label>
                    </div>

                    <div>
                        <input
                            id='otro'
                            type="radio"
                            value='3'
                            checked={genero == 3 ? true : false}
                            onChange={cambioRadioGenero}
                        />
                        <label htmlFor="otro">Otro</label>
                    </div>

                </div>
                <div className="mb-4">
                    <SelectPais />
                </div>
                <input onClick={registrarUsuario} className="bg-indigo-600 text-white font-bold uppercase block w-full py-3 hover:bg-indigo-800" type="submit" value="Enviar" />
            </form>
        </>
    );
};

export default Formulario;
