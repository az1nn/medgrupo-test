import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddSchoolPage() {
  const [nameInput, setNameInput] = useState('')
  const [townInput, setTownInput] = useState('')
  const [directorInput, setDirectorInput] = useState('')
  const navigate = useNavigate()
  async function HandleSubmit() {
    const API_URL = 'http://localhost:3000/school'
    const data = {
      name: nameInput,
      town: townInput,
      director: directorInput
    }
    const fecthData = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (fecthData.ok) {
      navigate('/escolas')
    }
  }
  return (
    <div className="w-full">
      <div className="w-full p-6 text-center">
        <h1 className="text-xl">Nova Escola</h1>
      </div>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault()
          HandleSubmit()
        }}
      >
        <div className="flex w-full flex-wrap justify-center">
          <label
            htmlFor="school_name"
            className="mb-2 mt-4 block w-full text-center text-sm font-medium text-gray-900"
          >
            Nome da Escola:
          </label>
          <input
            type="text"
            id="school_name"
            className="block w-1/3 rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Insira o nome"
            required
            onChange={(e) => {
              setNameInput(e.target.value)
            }}
          />
        </div>
        <div className="flex w-full flex-wrap justify-center">
          <label
            htmlFor="school_town"
            className="mb-2 mt-4 block w-full text-center text-sm font-medium text-gray-900"
          >
            Bairro:
          </label>
          <input
            type="text"
            id="school_town"
            className="block w-1/3 rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Insira o nome"
            required
            onChange={(e) => {
              setTownInput(e.target.value)
            }}
          />
        </div>
        <div className="flex w-full flex-wrap justify-center">
          <label
            htmlFor="school_director"
            className="mb-2 mt-4 block w-full text-center text-sm font-medium text-gray-900"
          >
            Diretor(a):
          </label>
          <input
            type="text"
            id="school_director"
            className="block w-1/3 rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Insira o nome"
            required
            onChange={(e) => {
              setDirectorInput(e.target.value)
            }}
          />
        </div>
        <div className="mt-8 flex w-full flex-wrap justify-center">
          <button className="rounded border bg-emerald-500 p-2" type="submit">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddSchoolPage
