import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDeatilItem from "./PatientDeatilItem"

type PatientDetailsProps = {
  patient: Patient
}

export default function PatientDetails({patient}: PatientDetailsProps) {


  const {deletePatient, getPatientById} = usePatientStore();


  const handleClickDelete = () => {
    deletePatient(patient.id)
    toast('Paciente Eliminado Correctamente', {
          type: 'error',
          position: 'top-center'
    })
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDeatilItem
          label="ID"
          data={patient.id}
        />
        <PatientDeatilItem
          label="Nombre"
          data={patient.name}
        />
        <PatientDeatilItem
          label="Propietario"
          data={patient.caretaker}
        />
        <PatientDeatilItem
          label="Email"
          data={patient.email}
        />
        <PatientDeatilItem
          label="Fecha de alta"
          data={patient.date.toString()}
        />
        <PatientDeatilItem
          label="Sintomas"
          data={patient.symptoms}
        />

        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
            <button
              type="button"
              className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
              onClick={() => getPatientById(patient.id)}
            >Editar</button>
            <button
              type="button"
              className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
              onClick={handleClickDelete}
            >Eliminar</button>
        </div>
    </div>
  )
}
