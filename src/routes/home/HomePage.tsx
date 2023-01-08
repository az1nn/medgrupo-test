import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="w-full p-8 text-center">
        <h1 className="mb-6 text-xl">Sistema de Gestão de Escolas</h1>
        <div className="w-full flex justify-center">
          <button
            className="cursor-pointer rounded border bg-emerald-500 p-2 mx-6 hover:bg-emerald-300"
            onClick={() => navigate('/escolas')}
          >
            Lista de Escolas
          </button>
          <button
            className="cursor-pointer rounded border bg-emerald-500 p-2 mx-6 hover:bg-emerald-300"
            onClick={() => navigate('/escolas')}
          >
            Adicionar Escola
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
