import { useNavigate } from 'react-router-dom'

export const AddClassModal = (props: any) => {
  const navigate = useNavigate()
  const {
    setShowModal,
    HandleSubmit,
    setGradeInput,
    setTeacherInput,
    setStudentsNumberInput,
    setTurnInput
  } = props
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-1/2 max-w-3xl">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
              <h3 className="text-3xl font-semibold">Adicionar nova turma:</h3>
              <button
                className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative w-full flex-auto p-6">
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
                    Professor(a):
                  </label>
                  <input
                    type="text"
                    id="school_name"
                    className="block w-1/2 rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Insira o nome"
                    required
                    onChange={(e) => {
                      setTeacherInput(e.target.value)
                    }}
                  />
                </div>
                <div className="flex w-full flex-wrap justify-center">
                  <label
                    htmlFor="school_town"
                    className="mb-2 mt-4 block w-full text-center text-sm font-medium text-gray-900"
                  >
                    Série:
                  </label>
                  <input
                    type="text"
                    id="school_town"
                    className="block w-1/2 rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Insira o nome"
                    required
                    onChange={(e) => {
                      setGradeInput(e.target.value)
                    }}
                  />
                </div>
                <div className="flex w-full flex-wrap justify-center">
                  <label
                    htmlFor="school_director"
                    className="mb-2 mt-4 block w-full text-center text-sm font-medium text-gray-900"
                  >
                    Turno:
                  </label>
                  <input
                    type="text"
                    id="school_director"
                    className="block w-1/2 rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Insira o nome"
                    required
                    onChange={(e) => {
                      setTurnInput(e.target.value)
                    }}
                  />
                </div>
                <div className="flex w-full flex-wrap justify-center">
                  <label
                    htmlFor="school_director"
                    className="mb-2 mt-4 block w-full text-center text-sm font-medium text-gray-900"
                  >
                    Nº de Alunos:
                  </label>
                  <input
                    type="text"
                    id="school_director"
                    className="block w-1/2 rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Insira o nome"
                    required
                    onChange={(e) => {
                      setStudentsNumberInput(e.target.value)
                    }}
                  />
                </div>
                <div className="mt-8 flex w-full flex-wrap justify-center">
                  <button
                    className="mx-4 rounded border bg-emerald-500 p-2"
                    type="submit"
                    onClick={() => HandleSubmit()}
                  >
                    Adicionar
                  </button>
                  <button
                    className="mx-4 rounded border bg-red-500 p-2"
                    type="button"
                    onClick={() => {
                      setShowModal(false)
                      navigate('/escolas')
                    }}
                  >
                    Fechar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  )
}
