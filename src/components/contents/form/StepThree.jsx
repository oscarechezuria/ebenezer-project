/* eslint-disable react/prop-types */
import Swal from 'sweetalert2'



export default function StepThree({stepForm, setStepForm}) {

    const buttonStep = (e) => {
        e.preventDefault()
        Swal.fire({
            title: "Excelente",
            text: "Sus datos han sido enviados con exito pronto el departamento xxxxx se pondrá en contacto con usted",
            icon: "success",
            
        });
        setStepForm(stepForm - 2)
    } 

    const buttonBackStep = (e) => {
        e.preventDefault()
        setStepForm(stepForm - 1)
    } 

  return (
                <form>
                    <div className="flex flex-col mb-2">
                        <label className="text-black">Nombre</label>
                        <input type="text" className="border border-one rounded-sm focus:outline-none mt-2 " />
                    </div>
                    <div className="flex flex-col  mb-2">
                        <label className="text-black">Apellido</label>
                        <input type="text" className="border border-one rounded-sm focus:outline-none mt-2 " />
                    </div>
                    <div className="flex flex-col  mb-2">
                        <label className="text-black">Cédula de Identidad</label>
                        <input type="text" className="border border-one rounded-sm focus:outline-none mt-2 " />
                    </div>
                    <div className="flex flex-col  mb-2">
                        <label className="text-black">Teléfono de Contacto</label>
                        <input type="text" className="border border-one rounded-sm focus:outline-none mt-2 " />
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-two mt-4 rounded-md px-6 py-2 text-base bg-opacity-80" onClick={buttonBackStep}>Atras</button>
                        <button className="bg-two mt-4 rounded-md px-6 py-2 text-base bg-opacity-80" onClick={buttonStep}>Siguiente</button>
                    </div>
                </form>
  )
}
