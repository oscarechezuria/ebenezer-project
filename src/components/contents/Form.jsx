

export default function Form() {
  return (
    <div className="form flex flex-col justify-center items-center h-104" id="form">
          <div className="mb-6 text-4xl">
            <h2>Ingresa tus datos</h2>
          </div>
      <div className="border border-one p-10 rounded-lg bg-opacity-70 lg:px-16">
          <form>
              <div className="flex flex-col mb-2">
                <label className="text-one">Nombre</label>
                <input type="text" className="border border-one rounded-sm focus:outline-none mt-2 " />
              </div>
              <div className="flex flex-col  mb-2">
                <label className="text-one">Apellido</label>
                <input type="text" className="border border-one rounded-sm focus:outline-none mt-2 " />
              </div>
              <div className="flex flex-col  mb-2">
                <label className="text-one">Cédula de Identidad</label>
                <input type="text" className="border border-one rounded-sm focus:outline-none mt-2 " />
              </div>
              <div className="flex flex-col  mb-2">
                <label className="text-one">Teléfono de Contacto</label>
                <input type="text" className="border border-one rounded-sm focus:outline-none mt-2 " />
              </div>
              <button className="bg-two mt-4 rounded-md px-6 py-2 text-base bg-opacity-80">Enviar</button>
          </form>
      </div>
    </div>
  )
}
