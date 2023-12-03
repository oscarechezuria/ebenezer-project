/* eslint-disable no-unreachable */
import { PiMotorcycleFill } from "react-icons/pi"
import { useState } from "react"
import StepOne from "./form/StepOne"
import StepTwo from "./form/StepTwo"
import StepThree from "./form/StepThree"


export default function FormWrapper() {
  const [stepForm, setStepForm] = useState(1)

  const callStep = () => {
    
    switch (stepForm) {
      case 1:
        return <StepOne stepForm={stepForm} setStepForm={setStepForm}/>
        break;
      case 2:
        return <StepTwo stepForm={stepForm} setStepForm={setStepForm}/>
        break;
      case 3:
        return <StepThree stepForm={stepForm} setStepForm={setStepForm}/>
        break;
      default: 
        break;
    }
  
  }

  return (
    <div className="form flex flex-col justify-center bg-one items-center py-6" id="form">
          <div className="flex flex-col justify-center items-center mb-6 text-4xl mt-14 text-white">
            <h2 className="flex text-3xl lg:text-4xl text-center mb-6 font-bold text-yellow-500">¿Quieres tu moto?</h2>
            <h2 className="flex text-2xl justify-center items-center">Sigue los pasos <span className="flex justify-center m-auto items-end ml-4 text-yellow-500 text-4xl"><PiMotorcycleFill/></span></h2>
          </div>
          <div className="flex gap-8 text-2xl mt-6 lg:text-4xl">
            <span className={`flex justify-center items-center text-one w-12 h-12 rounded-full ${stepForm === 1 ? "bg-yellow-500" : "bg-white"}`}>1</span>
            <span className={`flex justify-center items-center text-one w-12 h-12 rounded-full ${stepForm === 2 ? "bg-yellow-500" : "bg-white"}`}>2</span>
            <span className={`flex justify-center items-center text-one w-12 h-12 rounded-full ${stepForm === 3 ? "bg-yellow-500" : "bg-white"}`}>3</span>
          </div>
          <div className="bg-white border border-white mt-10 mb-10 p-10 rounded-lg bg-opacity-70 lg:px-16">
              {callStep(stepForm)}
          </div>
    </div>
  )
}
