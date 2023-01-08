import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

export interface IClass {
  id: number
  grade: number
  teacher: string
  turn: string
  studentsQuantity: number
  schoolId: number
}
export interface ISchool {
  id: number
  name: string
  town: string
  director: string
  classes: Array<IClass>
}

function SchoolsListPage() {
  const navigate = useNavigate()
  const SchoolsList = useQuery('SchoolsList', async () => {
    const response = await fetch('http://localhost:3000/school', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response)
    return response.json()
  })
  function handleClick(prop: number) {
    navigate('/escola/' + prop)
  }
  if (SchoolsList.isLoading) {
    return <div>Carregando....</div>
  }
  return (
    <div className="w-full">
      <div className="w-full p-6 text-center">
        <h1 className="text-xl">Listagem de Escolas</h1>
      </div>
      <div className="flex w-full flex-wrap justify-center">
        {SchoolsList.data.map((item: ISchool) => (
          <div
            className="m-4 w-1/2 cursor-pointer rounded border p-2 hover:border-stone-800"
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <div className="flex w-full flex-wrap p-2">
              <p className="pr-2 font-bold">Nome da escola:</p>
              <p>{item.name}</p>
            </div>
            <div className="flex w-full flex-wrap p-2">
              <p className="pr-2 font-bold">Bairro:</p>
              <p>{item.town}</p>
            </div>
            <div className="flex w-full flex-wrap p-2">
              <p className="pr-2 font-bold">Diretor(a) responsável:</p>
              <p>{item.director}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SchoolsListPage
