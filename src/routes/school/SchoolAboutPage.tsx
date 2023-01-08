import { AddClassModal } from 'components/Modal/AddClassModal'
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { IClass } from 'routes/schools/SchoolsListPage'

function SchoolAboutPage() {
  const { id } = useParams()
  const [showModal, setShowModal] = useState(false)
  const [gradeInput, setGradeInput] = useState('')
  const [teacherInput, setTeacherInput] = useState('')
  const [studentsNumberInput, setStudentsNumberInput] = useState('')
  const [turnInput, setTurnInput] = useState('')
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const API_URL = 'http://localhost:3000/classes'
  const data = {
    grade: gradeInput,
    teacher: teacherInput,
    studentsQuantity: studentsNumberInput,
    turn: turnInput,
    schoolId: id
  }

  const fecthData = async () => {
    await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  const { mutate, isSuccess } = useMutation({
    mutationFn: fecthData
  })

  async function HandleSubmit() {
    setShowModal(false)
    mutate()
    navigate(0)
  }
  const SchoolData = useQuery('SchoolsList', async () => {
    const response = await fetch('http://localhost:3000/school/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.json()
  })
  const ClassesList = useQuery('ClassesList', async () => {
    const response = await fetch(
      'http://localhost:3000/classes?schoolId=' + id,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    return response.json()
  })
  function HandleAddButton() {
    setShowModal(true)
  }
  if (SchoolData.isLoading || ClassesList.isLoading) {
    return <div>Carregando...</div>
  }
  return (
    <div className="w-full">
      <div className="w-full p-6 text-center">
        <h1 className="text-xl">{SchoolData.data.name}</h1>
        <h3 className="mt-2 text-lg">{SchoolData.data.town}</h3>
        <div className="my-4 flex w-full flex-wrap justify-center">
          <div className="w-full ">
            <button
              className="rounded border bg-emerald-500 p-2"
              onClick={() => HandleAddButton()}
            >
              Adicionar Turma
            </button>
          </div>
          {ClassesList.data.map((item: IClass) => {
            return (
              <div className="m-4 w-1/2 rounded border p-2" key={item.id}>
                <div className="flex w-full flex-wrap p-2">
                  <p className="pr-2 font-bold">Professor(a):</p>
                  <p>{item.teacher}</p>
                </div>
                <div className="flex w-full flex-wrap p-2">
                  <p className="pr-2 font-bold">Série:</p>
                  <p>{item.grade}</p>
                </div>
                <div className="flex w-full flex-wrap p-2">
                  <p className="pr-2 font-bold">Nº de Aluno:</p>
                  <p>{item.studentsQuantity}</p>
                </div>
                <div className="flex w-full flex-wrap p-2">
                  <p className="pr-2 font-bold">Turno:</p>
                  <p>{item.turn}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {showModal && (
        <AddClassModal
          setShowModal={setShowModal}
          HandleSubmit={HandleSubmit}
          setGradeInput={setGradeInput}
          setTeacherInput={setTeacherInput}
          setStudentsNumberInput={setStudentsNumberInput}
          setTurnInput={setTurnInput}
        />
      )}
    </div>
  )
}

export default SchoolAboutPage
